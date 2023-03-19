import { React, useState, useEffect } from 'react';
import '../style/main.css';
import { Link } from "react-router-dom";

export const Main = () => {
    const [searchTerm, setSearchTerm] = useState(""); 
    const [recipes, setRecipes] = useState([]);

    const searchRecipe = async () => { 
        try {
            const response=await fetch(`https://api.api-ninjas.com/v1/recipe?query=${searchTerm}`, {headers: { 'X-Api-Key': 'ejGAu+Y/Qqsm4hpD3zTivQ==KVXlyIXIw4vSFMEb'}});
            const data=await response.json();

            setRecipes(data);
        }
        catch (e) {
            setRecipes([]);
        }  
    }

    return (
       <div className="body">
        <button className='drinks-button'>
            <Link to="/drinks">Drinks</Link>
        </button>
        <div className='searchDiv'>
            <input className='searchRecipe' type="text" name="txt" onChange={(e) => setSearchTerm(e.target.value)} placeholder='What do you want to make?'></input>
            <button className='search-button' onClick={searchRecipe}>search</button>
        
        </div>
            <div className='recipesCard'>
                {recipes && recipes.map((recipe, index) => {
                    return (
                        <div className='card' key={index}>
                            <p style={{color: '#eee'}}>Name: {recipe.title}</p>
                            <p style={{color: '#eee'}}>Ingredients: {recipe.ingredients}</p>
                            <p style={{color: '#eee'}}>Servings: {recipe.servings}</p>
                            <p style={{color: '#eee'}}>Instructions: {recipe.instructions}</p>
                        </div>
                    )
                })}
            </div> 
       </div>
    );
}

