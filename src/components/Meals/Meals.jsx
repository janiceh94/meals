import "./Meals.css";
import { useGlobalContext } from "../../context";
// can cherry pick which info we want to get from the context.jsx
import { BsHandThumbsUp } from "react-icons/bs";
// react icons, need to add library (bs)

export default function Meals(){

    const {meals} = useGlobalContext()
    //value from context.jsx -> AppContext.Provider

    return (
        <div>
            <section className="section-center">
                {meals.map((singleMeal) => {
                    //key from api : alias (we assign)
                    const {idMeal, strMeal:title, strMealThumb:image } = singleMeal
                    return <article key={idMeal} className="single-meal">
                        <img src={image} className="img"/>
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