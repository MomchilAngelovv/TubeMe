﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace TubeMe.Data
{
    public class TubeMeRole : IdentityRole<string>, IEntityMetaData
    {
        public TubeMeRole()
        {
            this.Id = Guid.NewGuid().ToString("N");
            this.CreatedOn = DateTime.UtcNow;
        }

        public DateTime CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public DateTime? DeletedOn { get; set; }
        public string MetaData { get; set; }
    }
}
