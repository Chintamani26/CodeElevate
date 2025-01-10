import React, { useState } from "react";
import './Profile.css'; // Importing the CSS file for styling

const Profile = () => {
  // Initializing state with user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://via.placeholder.com/150",
    points: 1200,
    streak: 10,
    skills: {
      arrays: 80,
      linkedLists: 70,
      trees: 90,
      sorting: 60,
    },
    badges: ["Problem Solver", "Streak Master", "DSA Expert"],
  });

  const [isEditing, setIsEditing] = useState(false); // State to toggle between edit and view mode
  const [editedUser, setEditedUser] = useState(user); // State to store edited user data

  // Handle change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  // Save changes to the profile
  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.avatar} alt="Profile" className="profile-pic" />
        <div className="user-info">
          <h2>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editedUser.name}
                onChange={handleChange}
                className="edit-input"
              />
            ) : (
              user.name
            )}
          </h2>
          <p>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleChange}
                className="edit-input"
              />
            ) : (
              user.email
            )}
          </p>
        </div>
      </div>

      <div className="profile-progress">
        <h3>Progress</h3>
        <div className="skills">
          {Object.keys(user.skills).map((topic) => (
            <div key={topic} className="skill">
              <span>{topic.charAt(0).toUpperCase() + topic.slice(1)}</span>
              <progress value={user.skills[topic]} max="100" />
            </div>
          ))}
        </div>
      </div>

      <div className="profile-streak">
        <h3>Streak: {user.streak} days</h3>
      </div>

      <div className="profile-achievements">
        <h3>Achievements</h3>
        <ul>
          {user.badges.map((badge, index) => (
            <li key={index}>{badge}</li>
          ))}
        </ul>
      </div>

      <div className="profile-footer">
        <h3>Total Points: {user.points}</h3>
      </div>

      <div className="profile-actions">
        {isEditing ? (
          <button onClick={handleSave} className="save-button">
            Save Changes
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="edit-button">
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;