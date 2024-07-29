import logo from "./logo.svg";
import "./App.css";
import RecipeForm from "./components/RecipeForm.js";
import RecipesList from "./components/RecipesList.js";
import RecipeDetail from "./components/RecipeDetail.js";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const selectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <RecipeForm addRecipe={addRecipe} />
      <RecipesList recipes={recipes} selectRecipe={selectRecipe} />
      {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
    </div>
  );
}

export default App;
