import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import LoadingSpinner from '../components/LoadingSpinner';

const NotePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formError, setFormError] = useState('');
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

  const handleNoteChange = (e) => {
    setNote(e.target.value);
    if (e.target.value.trim() !== '') {
      setFormError('');
    }
  };

  const handleBack = () => {
    navigate(`/user-details/${id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (note.trim() === '') {
      setFormError('Please enter a note before continuing');
      return;
    }
    
    localStorage.setItem(`userNote_${id}`, note);
    navigate(`/summary/${id}`);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="page-container">
      <h2>Add a Note</h2>
      <UserDetails user={user} />
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="noteInput">Your Note</label>
          <textarea
            id="noteInput"
            value={note}
            onChange={handleNoteChange}
            className={`form-control ${formError ? 'is-invalid' : ''}`}
            rows="4"
            placeholder="Enter your note here..."
          />
          {formError && <div className="invalid-feedback">{formError}</div>}
        </div>
        
        <div className="button-group">
          <button type="button" onClick={handleBack} className="btn btn-secondary">
            Back
          </button>
          <button type="submit" className="btn btn-primary">
            Finish
          </button>
        </div>
      </form>
    </div>
  );
};

export default NotePage;