/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import React from 'react';
import { useParams } from 'react-router-dom';

const SingleBook = () => {
  const { id } = useParams();

  if (isLoading)
    return <p>Loading book details...</p>

  return (
    <>
    <img src={book.coverimage} alt={book.title} />
    <h1><{book.title}</h1>
    <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Available:</strong> {book.available ? 'Yes' : 'No'}</p>
    </>
  )
};

export default SingleBook;