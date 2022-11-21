import React, { useContext } from "react";
// Context provides a way to pass data through the component tree without having to pass props down manually at every level

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    // A provider will sit up as high as possible in the component tree so that multiple consumers can get the state and props from the provider
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

