import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Navigations() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Link to the home route */}
        </li>
        <li>
          <Link to="/books">Books</Link> {/* Link to the books route */}
        </li>
        <li>
          <Link to="/reservations">Reservations</Link> {/* Link to the reservations route */}
        </li>
        <li>
          <Link to="/account">Account</Link> {/* Link to the account route */}
        </li>
      </ul>
    </nav>
  );
}

export default Navigations;