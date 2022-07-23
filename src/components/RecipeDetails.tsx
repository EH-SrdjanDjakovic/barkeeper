const RecipeDetails = ({ details }: any) => {
  const getIngredients = (): Array<string> => {
    const allingredients: Array<string> = []
    Object.keys(details).forEach((value: string) => {
      if (value.includes("Ingredient") && details[value]) {
        allingredients.push(details[value])
      }
    })
    return allingredients
  }

  return (
    <div className="recipe-details">
      <img src={`${details.strDrinkThumb}/preview`} />
      <p>{details.strDrink}</p>
      <p>{details.strInstructions}</p>
      <ul>
        {getIngredients().map((ingredient, index) => <li key={ingredient + index}>{ingredient}</li>)}
      </ul>
    </div>
  )
}

export default RecipeDetails