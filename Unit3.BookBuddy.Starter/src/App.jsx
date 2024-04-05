import { useState } from 'react';
import bookLogo from './assets/books.png';
import Account from './components/Account.jsx';
import Register from './components/Register.jsx';

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
        <img id='logo-image' src={bookLogo} alt='Book Logo' />
        Library App
      </h1>

      {/* Conditional rendering based on token presence */}
      {token ? (
        <Account token={token} handleLogout={handleLogout} />
      ) : (
        <Register handleAuthSuccess={handleAuthSuccess} />
      )}

      <p>
        Complete the React components needed to allow users to browse a library
        catalog, check out books, review their account, and return books that
        they've finished reading.
      </p>

      <p>
        You may need to use the `token` in this top-level component in other
        components that need to know if a user has logged in or not.
      </p>

      <p>
        Don't forget to set up React Router to navigate between the different
        views of your single page application!
      </p>
    </>
  );
}

export default App;