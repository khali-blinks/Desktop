import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { removeCar } from "../store";

const memoizedCars = createSelector(
    // Input selectors (extract raw data):
    [(state) => state.cars.data, (state) => state.cars.searchTerm],
    
    // Output selector (transformation function):
    (data, searchTerm) =>
      data.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

function CarList(){
    const dispatch = useDispatch();
    const cars = useSelector(memoizedCars);
    const name = useSelector((state) => state.form.name); 

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id))
    }
    
    const renderedCars = cars.map((car) => {
        // DECIDE IF THIS CAR SHOULD BE BOLD
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button 
                    className="button is-danger"
                    onClick={() => handleCarDelete(car)}
                >Delete
                </button>
            </div>
        )
    })

    return (
        <div className="car-list">
            {renderedCars}
            <hr/>
        </div>
    )  
}

export default CarList;