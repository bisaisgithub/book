import React from 'react'

export default function Book({book}) {
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.text}</p>
    </div>
  )
}
