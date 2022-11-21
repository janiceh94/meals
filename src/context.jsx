import React, { useContext, useEffect } from "react";
// Context provides a way to pass data through the component tree without having to pass props down manually at every level

const allMealsURl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealsUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    // A provider will sit up as high as possible in the component tree so that multiple consumers can get the state and props from the provider

    useEffect(() => {
        fetchData()
    }, [])

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

