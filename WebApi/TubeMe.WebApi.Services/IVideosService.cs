using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TubeMe.Data;

namespace TubeMe.WebApi.Services
{
    public interface IVideosService
    {
        public IEnumerable<Video> GetAll();
        public IEnumerable<Video> GetAll(Expression<Func<Video, bool>> filter);
        Video Details(string id);
        Task<string> CreateAsync(string videoUrl, string userId);
    }
}
