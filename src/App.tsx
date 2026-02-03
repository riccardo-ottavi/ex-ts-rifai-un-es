import './App.css'

function App() {

  type Recipe = {
    userId: number;
  }

  type Chef = {
    birthDate: string
  }

  function isRecipe(data: unknown): data is Recipe{
    return(
      typeof data === "object" &&
      data !== null &&
      "userId" in data && typeof data.userId === "number" 
    )
  }

  function isChef(data: unknown): data is Chef{
    return(
      typeof data === "object" &&
      data !== null &&
      "birthDate" in data && typeof data.birthDate === "string" 
    )
  }

  async function getChefBirthDay(recipeId: number): Promise<string | null> {
    try {
      const recipeRes = await fetch(`https://dummyjson.com/recipes/${recipeId}`)
      if(!recipeRes.ok){
        throw new Error("Errore HTTP")
      }
      
      const recipeData: unknown = await recipeRes.json()
      if(!isRecipe(recipeData)){
        throw new Error ("Formato dei dati non valido")
      }

      const chefRes = await fetch(`https://dummyjson.com/users/${recipeData.userId}`)
      if(!chefRes.ok){
        throw new Error("Errore HTTP")
      }
      const chefData = await chefRes.json()
      if(!isChef(chefData)){
        throw new Error ("Formato dei dati non valido")
      }
      console.log(chefData)
      return chefData.birthDate
    }catch(error){
      console.error(error) 
      return null
    }
    
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
