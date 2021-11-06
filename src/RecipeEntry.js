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
      
    };
    const handleRecipeNameInputChange = (event) => {
      setRecipe({...recipe, name: event.target.value})
    };
    const handleRecipeSourceInputChange = (event) => {
      setRecipe({...recipe, source: event.target.value})
    };
    // const handleIngridientsInputChange = (event) => {
    //   setRecipe({...recipe, ingridients: event.target.value})
    // };
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
          className="form-field"
          placeholder="Recipe Name"
        />
        
        <input 
          onChange={handleRecipeSourceInputChange}
          className="form-field"
          placeholder="Recipe Source"
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
          className="form-field"
          placeholder="Preparation time"
        />
        
        <input 
          onChange={handlePreparationInstructionsInputChange}
          className="form-field"
          placeholder="Preparation instructions"
        />

        <br></br>
        
        <button className="form-field" onClick={handleSubmit} >
        Submit
        </button>
    </div>
)
};