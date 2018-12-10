using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using DataApi.Models;
using Microsoft.AspNetCore.Identity.UI.Pages.Internal.Account;

namespace DataApi
{
    public class CsvReader : ICsvReader
    {
        private readonly string _path;
        
        public CsvReader(string path = "")
        {
            _path = path;
        }
        
        public IEnumerable<GeographicModel> GeoLevels(string publication)
        {
            var file = publication + ".csv";
            var directory = Directory.GetCurrentDirectory();
            var newPath = Path.GetFullPath(Path.Combine(directory, _path));
            
            var path = newPath + "/data/" + file;
            
            Console.WriteLine("Reading data from:" + directory + file);

            var headers = File.ReadLines(path).First().Split(',').ToList();
            
            var data = File.ReadAllLines(path)
                .Skip(1)
                .Select(x => GeographicFromCsv(x, headers)).ToList();

            Console.WriteLine(data.Count() +" rows");
            return data;
        }
        
        public IEnumerable<LaCharacteristicModel> LaCharacteristics(string publication)
        {
            var directory = Directory.GetCurrentDirectory() + "/data/";
            var file = publication + ".csv";
            var path = directory + file;
            
            Console.WriteLine("Reading data from:" + directory + file);

            var headers = File.ReadLines(path).First().Split(',').ToList();
            
            var data = File.ReadAllLines(path)
                .Skip(1)
                .Select(x => LaCharacteristicFromCsv(x, headers)).ToList();

            Console.WriteLine(data.Count() +" rows");
            return data;
        }
        
        public IEnumerable<NationalCharacteristicModel> NationalCharacteristics(string publication)
        {
            var directory = Directory.GetCurrentDirectory() + "/data/";
            var file = publication + ".csv";
            var path = directory + file;
            
            Console.WriteLine("Reading data from:" + directory + file);

            var headers = File.ReadLines(path).First().Split(',').ToList();
            
            var data = File.ReadAllLines(path)
                .Skip(1)
                .Select(x => NationalCharacteristicFromCsv(x, headers)).ToList();

            Console.WriteLine(data.Count() +" rows");
            return data;
        }

        private GeographicModel GeographicFromCsv(string csvLine, List<string> headers)
        {
            var headerValues = new string[] {"year","level","country_code","country_name","region_code","region_name","old_la_code","new_la_code","la_name","estab","laestab","acad_type","academy_type","acad_opendate","academy_open_date","school_type"};
            var values = csvLine.Split(',');
            var model = new GeographicModel
            {
                Year = int.Parse(values[headers.FindIndex(h => h.Contains("year"))]),
                Level = values[headers.FindIndex(h => h.Contains("level"))],
                Country = new Country
                {
                    Code = values[headers.FindIndex(h => h.Contains("country_code"))],                    
                    Name = values[headers.FindIndex(h => h.Contains("country_name"))]
                },
                Region = new Region
                {
                    Code = values[headers.FindIndex(h => h.Contains("region_code"))], 
                    Name = values[headers.FindIndex(h => h.Contains("region_name"))]
                },
                LocalAuthority = new LocalAuthority
                {
                    Old_Code = values[headers.FindIndex(h => h.Contains("old_la_code"))], 
                    Code = values[headers.FindIndex(h => h.Contains("new_la_code"))], 
                    Name = values[headers.FindIndex(h => h.Contains("la_name"))]
                },
                School = new School
                {
                    estab = values[headers.FindIndex(h => h.Contains("estab"))], 
                    laestab = values[headers.FindIndex(h => h.Contains("laestab"))],
                    acad_type = values[headers.FindIndex(h => h.Contains("acad_type") || h.Contains("academy_type"))], 
                    acad_opend = values[headers.FindIndex(h => h.Contains("acad_opendate") || h.Contains("academy_open_date"))],
                },
                SchoolType = values[headers.FindIndex(h => h.Contains("school_type"))], 
                Attributes = new Dictionary<string, string>()
               
            };

            for (var i = 0; i < values.Count(); i++) 
            {
                if (headerValues.Contains(headers[i]) == false)
                {
                    model.Attributes.Add(headers[i], values[i]);
                }
            }

            return model;
        }
        
        private LaCharacteristicModel LaCharacteristicFromCsv(string csvLine, List<string> headers)
        {
            var headerValues = new string[] {"year","level","country_code","country_name","region_code","region_name","old_la_code","new_la_code","la_name","school_type"};
            var values = csvLine.Split(',');
            var model = new LaCharacteristicModel
            {
                Year = int.Parse(values[headers.FindIndex(h => h.Contains("year"))]),
                Level = values[headers.FindIndex(h => h.Contains("level"))],
                Country = new Country
                {
                    Code = values[headers.FindIndex(h => h.Contains("country_code"))],                    
                    Name = values[headers.FindIndex(h => h.Contains("country_name"))]
                },
                Region = new Region
                {
                    Code = values[headers.FindIndex(h => h.Contains("region_code"))], 
                    Name = values[headers.FindIndex(h => h.Contains("region_name"))]
                },
                LocalAuthority = new LocalAuthority
                {
                    Old_Code = values[headers.FindIndex(h => h.Contains("old_la_code"))], 
                    Code = values[headers.FindIndex(h => h.Contains("new_la_code"))], 
                    Name = values[headers.FindIndex(h => h.Contains("la_name"))]
                },
                SchoolType = values[headers.FindIndex(h => h.Contains("school_type"))], 
                Characteristics = new Dictionary<string, string>()
               
            };

            for (var i = 0; i < values.Count(); i++) 
            {
                if (headerValues.Contains(headers[i]) == false)
                {
                    model.Characteristics.Add(headers[i], values[i]);
                }
            }

            return model;
        }
        
        private NationalCharacteristicModel NationalCharacteristicFromCsv(string csvLine, List<string> headers)
        {
            var headerValues = new string[] {"year","level","country_code","country_name","region_code","region_name","old_la_code","new_la_code","la_name","school_type"};
            var values = csvLine.Split(',');
            var model = new NationalCharacteristicModel
            {
                Year = int.Parse(values[headers.FindIndex(h => h.Contains("year"))]),
                Level = values[headers.FindIndex(h => h.Contains("level"))],
                Country = new Country
                {
                    Code = values[headers.FindIndex(h => h.Contains("country_code"))],                    
                    Name = values[headers.FindIndex(h => h.Contains("country_name"))]
                },
                SchoolType = values[headers.FindIndex(h => h.Contains("school_type"))], 
                Characteristics = new Dictionary<string, string>()
               
            };

            for (var i = 0; i < values.Count(); i++) 
            {
                if (headerValues.Contains(headers[i]) == false)
                {
                    model.Characteristics.Add(headers[i], values[i]);
                }
            }

            return model;
        }
    }
}