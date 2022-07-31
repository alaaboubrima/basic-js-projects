const gradesForm = document.querySelector("#grades-form");
const yourGrade = document.querySelector("#your-grade");

const grades = [];

const renderStats2Table = grades => {
    const tbody = document.querySelector("#stats-table2 tbody");
    tbody.innerHTML = `<tr>
        <td>${getPassingGrades(grades)}</td>
        <td>${getFailingGrades(grades)}</td>
        <td>${getRaisedGrades(grades)}</td>
    </tr>`;
}

const renderStatsTable = grades => {
    const tbody = document.querySelector("#stats-table tbody");
    tbody.innerHTML = `<tr>
        <td>${getNumberOfGrades(grades)}</td>
        <td>${getSumGrades(grades)}</td>
        <td>${getAverageValue(grades)}</td>
    </tr>`;
}

const render = grades => {
    console.log("Grades: " + grades.join(', '));
    renderStatsTable(grades);
    renderStats2Table(grades);
}

