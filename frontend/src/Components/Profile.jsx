import React from 'react';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    solvedProblems: 20,
    streak: 15,
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="mt-6">
        <h2 className="text-xl font-medium">User Information</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-medium">Stats</h2>
        <p>Problems Solved: {user.solvedProblems}</p>
        <p>Current Streak: {user.streak} days</p>
      </div>
    </div>
  );
};

export default Profile;
