/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */

// CHANGES MADE:

import { useGetReservationsQuery, useReturnBookMutation } from "../Slice/apiSlice";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Account() {
  const user = useSelector((state) => state.auth?.user);
  const navigate = useNavigate();
  if (!user) {
    // this helps make sure only an existing or logged in user can access the account info
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
    refetch, // add refetch for book return list refresh
  } = useGetReservationsQuery();

  const [returnBook] = useReturnBookMutation();

  const handleReturns = async (reservationId) => {
    try {
      await returnBook(reservationId).unwrap();
      alert("Selected Book has been returned.");
      refetch(); // Loads the new list of checked out books
    } catch (error) {
      // Error handling
      console.error("Unable to return selected book.");
      alert("Unable to return selected book, please try again!");
    }
  };

  if (isLoading) {
    return <div>Loading your information, please wait! </div>;
  }
  if (isError) {
    return <div>Something went wrong, please try again.</div>;
  }
// POTENTIAL ISSUE: used reservations instead of reservation (getting declared but not read error when the two are switched)
  return (
    <div>
      <h4>Welcome, {user.email}</h4>
      <h2>Checked Out Books:</h2>
      {reservations.length > 0 ? (
        <ul>
          {reservations.map((reservations) => (
            <li key={reservations.id}>
              {reservations.book.title} by {reservations.book.author}
              <button onClick={() => handleReturns(reservations.id)}>Return</button>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>No books have been checked out</p>
          <p>
            <Link to="/">Explore our book catalog!</Link>
          </p>
        </div>
      )}
    </div>
  );
}
