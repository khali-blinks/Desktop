import { Children, createContext } from "react";

const NavigationContext = createContext();

function NavigationProvider(children){
    return (
        <NavigationContext.Provider value={{}}>
            {Children}
        </NavigationContext.Provider>
    )

};

export default NavigationContext;