using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;
using TubeMe.Data;
using TubeMe.WebApi.Models.BindingModels;
using TubeMe.WebApi.Services;

namespace TubeMe.WebApi.App.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class VideosController : ControllerBase
    {
        private readonly IVideosService videosService;

        public VideosController(IVideosService videosService)
        {
            this.videosService = videosService;
        }

        public ActionResult<object> Get(string userId)
        {
            var response = new
            {
                Data = this.videosService.GetAll(v => v.UserId == userId)
            };

            return response;
        }

        [HttpGet("{id}")]
        public ActionResult<object> GetDetails(string id)
        {
            var video = this.videosService.Details(id);

            var response = new
            {
                video.Id,
                video.VideoUrl,
                video.CreatedOn
            };

            return response;
        }

        [HttpPost]
        public async Task<ActionResult<object>> Create(VideosCreateBindingModel bindingModel)
        {
            var createdVideoUrl = await this.videosService.CreateAsync(bindingModel.VideoUrl, bindingModel.UserId);

            var response = new
            {
                NewVideoUrl = createdVideoUrl
            };

            return response;
        }
    }
}
