import { useQuery } from "@apollo/client";
import React from "react";
import { getSingleBookQuery } from "../queries/bookQueries";

const BookDetails = ({ id }) => {
  const { loading, data } = useQuery(getSingleBookQuery, { variables: { id } });

  if (loading) return <div id="book-details">Loading...</div>;

  const { book } = data;

  return (
    <div id="book-details">
      {book ? (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All Books From This Author:</p>
          <ul className="other-books">
            {book.author.books.map((book) => (
              <li key={book.id}>{book.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No Book Selected</div>
      )}
    </div>
  );
};

export default BookDetails;
