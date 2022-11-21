import "./Meals.css";
import { useGlobalContext } from "../../context";
// can cherry pick which info we want to get from the context.jsx

export default function Meals(){

    const {meals} = useGlobalContext()
    //value from context.jsx -> AppContext.Provider

    return (
        <div>
            {meals.map((single) => {
                return <h4>Single meal</h4>
            })}
        </div>
    )
}