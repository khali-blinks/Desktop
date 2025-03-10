function Table({data, config, keyFn}){
    const renderedHeaders = config.map((column) => {
        return (<th key={column.label}>{column.label}</th>)
    });

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return (
                <td className="p-2" key={column.label}>{column.render(rowData)}</td>
            );
        });

        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        );
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
};

export default Table;

const data = [
    { name: 'Tomato', cost: 10, weight: 5},
    { name: 'Carrot', cost: 15, weight: 2},
    { name: 'Onion', cost: 5, weight: 7},
];

function getSortValue(vegetable){
    return vegetable.weight;
}

data.sort((a,b) => {
    const valueA = getSortValue(a);
    const valueB = getSortValue(b);

    return valueB - valueA
})