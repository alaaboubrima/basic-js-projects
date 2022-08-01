function getNumberOfGrades(grades) {
    return grades.length;
}
function getSumGrades(grades) {
    let sum = 0;
    grades.forEach(function(grade) {
        sum += grade;
    })
return sum;
}
function getAverageValue(grades) {
    return getSumGrades(grades) / getNumberOfGrades(grades);
}
