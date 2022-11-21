import "./Meals.css";
import { useGlobalContext } from "../../context";

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