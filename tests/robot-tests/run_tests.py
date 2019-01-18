#!/usr/bin/env python

"""
*** Robot Framework Test Runner Script ***

Options:
-v|--visual : Don't run the tests headless. Usage: "pipenv run python run_tests.py -v"

-e|--env : Run against specific environment, "local", "test", "stage", "prod".
Usage: "pipenv run python run_tests.py -e test"

-h|--happypath: Run happypath tests only. Usage: "pipenv run python run_tests.py -h"

-b BROWSER|--browser BROWSER : Run a different browser to the default, chrome.
Usage: "pipenv run python run_tests.py -b firefox". You will need to install the webdriver for that browser (e.g. geckodriver for firefox)

-f FILE|--file FILE : To run a specific test file or folder instead of the
entire tests/ directory. Usage: "pipenv run python run_tests.py -f tests/directorynamehere/" OR "pipenv run python run_tests.py -f tests/directorynamehere/testsuitenamehere.robot"

-i INTERPRETER|--interp INTERPRETER : Run tests through a different interpreter
than pabot. Mainly for using robot, which doesn't run the test suites in parallel.
Usage: "pipenv run python run_tests.py -i robot"

-p|--profile : Additionally output python profile information
AND keyword profile information. Outputs log files to test-results directory.
Usage: "pipenv run python run_tests.py -p"

--ci : Add arguments needed when running the tests as part of the CI pipeline.
"""

import os
import sys
import cProfile
import pstats
import scripts.keyword_profile as kp
import scripts.warm_up_servers as warm_up_servers

arguments = []
headless = True
happypath = False
profile = False
ci = False
tests = "tests/"
browser = "chrome"
interp = "pabot"

env = "test"  # by default, run tests against test environment
url = "about:blank"
localUrl = "http://localhost:3000"
testUrl = "https://educationstatisticstest.z6.web.core.windows.net"
stageUrl = "https://educationstatisticsstage.z6.web.core.windows.net"
prodUrl = "https://educationstatistics.z6.web.core.windows.net"

ci_timeout = 10
ci_implicit_wait = 10

# Process arguments
for i in range(1, len(sys.argv)):
    if sys.argv[i] == "-v" or sys.argv[i] == "--visual":
        headless = False
    elif sys.argv[i] == "-e" or sys.argv[i] == "--env":
        env = sys.argv[i+1]  # NOTE: could add error checking...
    elif sys.argv[i] == "-h" or sys.argv[i] == "--happypath":
        happypath = True
    elif sys.argv[i] == "-b" or sys.argv[i] == "--browser":
        browser = sys.argv[i+1]  # NOTE: could add error checking...
    elif sys.argv[i] == "-f" or sys.argv[i] == "--file":
        tests = sys.argv[i+1]  # NOTE: could add error checking...
    elif sys.argv[i] == "-i" or sys.argv[i] == "--interp":
        interp = sys.argv[i+1]  # NOTE: could add error checking...
    elif sys.argv[i] == "-p" or sys.argv[i] == "--profile":
        profile = True
    elif sys.argv[i] == "--ci":
      ci = True

arguments += ["--outputdir", "test-results/", "--exclude", "Failing",
              "--exclude", "UnderConstruction"]

if happypath:
    arguments += ["--include", "HappyPath"]

if ci:
  arguments += ["--xunit", "xunit", "-v", "timeout:" + str(ci_timeout), "-v", "implicit_wait:" + str(ci_implicit_wait)]

if headless:
    arguments += ["-v", "headless:1"]
else:
    arguments += ["-v", "headless:0"]

if env == 'local':
    url = localUrl
elif env == 'test':
    url = testUrl
elif env == 'stage' or env == "staging":
    url = stageUrl
elif env == "prod" or env == "live":
    url = prodUrl
else:
    raise Exception('Invalid environment \"' + env + '\"! Must be \"local\", \"test\", \"stage\", or \"prod\"!')

arguments += ["-v", "url:" + url]

arguments += ["-v", "browser:" + browser]

arguments += [tests]

# Wait until environment is warmed up
warm_up_servers.wait_for_server(url)

# Run tests
if interp == "robot":
    from robot import run_cli
    if profile:
        # Python profiling
        cProfile.run('run_cli(arguments)', 'profile-data')
        stream = open('test-results/python-profiling-results.log', 'w')
        p = pstats.Stats('profile-data', stream=stream)
        p.sort_stats('time')
        # p.sort_stats('cumulative')
        p.print_stats()
        os.remove('profile-data')

        # Keyword profiling
        kp.run_keyword_profile('test-results/output.xml',
                               printresults=False,
                               writepath='test-results/keyword-profiling-results.log')
        print("\nProfiling logs created in test-results/")
    else:
        run_cli(arguments)
elif interp == "pabot":
    from pabot.pabot import main
    if profile:
        # Python profiling
        cProfile.run('main(arguments)', 'profile-data')
        stream = open('test-results/python-profiling-results.log', 'w')
        p = pstats.Stats('profile-data', stream=stream)
        p.sort_stats('time')
        # p.sort_stats('cumulative')
        p.print_stats()
        os.remove('profile-data')

        # Keyword profiling
        kp.run_keyword_profile('test-results/output.xml',
                               printresults=False,
                               writepath='test-results/keyword-profiling-results.log')
        print("\nProfiling logs created in test-results/")
    else:
        main(arguments)
