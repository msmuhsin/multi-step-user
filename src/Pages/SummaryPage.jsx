import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import LoadingSpinner from '../components/LoadingSpinner';

const SummaryPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedNote = localStorage.getItem(`userNote_${id}`);
    if (savedNote) {
      setNote(savedNote);
    }

    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  const handleEditNote = () => {
    navigate(`/note/${id}`);
  };

  const handleStartOver = () => {
    navigate('/');
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="page-container">
      <h2>Summary</h2>
      
      <div className="summary-section">
        <h3>Selected User</h3>
        <UserDetails user={user} />
      </div>
      
      <div className="summary-section">
        <h3>Your Note</h3>
        <div className="note-display">
          <p>{note}</p>
        </div>
      </div>
      
      <div className="button-group">
        <button onClick={handleEditNote} className="btn btn-secondary">
          Edit Note
        </button>
        <button onClick={handleStartOver} className="btn btn-primary">
          Start Over
        </button>
      </div>
    </div>
  );
};

export default SummaryPage;