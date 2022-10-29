import './App.css';
import { Greet } from "./components"
import Counter from './components/class/Counter';

function App() {

  return (
    <div className='App'>
      <Greet name="PWN" isLoggedIn={false} />
      <Counter message='The count value is : '/>
    </div>

  )
}

export default App
