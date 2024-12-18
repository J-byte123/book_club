/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import { useEffect, useState } from "react";
// possible import:
// import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// removed setToken, setError
// new: const state for the useLocation import (brings in information)
export default function Account() {
  const [books, setBooks] = useState("");
  const { state } = useLocation();
  //  the following brings in the logged-in users info from login.jsx file
  const user = state.user;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/docs/${user.id}`
        );

        if (response.ok) {
          const data = await response.json();
          setBooks(data);
        } else {
          setBooks([]);
        }
      } catch (error) {
        setBooks([]);
      }
    };
    fetchBooks();
  }, [user]);

  return (
    <div>
      <h4>Welcome {user.email}</h4>
      <br>
        <h2>Checked Out Books:</h2>
        {books.length > 0 ? (
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                {book.title} by {book.author}
              </li>
            ))}
          </ul>
        ) : (
          <p>No books have been checked out</p>
        )}
      </br>
    </div>
  );
}
