
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace mission_5.Models {
    public class CalculationModel {
        [Required]
        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public double grade1 { get; set; } = 0.0;

        [Required]
        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public double grade2 { get; set; } = 0.0;

        [Required]
        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public double grade3 { get; set; } = 0.0;

        // public decimal avgGrade { get; set; } = (self.grade1 + self.grade2 + self.grade3) / 3;
    }
}
