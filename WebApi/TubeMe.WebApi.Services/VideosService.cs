using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TubeMe.Data;
using TubeMe.WebApi.Models.ServiceModels;

namespace TubeMe.WebApi.Services
{
    public class VideosService : IVideosService
    {
        private readonly TubeMeDbContext db;

        public VideosService(TubeMeDbContext db)
        {
            this.db = db;
        }

        public async Task<VideosCreateServiceModel> CreateAsync(string videoUrl, string userId)
        {
            var video = new Video
            {
                VideoUrl = videoUrl,
                UserId = userId
            };

            await this.db.Videos.AddAsync(video);
            await this.db.SaveChangesAsync();

            var result = new VideosCreateServiceModel
            {
                Id = video.Id,
                VideoUrl = video.VideoUrl
            };

            return result;
        }

        public async Task DeleteAsync(string videoId, string userId)
        {
            var videoToDelete = this.db.Videos.SingleOrDefault(v => v.Id == videoId && v.UserId == userId);

            this.db.Videos.Remove(videoToDelete);
            await this.db.SaveChangesAsync();
        }

        public Video Details(string id)
        {
            return this.db.Videos.FirstOrDefault(v => v.Id == id);
        }

        public IEnumerable<Video> GetAll()
        {
            return this.db.Videos.ToList();
        }

        public IEnumerable<Video> GetAll(Expression<Func<Video, bool>> filter)
        {
            return this.db.Videos.Where(filter);
        }
    }
}
