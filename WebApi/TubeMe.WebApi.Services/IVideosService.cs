using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TubeMe.Data;

namespace TubeMe.WebApi.Services
{
    public interface IVideosService
    {
        public IEnumerable<Video> GetAll();
        Video Details(string id);
        Task<string> CreateAsync(string videoUrl, string userId);
    }
}
