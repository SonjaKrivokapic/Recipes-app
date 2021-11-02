import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import RecipeEntry from "./RecipeEntry";
import RecipeList from "./RecipeList";
import RecipeDetails from "./RecipeDetails";


function App() {
  return (
    <div className="App">
      <Router>
       
        <Route path="/" component={RecipeList} />

      </Router>
    </div>
  );
}

export default App;

