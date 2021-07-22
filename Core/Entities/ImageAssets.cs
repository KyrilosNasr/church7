using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class ImageAssets : BaseEntity
    {
        public ImageAssets(string title, string imgUrl)
        {
            Title = title;
            ImgUrl = imgUrl;
        }
        public string Title { get; set; }
        public string ImgUrl { get; set; }
    }
}
