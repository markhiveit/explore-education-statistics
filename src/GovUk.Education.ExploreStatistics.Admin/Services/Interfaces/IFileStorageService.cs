﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GovUk.Education.ExploreStatistics.Admin.Services.Interfaces
{
    public interface IFileStorageService
    {
        Task UploadFileAsync(string sourceFile, string fileName, Guid releaseId);

        List<string> ListFiles(string directory);
    }
}
