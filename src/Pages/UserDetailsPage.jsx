import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import LoadingSpinner from '../components/LoadingSpinner';

const UserDetailsPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const abortController = new AbortController();
    const fetchUserDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();

    return () => abortController.abort();
  }, [id]);

  const handleBack = () => {
    navigate('/');
  };

  const handleContinue = () => {
    navigate(`/note/${id}`);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="page-container">
      <h2>User Details</h2>
      {user && <UserDetails user={user} />}
      <div className="button-group">
        <button onClick={handleBack} className="btn btn-secondary">
          Back
        </button>
        <button onClick={handleContinue} className="btn btn-primary">
          Continue
        </button>
      </div>
    </div>
  );
};

export default UserDetailsPage;
