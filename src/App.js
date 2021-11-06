import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import RecipeList from "./RecipeList";


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

