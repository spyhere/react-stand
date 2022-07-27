import React, { useEffect, useState } from 'react'

function Intro05() {
  const [value, setValue] = useState(8)
  console.log("Function is called")

  const handleIncreaseValue = () => {
    setValue(value + 1)
    console.log("value: ", value)
  }

  useEffect(() => {
    // debugger
    console.log("Component is mounted")
    return () => {
      // debugger
      console.log("Component will be unmounted")
    }
  }, [])
  // debugger

  return (
    <div className="container">
      The value is: {value}
      <br/>
      <button onClick={handleIncreaseValue}>+</button>
    </div>
  )
}

export default Intro05
