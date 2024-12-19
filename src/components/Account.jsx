/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

// CHANGES MADE:
// - remove import for useEffect and useState
// instead use apiSlice and Query
// - instead of fetch, useGetBooksQuery has been implemented in order to fetch the users checked out books
import { useGetBooksQuery } from "../Slice/apiSlice";
import { useLocation, Link } from "react-router-dom";

export default function Account() {
  const { data: books = [] } = useGetBooksQuery(user.id);

  const { state } = useLocation();
  //  the following brings in the logged-in users info from login.jsx file
  const user = state.user;

  return (
    <div>
      <h4>Welcome, {user.email}</h4>

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
        <div>
          <p>No books have been checked out</p>
          <p>
            {/* NEW: Link to books.jsx so users can view catalog */}
            <Link to="/books">Explore our book catalog!</Link>
          </p>
        </div>
      )}
    </div>
  );
}
