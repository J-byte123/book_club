/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

// CHANGES MADE:
// -Fixed following error: "Cannot access 'user' before initialization", by implementing useSelector()
// which is using in React.
// -Changed import from slice to useGetReservationsQuery and added reservations since books led to errors
// -Added error handling and loading function for potential problems

import { useGetReservationsQuery } from "../Slice/apiSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Account() {
  const user = useSelector((state) => state.auth.user);
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
