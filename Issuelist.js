import React, { useState, useEffect } from 'react';
import { getIssues } from '../utils/issues';

function IssueList() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const fetchedIssues = await getIssues();
        setIssues(fetchedIssues);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  if (loading) return <div>Loading issues...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>All Issues</h2>
      {issues.map(issue => (
        <div key={issue.id}>
          <h3>{issue.title}</h3>
          <p>{issue.description}</p>
          <p>Status: {issue.status}</p>
        </div>
      ))}
    </div>
  );
}

export default IssueList;