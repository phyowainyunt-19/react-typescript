import React, { useRef, useEffect } from 'react'

const DomRef = () => {
  // null! means 'reference is never null' 
  const inputRef = useRef<HTMLInputElement>(null!);

  // when component mounts
  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default DomRef