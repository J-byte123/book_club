/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useGetBookByIdQuery } from '../Slice/apiSlice';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SingleBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetBookByIdQuery(id);

  const book = data?.book;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error}</div>;

  return (
    <>
      <img src={book.coverimage} />
      <br></br>
      <h3>Available: {book.available ? 'yes' : 'no'}</h3>
      <h2>{book.title}</h2>
      <h2>Author: {book.author}</h2>
      <h3>Description:{book.description}</h3>
      <br></br>
      <button onClick={() => navigate(`/books`)}>Checkout</button>
    </>
  );
};

export default SingleBook;
