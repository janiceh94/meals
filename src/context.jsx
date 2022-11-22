import React, { useContext, useEffect, useState } from "react";
// Context provides a way to pass data through the component tree without having to pass props down manually at every level
import axios from "axios";

const allMealsURl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealsUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    // A provider will sit up as high as possible in the component tree so that multiple consumers can get the state and props from the provider

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchMeals(`${allMealsURl}${searchTerm}`)
    }, [searchTerm])

    useEffect(() => {
        if(!searchTerm) return 
        fetchMeals(`${allMealsURl}${searchTerm}`)
    }, [searchTerm])
  
    const fetchMeals = async(url) => {
        setLoading(true)
        try {
            const {data} = await axios(url)
            if(data.meals){
                setMeals(data.meals)
                // console.log(response);
            } else {
                setMeals([])
            }
        } 
        catch(e){
            console.log(e.response)
        }
        setLoading(false)
    }
    
    const fetchRandomMeal = () => {
        fetchMeals(randomMealsUrl)
    }

    return (
        <AppContext.Provider value={{loading, meals, setSearchTerm, fetchRandomMeal}}>
            {children}
            {/* children is our app */}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}

