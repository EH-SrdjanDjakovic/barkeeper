import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import getRecipes from "./api/getRecipes"

function App() {
  const searchHandler = async (cocktailName: string) => {
    const data = await getRecipes(cocktailName)
  }
  return (
    <div className="App">
      <SearchForm searchHandler={searchHandler} />
    </div>
  );
}

export default App;
