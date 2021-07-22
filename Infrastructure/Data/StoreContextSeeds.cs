using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public class StoreContextSeeds
    {
        public static async Task SeedAsync(StoreContext context, ILoggerFactory loggerFactory)
        {

            try
            {
                var folderName = Path.Combine("Content/", "images/");
                var folderAssetsName = Path.Combine("Content/", "imageSeeds/");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

                if (!context.ImageAssets.Any())
                {
                    var currentImages = Directory.GetFiles(folderName);
                    var imageSeeds = Directory.GetFiles(folderAssetsName);
                    foreach (var item in imageSeeds)
                    {
                        var title = item.Split("Content/\\imageSeeds\\")[1];
                        title = title.Replace(" ", "");
                        var img = new ImageAssets(title, item);
                        context.Add(img);
                    }
                    foreach (var item in currentImages)
                    {
                        var path = Path.Combine(Directory.GetCurrentDirectory(), item);

                        if (System.IO.File.Exists(path))
                        {
                            System.IO.File.Delete(path);
                        }
                    }
                }

                await context.SaveChangesAsync();



            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<StoreContextSeeds>();
                logger.LogError(ex.Message);
            }
        }
    }
}