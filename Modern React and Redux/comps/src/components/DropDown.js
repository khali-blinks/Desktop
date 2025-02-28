import { useState, useEffect } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({options, onChange, value}){
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        const handler = (event) => {
            console.log(event.target);
        }

        document.addEventListener('click',handler,true);
    },[])

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        // CLOSE DROPDOWN
        setIsOpen(false);
        // WHAT OPTION DID THE USER CLICK ON?
        onChange(option);
    }

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" 
        onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
    })

    return (
        <div className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" 
                onClick={handleClick}>{value?.label || 'Select...'}<GoChevronDown className="text-lg"/>
            </Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    )
}

export default Dropdown;

const dropdown = document.querySelector('wr');

const handleClick = (event) => {
    if (dropdown.contains(event.target)){
        console.log('Inside dropdown');
    } else{
        console.log('Outside dropdown')
    }
}

document.addEventListener('click',handleClick,true);