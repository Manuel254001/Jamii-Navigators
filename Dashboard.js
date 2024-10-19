import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../utils/auth';

function Dashboard() {
  const handleLogout = async () => {
    try {
      await logout();
      // Redirect will be handled by the App component
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <h1>EngageHub Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/issues/new">Report New Issue</Link></li>
          <li><Link to="/issues">View All Issues</Link></li>
        </ul>
      </nav>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;