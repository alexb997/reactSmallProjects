const RecipeDetail = ({ recipe }) => (
  <div>
    <h2>{recipe.name}</h2>
    <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
    <p><strong>Instructions:</strong> {recipe.instructions}</p>
  </div>
);

export default RecipeDetail;