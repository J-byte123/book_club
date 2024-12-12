/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useGetBookByIdQuery } from "./apiSlice.js";
import { useParams } from "react";

const singleBook = () => {
  const { id } = useParams();
  const { data } = useGetBookByIdQuery();
  const book = data.book;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error}</div>;

  return (
    <>
      <img src={book.coverimage} />
      <br></br>
      <h3>{book.available ? "yes" : "no"}</h3>
      <h2>{book.title}</h2>
      <h2> {book.author}</h2>
      <h3>{book.description}</h3>
      <br></br>
      <button onClick={() => navigate(`/book/${book.id}`)}>Checkout</button>
    </>
  );
};
