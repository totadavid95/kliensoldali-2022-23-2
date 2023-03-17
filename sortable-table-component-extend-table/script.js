class SortableTable extends HTMLTableElement {
    constructor() {
        super();

        // console.log(this);
        
        this.table = this;

        this.thead = this.table.querySelector('thead');
        this.tbody = this.table.querySelector('tbody');

        if (!this.thead || !this.tbody) {
            throw Error('Invalid table');
        }

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
        // console.log(this);
        // console.log(event.target.cellIndex);
    
        this.renderTBody(this.sortRows(event.target.cellIndex, this.getTBodyRows()));
    }
}

customElements.define("sortable-table", SortableTable, { extends: "table" });
