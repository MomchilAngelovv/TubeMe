using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
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

        public ActionResult<object> Get()
        {
            var response = new
            {
                Data = this.videosService.GetAll()
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
