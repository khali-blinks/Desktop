import { useState } from "react";
import Table from "./Table";

function SortableTable(props){
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const { config, data } = props;

    const handleClick = (label) => {
        if (sortOrder === null){
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc'){
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc'){
            setSortOrder(null);
            setSortBy(null);
        }
    }

    const updatedConfig = config.map((column) => {
        if (!column.sortValue){
            return column
        }

        return {
            ...column,
            header : () => <th onClick={()=> handleClick(column.label)}>{column.label} is sort</th>
        }
    })

    // Only sort data if sortOrder && sortBy are not null
    // Then make a copy of the 'data' prop
    // Find the correct sortValue function and use it for sorting
    let sortedData = data;
    if (sortOrder && sortBy){
        
    }
    return <Table {...props} config={updatedConfig}/>
}

export default SortableTable;

