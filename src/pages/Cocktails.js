import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

    export const Cocktails = () => {
        const [searchTerm, setSearchTerm] = useState(""); 
        const [cocktails, setCocktails] = useState([]); 

    const searchCocktail = async () => { 
        try {
            const response=await fetch(`https://api.api-ninjas.com/v1/cocktail?name=${searchTerm}`, {headers: { 'X-Api-Key': 'ejGAu+Y/Qqsm4hpD3zTivQ==KVXlyIXIw4vSFMEb'}});
            const data=await response.json();

            setCocktails(data);
        }
        catch (e) {
            setCocktails([]);
        }  
    }
    return (
    <div className="main">
            <Link to="/">Home</Link>
            <div className='searchDiv'>
                <input className='searchCocktail' type="text"name="txt" onChange={(e)=> setSearchTerm(e.target.value)} placeholder='What do you want drink?'></input>
                <button onClick={searchCocktail}>search</button>
            </div>
            <div className='cocktailsCard'> 
                    {cocktails && cocktails.map((cocktail, index) => {
                        return (
                            <div className='card' key={index}>
                                <p>Name: {cocktail.name}</p>
                                <p>Ingredients: {cocktail.ingredients}</p>
                                <p>Instructions: {cocktail.instructions}</p>
                            </div>
                        )
                    })

                    }
            </div>

        </div>         
        );
}
 