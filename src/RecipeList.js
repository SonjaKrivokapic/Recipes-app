import { useState } from "react";
import RecipeEntry from './RecipeEntry';
import RecipeDetails from './RecipeDetails';
import {Service} from './Service';

function parseIngredients(ing){
  let res = '';
  ing.map((item, index) => {
    if(index < 3){
      res += item.name + ' ' + item.quantity + 'g,';
    }
  })
  if(ing.length > 3){
    res += '...';
  }
  return res;  
  
}

function parseInstrucions(text){
  let res;
  if(text.length > 50){
    res = text.substring(0,50);
    let li = res.lastIndexOf(" ");
    return res.substring(0, li) + '...';
  }else{
    return text; 
  }
}


 
export default function RecipeList(props) {

  const [recipes, setRecipes] = useState(Service.recipes);
  const [currentView, setCurrentView] = useState('list');
  const [selectedRecipe, setSelectedRecipe] = useState();
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState();

  const selectRecipe = (item, index) => {
    setSelectedRecipe(item);
    setSelectedRecipeIndex(index);
  }

  const addRecipe = (item) => {

    setRecipes([...recipes, item]);
  }

  const deleteRecipe = (index) => {
    console.log('sonja', index);
    let array = [...recipes];
    array.splice(index, 1);
    setRecipes(array);
    setCurrentView('list');
  }
  
  return (

    <div>
      <div className="content">
      {currentView == 'entry' &&
        <div> 
          <button onClick={() => setCurrentView('list')}>Back to recipes</button>
        <RecipeEntry func={(recipe) => {setCurrentView('list'); addRecipe(recipe)}}/>
      </div>
      }

{currentView == 'details' &&
  <div>
    <button onClick={() => setCurrentView('list')}>Back to recipes</button>
     <RecipeDetails recipe={selectedRecipe} index={selectedRecipeIndex} func={deleteRecipe}/>
     
   </div>
}
      

        {currentView == 'list' &&
        <div>
          <button onClick={() => setCurrentView('entry')}>
        Add new
        </button>
       <table>
         <thead>
            <tr>
              <th>No.</th>
             <th>Recipe Name</th>
             <th>Recipe Source</th>
             <th>Preparation Time</th>
             <th>Ingridients</th>
             <th>Preparation Instructions</th>
            </tr>
            </thead>
            <tbody>

              {recipes.map((item, index) => {
                return(
                  <tr>
                    <td>{index + 1}.</td>
                    <td onClick={()=>{
                      setCurrentView('details'); 
                      selectRecipe(item, index);
                      
                    }}>{item.name}</td>
                    <td>{item.source}</td>
                    <td>{item.time}</td>
                    <td>{parseIngredients(item.ingredients)}</td>
                    <td>{parseInstrucions(item.instructions)}</td>
                  </tr>
                )})
              }
               
            </tbody>
        </table>
        </div>
        }
      </div>  
    </div>        
  )};



  
  
  
          
        
                
        
      

    
  


 
