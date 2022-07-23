import RecipeDetails from "./RecipeDetails"

interface IRecipeList {
  loading: boolean,
  recipes: Array<any> // Recipe object has a lot of properties, to save time i put any
}

const RecipeList = ({ loading, recipes }: IRecipeList) => {
  return (
    <div>
      {
        loading ? <p style={{ padding: "20px" }}>Loading...</p> : <div>
          {
            recipes.map(rec => <RecipeDetails key={rec?.idDrink} details={rec}></RecipeDetails>)
          }
        </div>
      }

    </div>

  )
}

export default RecipeList