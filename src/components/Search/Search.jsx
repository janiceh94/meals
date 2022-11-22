import "./Search.css";
import { useState } from "react";
import { useGlobalContext} from "../../context";

export default function Search(){

    const { setSearchTerm } = useGlobalContext();
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text){
            setSearchTerm(text)
        }
    }

    return (
        <header className="search-container">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    onChange={handleChange}
                    value={text}
                    placeholder="type favorite meal" 
                    className="form-input"
                />
                <button type="submit" className="btn">Search</button>
                <button type="button" className="btn btn-hipster">Surprise Me!</button>
            </form>
        </header>
    )
}