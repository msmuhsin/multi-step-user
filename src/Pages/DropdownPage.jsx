import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import LoadingSpinner from '../components/LoadingSpinner';

const DropdownPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUserId = localStorage.getItem('selectedUserId');
    if (savedUserId) {
      setSelectedUser(savedUserId);
    }

    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      localStorage.setItem('selectedUserId', selectedUser);
      navigate(`/user-details/${selectedUser}`);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="page-container">
      <h2>Select a User</h2>
      <form onSubmit={handleSubmit}>
        <Dropdown 
          options={users} 
          value={selectedUser} 
          onChange={handleUserChange}
          label="User"
        />
        <button 
          type="submit" 
          className="btn btn-primary" 
          disabled={!selectedUser}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default DropdownPage;
