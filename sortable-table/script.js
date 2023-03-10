// const table = document.querySelector('table');
// const thead = table.querySelector('thead');
// const tbody = table.querySelector('tbody');

// function getTBodyRows() {
//     return [...tbody.children].map(row => [...row.children].map(cell => cell.innerHTML));
// }

// function sortRows(colIndex, rows) {
//     const colCount = rows[0].length;

//     if (colIndex < 0 || colIndex >= colCount) {
//         throw new Error('Invalid column index');
//     }

//     return rows.sort((a,b) => a[colIndex].localeCompare(b[colIndex]));
// }

// function renderTBody(rows) {
//     tbody.innerHTML = rows.map(row => 
//         `<tr>${
//             row.map(cell => 
//                 `<td>${cell}</td>`
//             ).join('')
//         }</tr>`
//     ).join('')
// }

// thead.addEventListener('click', function (event) {
//     // console.log(event.target.cellIndex);

//     renderTBody(sortRows(event.target.cellIndex, getTBodyRows()));
// });

class SortableTable {
    // table = document.querySelector('#t1')
    constructor(table) {
        if (!table) {
            throw new Error('Invalid table');
        }

        this.table = table;
        this.thead = table.querySelector('thead');
        this.tbody = table.querySelector('tbody');

        this.thead.addEventListener('click', this._onClick.bind(this));
    }

    getTBodyRows() {
        return [...this.tbody.children].map(row => [...row.children].map(cell => cell.innerHTML));
    }

    sortRows(colIndex, rows) {
        const colCount = rows[0].length;

        if (colIndex < 0 || colIndex >= colCount) {
            throw new Error('Invalid column index');
        }

        return rows.sort((a,b) => a[colIndex].localeCompare(b[colIndex]));
    }

    renderTBody(rows) {
        this.tbody.innerHTML = rows.map(row => 
            `<tr>${
                row.map(cell => 
                    `<td>${cell}</td>`
                ).join('')
            }</tr>`
        ).join('')
    }

    _onClick(event) {
        // console.log(event.target.cellIndex);
    
        this.renderTBody(this.sortRows(event.target.cellIndex, this.getTBodyRows()));
    }
}

const st1 = new SortableTable(document.querySelector('#t1'));
const st2 = new SortableTable(document.querySelector('#t2'));
