import React from 'react';
import SearchForm from './components/SearchForm';
import RecipeList from './components/RecipeList';
import getRecipes from "./api/getRecipes"

function App() {
  const [recipes, setRecipes] = React.useState<Array<Object>>([])
  const [error, setError] = React.useState<string>("")
  const [searchInProgress, setSearchInProgress] = React.useState<boolean>(false)
  const searchHandler = async (cocktailName: string) => {
    setSearchInProgress(true)
    let data
    try {
      data = await getRecipes(cocktailName)
      setRecipes(data.drinks)
      setSearchInProgress(false)
      setError("")
    } catch (err) {
      setError("Something went wrong. Try again later.")
      setRecipes([])
      setSearchInProgress(false)
    }
  }

  return (
    <div className="App">
      <SearchForm searchHandler={searchHandler} />
      {
        error ? <div style={{ paddingLeft: "20px" }}>{error}</div> : <RecipeList recipes={recipes} loading={searchInProgress} />
      }
    </div>
  );
}

export default App
