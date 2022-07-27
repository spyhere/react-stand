export type Book = {
  author: string
  genre: string
  name: string
}

export enum Genres {
  ROMANCE = "Romance",
  FICTION = "Fiction",
  Mystery = "Mystery",
}

export const books: Array<Book> = [
  { author: "J.R. Ward", genre: Genres.ROMANCE, name: "Dark Lover" },
  { author: "Stephenie Meyer", genre: Genres.ROMANCE, name: "Twilight" },
  { author: "Jeaniene Frost", genre: Genres.ROMANCE, name: "Halfway to the Grave" },
  { author: "Karen Marie Moning", genre: Genres.ROMANCE, name: "Darkfever" },
  { author: "Charlaine Harris", genre: Genres.ROMANCE, name: "Dead Until Dark" },

  { author: "Harper Lee", genre: Genres.FICTION, name: "To Kill a mocking bird" },
  { author: "Frank Herbert", genre: Genres.FICTION, name: "Dune" },
  { author: "George R.R. Martin", genre: Genres.FICTION, name: "A Game of Thrones" },
  { author: "C.S. Lewis", genre: Genres.FICTION, name: "The Chronicles of Narnia" },
  { author: "Jane Austen", genre: Genres.FICTION, name: "Pride and Prejudice" },

  { author: "Stieg Larsson", genre: Genres.Mystery, name: "The Girl with the Dragon Tattoo" },
  { author: "Agatha Christie", genre: Genres.Mystery, name: "And Then There Were None" },
  { author: "Dan Brown", genre: Genres.Mystery, name: "Angels & Demons" },
  { author: "Daphne Du Maurier", genre: Genres.Mystery, name: "Rebecca" },
  { author: "Truman Capote", genre: Genres.Mystery, name: "In Cold Blood" },
]