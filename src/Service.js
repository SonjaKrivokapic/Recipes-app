export const Service = {

    name: "memorija",
    recipes: [
        {
            name: 'prvi recept', 
            source: 'google.com',
            ingredients: [{name: 'ulje', quantity: 10}, {name: 'brasno', quantity: 300}], 
            time: '345364',
            instructions: 'Staviti ulje na tihu vatru, kada provri dodati brasno pomesano sa vodom'
        },
        {
            name: 'drugi recept', 
            source: 'google.com',
            ingredients: [{name: 'pasulj', quantity: 1000}, {name: 'kelj', quantity: 500}, {name: 'luk', quantity: 400},{name: 'sargarepa', quantity: 150}], 
            time: '345364',
            instructions: 'Staviti ulje na tihu vatru, kada provri dodati brasno pomesano sa vodom'
        },
        {
            name: 'treci recept', 
            source: 'google.com',
            ingredients: [{name: 'ulje', quantity: 10}, {name: 'so', quantity: 20}], 
            time: '345364',
            instructions: 'Staviti ulje na tihu vatru, kada provri dodati brasno pomesano sa vodom'
        }
    ],

    get(n){
        return 1389 + parseInt(n);
    },

    addRecipe(item){
        this.recipes.push(item);
        // ovde dodaj sve propertije za jedan recept i dodaj to u niz recipes
    },

    getRecipes(){
        // vrati sve recepte
        return this.recipes;
    }
}