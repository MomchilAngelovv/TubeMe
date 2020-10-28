using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TubeMe.Data;

namespace TubeMe.WebApi.Services
{
    public class VideosService : IVideosService
    {
        private readonly TubeMeDbContext db;

        public VideosService(TubeMeDbContext db)
        {
            this.db = db;
        }

        public async Task<string> CreateAsync(string videoUrl, string userId)
        {
            var video = new Video
            {
                VideoUrl = videoUrl,
                UserId = userId
            };

            await this.db.Videos.AddAsync(video);
            await this.db.SaveChangesAsync();

            return video.VideoUrl;
        }

        public IEnumerable<Video> GetAll()
        {
            return this.db.Videos.ToList();
        }
    }
}
