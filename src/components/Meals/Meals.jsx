import "./Meals.css";
import { useGlobalContext } from "../../context";
// can cherry pick which info we want to get from the context.jsx

export default function Meals(){

    const context = useGlobalContext()
    console.log(context);
    //value from context.jsx -> AppContext.Provider

    return (
        <div>
            Meals
        </div>
    )
}