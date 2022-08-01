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
function getPassingGrades(grades) {
    return grades.filter(function(grade) {
        return grade >= 10
    })
}
function getFailingGrades(grades) {
    return grades.filter(function(grade) {
        return grade < 10
    })
}
