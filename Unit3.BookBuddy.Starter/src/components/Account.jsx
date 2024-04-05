import React from 'react';

function Account({ token, handleLogout }) {
  return (
    <div>
      <p>Welcome, user!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Account;