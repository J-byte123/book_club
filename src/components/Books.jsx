/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import React, { useEffect, useState } from "react";
import axios from "axios";

export default BookList;
function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get(
          "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/docs/"
        );
        setBooks(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getBooks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

return (
  <div>
    <h1>Book List</h1>
    <ul>
      {books.map((book, index) => (
        <li key={index}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </li>
      ))}
    </ul>
  </div>
);
