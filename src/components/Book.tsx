import React from 'react'
import { Book as BookT } from "../books"

type Props = {
  book: BookT
}

const Book = ({ book }: Props) => (
  <div className="book">
    <div className="title">
      <h4>{book.name}</h4>
    </div>
    <div className="description">
      This book is about Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur debitis deleniti
      error esse est fugiat illo odit saepe tenetur.
    </div>
  </div>
)

export default Book