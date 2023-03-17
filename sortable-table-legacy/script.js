const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');

function getTBodyRows() {
    return [...tbody.children].map(row => [...row.children].map(cell => cell.innerHTML));
}

function sortRows(colIndex, rows) {
    const colCount = rows[0].length;

    if (colIndex < 0 || colIndex >= colCount) {
        throw new Error('Invalid column index');
    }

    return rows.sort((a,b) => a[colIndex].localeCompare(b[colIndex]));
}

function renderTBody(rows) {
    tbody.innerHTML = rows.map(row => 
        `<tr>${
            row.map(cell => 
                `<td>${cell}</td>`
            ).join('')
        }</tr>`
    ).join('')
}

thead.addEventListener('click', function (event) {
    // console.log(event.target.cellIndex);

    renderTBody(sortRows(event.target.cellIndex, getTBodyRows()));
});
