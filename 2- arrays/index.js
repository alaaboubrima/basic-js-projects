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

