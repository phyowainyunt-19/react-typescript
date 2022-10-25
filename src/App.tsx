import './App.css';
import { Greet, Person, PersonList, Status, Heading, Oscar, Button, Input, Container } from "./components"

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className='App'>
      <Greet name="PWN" isLoggedIn={false} />
      {/* <Person name={personName} />
      <PersonList names={nameList} /> */}
      {/* <Status status='success' /> */}
      {/* <Heading>Heading Title</Heading> */}
      {/* <Oscar>
        <Heading>The Oscar goes to 'Robert De Niro'!</Heading>
      </Oscar> */}
      <Button handleClick={(event) => {
        console.log('Button Clicked!', event)
      }} />
      <Input value='' handleChange={(event) => console.log(event)} />  {/* handleChange() as parameter from Input component */}
      <Container styles={{ border: '1px solid red', padding: '1rem' }} />
    </div>

  )
}

export default App
