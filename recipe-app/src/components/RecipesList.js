function RecipesList(props) {
  const { recipes, selectRecipe } = props;

  return (
    <ul>
      {recipes.map((recipe, index) => (
        <li key={index} onClick={() => selectRecipe(recipe)}>
          {recipe.name}
        </li>
      ))}
    </ul>
  );
}

export default RecipesList;
