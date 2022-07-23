const getRecipes = async (cocktailName: string) => {
  const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
  const response = await fetch(apiUrl, {
    method: "GET"
  });
  return response.json();
};

export default getRecipes