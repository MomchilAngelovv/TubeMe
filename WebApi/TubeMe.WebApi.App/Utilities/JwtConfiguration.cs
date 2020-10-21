﻿namespace TubeMe.WebApi.App.Utilities
{
    public class JwtConfiguration
    {
        public string Secret { get; set; }
        public string Issuer { get; set; }
        public string Audience { get; set; }
    }
}
