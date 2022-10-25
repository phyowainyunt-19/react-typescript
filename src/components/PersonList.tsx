import { Name } from './types/Person.types'

type PersonListProps = {
  names: Name[]
}
const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <div key={name.first}>
          <h2>{name.first} {name.last}</h2>
        </div>
      ))}
    </div>
  )
}

export default PersonList