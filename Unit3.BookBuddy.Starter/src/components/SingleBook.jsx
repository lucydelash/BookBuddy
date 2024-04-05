import React, { useEffect, useState } from 'react';

function SingleBook({ bookId, apiUrl }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}/api/books/${bookId}`) // Use apiUrl
      .then(response => response.json())
      .then(data => setBook(data))
      .catch(error => console.error('Error fetching book:', error));
  }, [bookId, apiUrl]); // Include bookId and apiUrl in dependency array

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <img src={book.coverimage} alt={book.title} />
    </div>
  );
}

export default SingleBook;