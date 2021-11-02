

function parseIngredients(ing){
  let res = '';
  ing.map((item, index) => {
    
      res += item.name + ' ' + item.quantity + 'g,';
    
  })
  
  return res;
}

 export default function RecipeDetails(props) {
    return (
    <div>
        <h1>{props.recipe.name}</h1>
        <h3>{props.recipe.source}</h3>
        <h3>{parseIngredients(props.recipe.ingredients)}</h3>
        <h3>{props.recipe.time}</h3>
        <h3>{props.recipe.instructions}</h3>
          
          <button className="form-field"  onClick ={() => props.func(props.index)} >
            Delete
        </button>
    </div>
    );
  }

 
