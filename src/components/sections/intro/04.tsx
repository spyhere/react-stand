import React, { useState } from 'react'

function Intro04() {
  const [value, setValue] = useState(8)
  console.log("Function is called")

  const increaseValue = () => {
    setValue(value + 1)
    // debugger
    console.log("value: ", value)
  }
  // debugger
  return (
    <div className="container">
      The value is: {value}
      <br/>
      <button onClick={increaseValue}>+</button>
    </div>
  )
}

export default Intro04
