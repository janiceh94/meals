import React, { useContext, useEffect } from "react";
// Context provides a way to pass data through the component tree without having to pass props down manually at every level

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    // A provider will sit up as high as possible in the component tree so that multiple consumers can get the state and props from the provider

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch('https://randomuser.me/api')
                const data = await response.json();
                console.log(data);
            } 
            catch(error){
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <AppContext.Provider value={{name:"john"}}>
            {children}
            {/* children is our app */}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}

