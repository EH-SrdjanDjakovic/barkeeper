import { useState } from "react"

interface ISearchForm {
  searchHandler: Function
}

const SearchForm = ({ searchHandler }: ISearchForm) => {
  const [cocktailName, setCocktailName] = useState<string>("")
  const cocktailNameHandler = (value: string) => {
    setCocktailName(value)
  }
  return (
    <>
      <input type="text" value={cocktailName} onChange={e => cocktailNameHandler(e.target.value)} />
      <button onClick={() => searchHandler(cocktailName)}>Search</button>
    </>
  )
}

export default SearchForm