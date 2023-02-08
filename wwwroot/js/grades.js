
const gradeWeights = {
    'Assignments': 0.5,
    'Group Projects': 0.1,
    'Quizzes': 0.1,
    'Midterm Exam': 0.1,
    'Final Exam': 0.1,
    'INTEX': 0.1
}

$('#gradesForm').submit(function(e) {
    e.preventDefault();
});

function calcOverallGrade() {
    let overall = 0;
    $('.gradeInput').each(function() {
        overall += (Number($(this).val()) / 100 * gradeWeights[$(this).attr('name')]);
    });
    overall = Math.floor((overall * 100) + 0.5);
    console.log(overall);
    $('#overallGrade').text('Overall Grade: ' + String(overall) + '%');
}

$('.gradeInput').change(function() {
    calcOverallGrade();
});
