import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addIssue } from '../utils/issues';
import { auth } from '../firebase';

function IssueForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addIssue({
        title,
        description,
        status: 'Open',
        createdBy: auth.currentUser.uid,
        createdAt: new Date().toISOString()
      });
      history.push('/issues');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Report New Issue</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Issue Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Issue Description"
          required
        />
        <button type="submit">Submit Issue</button>
      </form>
    </div>
  );
}

export default IssueForm;