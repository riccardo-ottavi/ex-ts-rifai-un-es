import './App.css'

function App() {

  type Recipe = {
    userId: number;
  }

  type Chef = {
    birthDate: string
  }

  async function getChefBirthDay(recipeId: number): Promise<string>{
    const recipeRes = await fetch(`https://dummyjson.com/recipes/${recipeId}`)
    const recipeData = await recipeRes.json()
    const chefRes = await fetch(`https://dummyjson.com/users/${recipeData.userId}`)
    const chefData = await chefRes.json()
    console.log(chefData)
    return chefData.birthDate
  }

  getChefBirthDay(1)
  .then(birthday => console.log("Data di nascita dello chef:", birthday))
  .catch(error => console.error("Errore:", error.message));

  return (
    <>
      <h1>Prova</h1>
    </>
  )
}

export default App
