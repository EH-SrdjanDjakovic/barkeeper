import { useState } from "react"

interface ISearchForm {
  searchHandler: Function
}

const SearchForm = ({ searchHandler }: ISearchForm) => {
  const [cocktailName, setCocktailName] = useState<string>("")
  const cocktailNameHandler = (value: string) => {
    setCocktailName(value)
  }
  const keyboardEventsHanlder = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") searchHandler(cocktailName)
  }
  return (
    <div style={{ padding: "20px" }}>
      <input type="text" value={cocktailName} onChange={e => cocktailNameHandler(e.target.value)} onKeyUp={keyboardEventsHanlder} />{" "}
      <button onClick={() => searchHandler(cocktailName)}>Search</button>
    </div>
  )
}

export default SearchForm