import Dropdown from "../components/DropDown";
import { useState } from "react";

function DropdownPage() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    }

    const options = [
        { label : 'Red', value: 'red'},
        { label : 'Green', value: 'green'},
        { label : 'Blue', value: 'blue'}
    ]
    return <Dropdown options={options} value={selection} onChange={handleSelect}/>
}

export default DropdownPage;

function App() {
    return <div></div>
}
