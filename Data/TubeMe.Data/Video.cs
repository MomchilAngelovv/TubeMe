using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TubeMe.Data
{
    public class Video : IEntityMetaData
    {
        public Video()
        {
            this.Id = Guid.NewGuid().ToString();
            this.CreatedOn = DateTime.UtcNow;
        }

        public string Id { get; set; }
        [Required]
        public string VideoUrl { get; set; }
        [Required]
        public string UserId { get; set; }

        public virtual TubeMeUser User { get; set; }

        public DateTime CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public DateTime? DeletedOn { get; set; }
        public string MetaData { get; set; }
    }
}
