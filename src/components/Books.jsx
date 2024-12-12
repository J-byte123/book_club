/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import { useParams } from "react";
import { useGetBooksQuery } from "./apiSlice.js";

export default BookList;
function BookList() {
  const navigate = useParams();
  const { data } = useGetBooksQuery();
  const books = data.books;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error}</div>;

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
