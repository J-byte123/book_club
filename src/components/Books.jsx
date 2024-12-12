/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

 featureMM
import { useParams } from "react";
import { useGetBooksQuery } from "./apiSlice.js";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
 main

export default BookList;
function BookList() {
  const navigate = useParams();
  const { data } = useGetBooksQuery();
  const books = data.books;

 featureMM
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error}</div>;

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get(
          'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books'
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
 main

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title}
            <button onClick={() => navigate(`/book/${book.id}`)}>
              More Book Information
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
