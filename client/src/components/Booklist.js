import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { getBooksQuery } from "../queries/bookQueries";
import BookDetails from "./BookDetails";

const Booklist = (props) => {
  const [selectedId, setSelectedId] = useState()

  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => (
          <li onClick={() => setSelectedId(book.id)} key={book.id}>{book.name}</li>
        ))}
      </ul>
      <BookDetails id={selectedId}/>
    </div>
  );
};

export default Booklist;
