import React, { useState } from 'react';
import bookLogo from './assets/books.png';
import Account from './components/Account.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Books from './components/Books.jsx';
import Navigations from './components/Navigations.jsx';
import SingleBook from './components/SingleBook.jsx';

// Import the API URL
const API_URL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com';

function App() {
  const [token, setToken] = useState(null);

  // Function to handle successful login or registration
  const handleAuthSuccess = (token) => {
    setToken(token);
  };

  // Function to handle logging out
  const handleLogout = () => {
    setToken(null);
  };

  return (
    <>
      <h1>
        <img src="" alt='' />
        Library App
      </h1>

      <Navigations /> {/* Render Navigation component */}
      
      {/* Conditional rendering based on token presence */}
      {token ? (
        <>
          <Account token={token} handleLogout={handleLogout} />
          <Books API_URL={API_URL} /> {/* Pass API_URL as prop */}
          <SingleBook bookId={1} API_URL={API_URL} /> {/* Pass API_URL as prop */}
        </>
      ) : (
        <>
          <Register handleAuthSuccess={handleAuthSuccess} API_URL={API_URL} /> {/* Pass API_URL as prop */}
          <Login handleAuthSuccess={handleAuthSuccess} API_URL={API_URL} /> {/* Pass API_URL as prop */}
        </>
      )}
    </>
  );
}

export default App;