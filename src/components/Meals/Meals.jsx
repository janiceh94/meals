import "./Meals.css";
import { useGlobalContext } from "../../context";
// can cherry pick which info we want to get from the context.jsx

export default function Meals(){

    const {meals} = useGlobalContext()
    //value from context.jsx -> AppContext.Provider

    return (
        <div>
            <section className="section-center">
                {meals.map((singleMeal) => {
                    const {idMeal, strMeal:title, strMealThumb:image } = singleMeal
                    return <article key={idMeal} className="single-meal">
                        <img src={image} style={{width:"200px"}} className="img"/>
                        <footer>
                            <h5>{title}</h5>
                            <button className="like-btn">Click Me</button>
                        </footer>
                    </article>
                })}
            </section>
        </div>
    )
}