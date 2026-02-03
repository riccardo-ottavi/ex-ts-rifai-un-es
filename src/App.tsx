import './App.css'

function App() {
  
  async function getChefBirthday(id: number){
    const recipeRes = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipe: unknown = await recipeRes.json();
    const chefRes = await fetch(`https://dummyjson.com/users/${recipe.userId}`)
    const chef: unknown = await chefRes.json();
    
    return chef.birthDate
  }

  getChefBirthday(1)
  .then(birthday => console.log("Data di nascita dello chef:", birthday))
  .catch(error => console.error("Errore:", error.message));

  return (
    <>
      <h1>Prova</h1>
    </>
  )
}

export default App
