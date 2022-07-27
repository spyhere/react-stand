import React from 'react'

function Intro03() {
  let value = 8
  console.log("Function is called")

  const increaseValue = () => {
    value ++
    console.log("value: ", value)
  }
  return (
    <div className="container">
      The value is: {value}
      <br/>
      <button onClick={increaseValue}>+</button>
    </div>
  )
}

export default Intro03
