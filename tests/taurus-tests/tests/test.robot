*** Settings ***
Resource    libs/library.robot

Suite Setup       user opens the browser
Suite Teardown    user closes the browser

*** Test Cases ***
Validate Home page breadcrumbs
    [Tags]  HappyPath
    user goes to url  ${url}
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(1)   Home

Validate Theme page breadcrumbs
    [Tags]  HappyPath
    user clicks element  css:[data-testid="home-page--themes-link"]
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(2)  Themes


    user clicks link    Home
    user waits until page contains element  css:[data-testid="home-page--heading"]

    user clicks element  css:[data-testid="home-page--themes-link"]
    user waits until page contains    Find themes

Validate Schools page breadcrumbs
    [Tags]  HappyPath
    user clicks element  css:[data-testid="content-item-list--schools"]
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(1)   Home
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(2)   Themes
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(3)   Schools

    user clicks link    Home
    user waits until page contains element  css:[data-testid="home-page--heading"]
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(1)   Home
    user goes back

    user clicks link    Themes
    user waits until page contains    Find themes
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(1)   Home
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(2)   Themes
    user goes back

Validate that Pupil Absence in Schools in England page breadcrumbs
    [Tags]  HappyPath
    user clicks element  css:[data-testid="content-item-list--absence-and-exclusions"]
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(1)   Home
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(2)   Themes
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(3)   Schools
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(4)   Absence and exclusions

    user clicks element  css:[data-testid="content-item-list--pupil-absence-in-schools-in-england"]
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(1)   Home
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(2)   Themes
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(3)   Schools
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(4)   Absence and exclusions
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(5)   Pupil absence in schools in england

    user clicks link    Absence and exclusions
    user waits until page contains  Find absence and exclusions statistics
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(1)   Home
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(2)   Themes
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(3)   Schools
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(4)   Absence and exclusions
    user goes back

    user clicks link    Schools
    user waits until page contains  Find schools statistics
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(1)   Home
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(2)   Themes
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(3)   Schools
    user goes back

    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(1)   Home
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(2)   Themes
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(3)   Schools
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(4)   Absence and exclusions
    user checks element should contain  css:[data-testid="breadcrumbs--list"] li:nth-child(5)   Pupil absence in schools in england

