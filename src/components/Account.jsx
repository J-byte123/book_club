/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

// CHANGES MADE:
// - In order for Account.jsx to check for users that have an account or have logged in
// I have added a if statement to check for a logged in user
// I have also made some changes to Login.jsx and apiSlice.js

import { useGetReservationsQuery } from "../Slice/apiSlice";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Account() {
  const user = useSelector((state) => state.auth?.user);
  const navigate = useNavigate();
  if (!user) { // this helps make sure only an existing or logged in user can access the account info
    return (
      <div>
        <h3>In order to access account information, you must be logged in. </h3>
        <Link to="/login">Please Log in.</Link>
      </div>
    );
  }
  const {
    data: reservations = [],
    isLoading,
    isError,
  } = useGetReservationsQuery();

  if (isLoading) {
    return <div>Loading your information, please wait! </div>;
  }
  if (isError) {
    return <div>Something went wrong, please try again.</div>;
  }

  return (
    <div>
      <h4>Welcome, {user.email}</h4>

      <h2>Checked Out Books:</h2>
      {reservations.length > 0 ? (
        <ul>
          {reservations.map((book) => (
            <li key={book.id}>
              {reservations.book.title} by {reservations.book.author}
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>No books have been checked out</p>
          <p>
            <Link to="/books">Explore our book catalog!</Link>
          </p>
        </div>
      )}
    </div>
  );
}
