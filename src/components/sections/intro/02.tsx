import React from 'react'

function Intro02() {
  return (
    <div className="container">
      Number: {8}
      <br/>
      String: {"This is string"}
      <br/>
      Boolean: {true}
      <br/>
      Undefined: {undefined}
      <br/>
      Null: {null}
      <br/>
      Array: {[1,2,3,"Four"]}
      <br/>
      Object: { { a: "A prop of the object" }.a }
      <br/>
    </div>
  )
}

export default Intro02
