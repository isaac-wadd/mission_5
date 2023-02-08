
// using a dictionary in this case makes it easier to refer to the specific point weights
const GRADE_WEIGHTS = {
    'Assignments': 0.5,
    'Group Projects': 0.1,
    'Quizzes': 0.1,
    'Midterm Exam': 0.1,
    'Final Exam': 0.1,
    'INTEX': 0.1
}

$('.gradeInput').each(function() {
    let newLabel = $('<label>');
    newLabel.attr('for', $(this).attr('id'));
    newLabel.text($(this).attr('id') + ' grade');
    let newBr = $('<br>');
    $(this).before(newLabel).before(newBr).before(newBr);
});

function calcOverallGrade() {

// add functionality of collecting the values from each input
    let overall = 0;
    $('.gradeInput').each(function() {
        overall += (Number($(this).val()) * GRADE_WEIGHTS[$(this).attr('name')]);
    });

// round overall grade, set text to updated overall
    overall = Math.floor(overall + 0.5);
    $('#overallGrade').text('Overall Grade: ' + String(overall) + '%');
}

// use the form to calculate the overall grade and output it using function 'calcOverallGrade()'
$('#gradesForm').submit(function(e) {
    calcOverallGrade();
    e.preventDefault();
});

calcOverallGrade();
