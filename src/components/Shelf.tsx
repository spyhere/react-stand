import React from 'react'
import { Genres } from "../books"

type Props = {
  genre: Genres
  onSelect: (genre: Genres) => void
  row: number
}

const Shelf = ({ genre, onSelect, row }: Props) => (
  <div className="shelf" onClick={() => onSelect(genre)}>
    Row: {row}  - {genre}
  </div>
)

export default Shelf