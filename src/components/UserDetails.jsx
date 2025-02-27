import React from 'react';

const UserDetails = ({ user }) => {
  if (!user) return null;
  
  const formatAddress = (address) => {
    return `${address.suite} ${address.street}, ${address.city}, ${address.zipcode}`;
  };

  return (
    <div className="user-details">
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Address:</strong> {formatAddress(user.address)}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
};

export default UserDetails;