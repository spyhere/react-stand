import React from 'react'

type Props = {
  author: string
  onSelect: (author: string) => void
}

const Author = ({ author, onSelect }: Props) => (
  <span className="author" onClick={() => onSelect(author)}>{author}</span>
)

export default Author