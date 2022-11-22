import "./Meals.css";
import { useGlobalContext } from "../../context";
// can cherry pick which info we want to get from the context.jsx
import { BsHandThumbsUp } from "react-icons/bs";
// react icons, need to add library (bs)

export default function Meals(){

    const { loading, meals } = useGlobalContext()
    //value from context.jsx -> AppContext.Provider

    if(loading){
        return <section className="section">
            <h4>Loading...</h4>
        </section>
    }

    return (
        <div>
            <section className="section-center">
                {meals.map((singleMeal) => {
                    //key from api : alias (we assign)
                    const {idMeal, strMeal:title, strMealThumb:image } = singleMeal
                    return <article key={idMeal} className="single-meal">
                        <img src={image} className="img" alt="meal"/>
                        <footer>
                            <h5>{title}</h5>
                            <button className="like-btn"><BsHandThumbsUp/></button>
                        </footer>
                    </article>
                })}
            </section>
        </div>
    )
}