/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Account({ setToken }) {
  const [books, setBooks] = useState("");
  const [user, setUser] = useState(null);
  //   possible change: use error, setError instead of user, setUser
}

return (
  <div>
    <h4>Welcome {user.email}</h4>
    <br>
      <h2>Checked Out Books:</h2>
      {error && <p>{error}</p>}
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
