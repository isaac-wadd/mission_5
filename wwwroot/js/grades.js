
const gradeCalcSpan = document.getElementById('gradesCalc');
const overallGradeSpan = document.getElementById('overallGrade');

const gradeWeights = {
    'Assignments': 0.5,
    'Group Projects': 0.1,
    'Quizzes': 0.1,
    'Midterm Exam': 0.1,
    'Final Exam': 0.1,
    'Intex': 0.1
}

function fillGrades() {
    for (let k in gradeWeights) {
        let newDiv = document.createElement('div');
        newDiv.className = 'form-floating mb-3';

        let newInputLabel = document.createElement('label');
        newInputLabel.htmlFor = k;
        newInputLabel.innerText = k;

        let newInput = document.createElement('input');
        newInput.name = k;
        newInput.className = 'form-control grade';
        newInput.type = 'text';

        newDiv.appendChild(newInput);
        newDiv.appendChild(newInputLabel);
        gradeCalcSpan.appendChild(newDiv);
    }
}

fillGrades();

function calcOverallGrade() {
    let overall = 0;
    let inputVals = [];
    $('.grade').each(function() {
        inputVals.push($(this).val());
    });
    console.log(inputVals);
    $('.grade').each(function() {
        console.log(Number($(this).val()) / 100 * gradeWeights[$(this).attr('name')]);
        overall += (Number($(this).val()) / 100 * gradeWeights[$(this).attr('name')]);
    });
    overall = Math.floor((overall * 100) + 0.5);
    console.log(overall);
    overallGradeSpan.innerText = 'Overall Grade: ' + String(overall) + '%';
}

$('.grade').change(function() {
    calcOverallGrade();
});
