import "./Search.css";
import { useState } from "react";
import { useGlobalContext} from "../../context";

export default function Search(){
    return (
        <header className="search-container">
            <form>
                <input 
                    type="text" 
                    placeholder="type favorite meal" 
                    className="form-input"
                />
                <button type="submit" className="btn">Search</button>
                <button type="button" className="btn btn-hipster">Surprise Me!</button>
            </form>
        </header>
    )
}