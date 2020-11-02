using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Claims;
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
        public async Task<ActionResult<object>> Post(VideosCreateBindingModel bindingModel)
        {
            var createdVideo = await this.videosService.CreateAsync(bindingModel.VideoUrl, bindingModel.UserId);

            var response = new
            {
                createdVideo.Id,
                createdVideo.VideoUrl
            };

            return response;
        }

        [Authorize]
        [HttpDelete("videoId")]
        public async Task<ActionResult<object>> Delete(string videoId)
        {
            var userId = this.User.FindFirstValue(ClaimTypes.NameIdentifier);
            await this.videosService.DeleteAsync(videoId, userId);

            var response = new
            {
                Deleted = true
            };

            return response;
        }

    }
}
