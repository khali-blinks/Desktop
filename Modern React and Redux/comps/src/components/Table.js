function Table({data}){
    const rendereddata = data.map((item,index)=>{
        return <div>{item.name} {index}</div>
    })
    return <div key={data.score}>{rendereddata}</div>;
};

export default Table;