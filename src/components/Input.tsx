import React from 'react'

type InputProps = {
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ value, handleChange }: InputProps) => {
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { console.log(event) };  | define handleInputChange within the component
  return (
    <div>
      <input value={value} onChange={handleChange} />
    </div>
  )
}

export default Input