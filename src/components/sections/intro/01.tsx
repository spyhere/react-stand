import React from 'react'

function Intro01() {
  let value = 8
  return (
    <div className="container">
      The value is: {value}

      <br/>

      {value > 5 ? "It's bigger than 5" : "It's smaller than 5"}
    </div>
  )
}

export default Intro01
