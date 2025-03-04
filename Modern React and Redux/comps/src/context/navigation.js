import { useState, createContext, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider(children){
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        }

    },[]);

    return (
        <NavigationContext.Provider value={{}}>
            {children}
        </NavigationContext.Provider>
    )

};

export {NavigationProvider};
export default NavigationContext;