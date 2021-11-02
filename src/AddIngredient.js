import { useState } from "react"

const ingredients = [
    "Flour",
    "Milk",
    "Oil",
    "Salt",
    "Sugar",
    "Eggs",
    "Tomatoes",
    "Peppers",
    "Cheese",
    "Potatoes",
    "Meat"
]

export default function AddIngredient(props){

        const [selectedIngredient, setSelectedIngredient] = useState();
        const [quantity, setQuantity] = useState(null);
        
    return(
        <div>
            <select value={selectedIngredient} onChange={(event) => setSelectedIngredient(event.target.value)}>
                {ingredients.map(item => {
                    return(
                        <option value={item}>{item}</option>
                    )
                })}
            </select>
            <br/>
            qty:<input value={quantity} onChange={(event) => setQuantity(event.target.value.replace(/\D+/g, ''))} />
            <br/>
            <button onClick={()=>props.func({name: selectedIngredient, quantity: quantity })}>Add</button>
        </div>
    )


}

