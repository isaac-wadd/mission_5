
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace mission_5.Models {
    public class CalculationModel {

        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public double assignments { get; set; } = 0.0;

        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public double groupProjects { get; set; } = 0.0;

        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public double quizzes { get; set; } = 0.0;

        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public double midterm { get; set; } = 0.0;

        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public double final { get; set; } = 0.0;

        [Range(0, 100, ErrorMessage = "Must be between 0 and 100")]
        public double intex { get; set; } = 0.0;
    }
}
