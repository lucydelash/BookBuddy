import React, { useEffect, useState } from 'react';

function Books({ apiUrl }) {
  const [books, setBooks] = useState([]); // Ensure books is initialized as an empty array

  useEffect(() => {
    fetch(`${apiUrl}/api/books`)
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, [apiUrl]);

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {Array.isArray(books) ? (
          books.map(book => (
            <li key={book.id}>
              <img src={book.coverimage} alt={book.title} />
              <div>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>{book.description}</p>
              </div>
            </li>
          ))
        ) : (
          <p>No books available</p>
        )}
      </ul>
    </div>
  );
}

export default Books;