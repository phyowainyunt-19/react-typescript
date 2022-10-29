import './App.css';
import { Greet } from "./components"

function App() {

  return (
    <div className='App'>
      <Greet name="PWN" isLoggedIn={false} />
    </div>

  )
}

export default App
