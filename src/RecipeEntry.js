import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Service} from './Service'
import React, { useState } from 'react';
import AddIngredient from "./AddIngredient";
import Time from "./Time";


export default function RecipeEntry(props) {

    const [recipe, setRecipe] = useState({
      name: "",
      source: "",
      ingredients: [],
      time: "",
      instructions: "",

    });

    const addIngredient = (item) => {
      let i = recipe.ingredients;
      i.push(item);
      setRecipe({...recipe, ingredients: i});
      console.log(recipe);
    }

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
      if(props.func){
        props.func(recipe);
      }
      

      let obj = {
        name: recipe.name,  
        source: recipe.source,
        instructions: recipe.instructions
    }

    Service.addRecipe(obj);
    console.log('service.recipes', Service.recipes);
    };
    const handleRecipeNameInputChange = (event) => {
      setRecipe({...recipe, name: event.target.value})
    };
    const handleRecipeSourceInputChange = (event) => {
      setRecipe({...recipe, source: event.target.value})
    };
    const handleIngridientsInputChange = (event) => {
      setRecipe({...recipe, ingridients: event.target.value})
    };
    const handlePreparationTimeInputChange = (event) => {
      setRecipe({...recipe, time: event.target.value})
    };
    const handlePreparationInstructionsInputChange = (event) => {
      setRecipe({...recipe, instructions: event.target.value})
    };
   
    

    return (
      
      <div className="form-container" >
        {submitted ? <div className="success-message">Success! Thank you for registering</div> : null}

        <input 
          onChange={handleRecipeNameInputChange}
          value={recipe.recipeName}
          id="recipe-name"
          className="form-field"
          type="text"
          placeholder="Recipe Name"
          name="recipeName"
        />
        
        <input 
          onChange={handleRecipeSourceInputChange}
          value={recipe.recipeSource}
          id="recipe-source"
          className="form-field"
          type="text"
          placeholder="Recipe Source"
          name="recipeSource"
        />
        
        <ul>
          {recipe.ingredients.map((item, index) => {
            return(
              <li>{item.name} {item.quantity}g.</li>
            )
          })
          }
        </ul>
        <AddIngredient func={addIngredient}/>
        <Time func={(time) => handlePreparationTimeInputChange}/>
        <input 
          onChange={handlePreparationTimeInputChange}
          value={recipe.preparationTime}
          id="preparation-time"
          className="form-field"
          type="text"
          placeholder="Preparation time"
          name="preparationTime"
        />
        
        <input 
          onChange={handlePreparationInstructionsInputChange}
          value={recipe.preparationInstructions}
          id="preparation-instructions"
          className="form-field"
          type="text"
          placeholder="Preparation instructions"
          name="preparationInstructions"
        />

        <br></br>
        
        <button className="form-field" onClick={handleSubmit} >
        Submit
        </button>
    </div>
)
};