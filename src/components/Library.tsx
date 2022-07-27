import React, { useState } from 'react'
import { books, Genres } from "../books"
import Shelf from "./Shelf"
import Author from "./Author"
import Book from "./Book"

const Library = () => {
  const [genre, setGenre] = useState<Genres | null>(null)
  const [author, setAuthor] = useState<string | null>(null)

  const handleGenreSelect = (genre: Genres) => {
    setGenre(genre)
    setAuthor(null)
  }

  const handleAuthorSelect = (author: string) => {
    setAuthor(author)
  }

  return (
    <div className="library">
      <div className="shelves">
        <Shelf row={1} genre={Genres.ROMANCE} onSelect={handleGenreSelect}/>
        <Shelf row={2} genre={Genres.FICTION} onSelect={handleGenreSelect}/>
        <Shelf row={3} genre={Genres.Mystery} onSelect={handleGenreSelect}/>
      </div>

      <div className="authors">
        {genre && books
          .filter(it => it.genre === genre)
          .map(it => <Author author={it.author} onSelect={handleAuthorSelect} key={it.author}/>)
        }
      </div>

      <div className="books">
        {author && books
          .filter(it => it.author === author)
          .map(it => <Book book={it} key={it.author + it.name}/>)
        }
      </div>
    </div>
  )
}

export default Library