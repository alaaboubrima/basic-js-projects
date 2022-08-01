function getNumberOfGrades(grades) {
    // return the number of grades
    return grades.length;
}
function getSumGrades(grades) {
    // return the sum of all the grades
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
function getRaisedGrades(grades) {
    return grades.map(function(grade) {
        if (grade < 20) return grade += 1;
        else return grade; 
    })
}