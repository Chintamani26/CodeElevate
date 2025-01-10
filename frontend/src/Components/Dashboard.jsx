import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Accessing user data from the context
  const { user } = useContext(UserContext);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Profile Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/150" // Placeholder for the profile picture
              alt="User Avatar"
              className="rounded-full w-32 h-32 mr-6"
            />
            <div className="text-gray-800">
              <h2 className="text-3xl font-bold">{user.name}</h2>
              <p className="text-gray-500 mt-2">Progress: {user.progress.solved}/{user.progress.total} problems solved</p>
              <div className="mt-4">
                <Link
                  to="/profile"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-800"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-gray-700">Problems Solved</h3>
            <p className="text-3xl font-bold text-blue-600">{user.progress.solved}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-gray-700">Problems Left</h3>
            <p className="text-3xl font-bold text-red-600">{user.progress.total - user.progress.solved}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-gray-700">Recent Activity</h3>
            <ul className="text-left mt-4">
              {user.recentActivity.slice(0, 3).map((activity, index) => (
                <li key={index} className="flex justify-between items-center py-2">
                  <span>{activity.title}</span>
                  <span className={activity.status === 'Solved' ? 'text-green-600' : 'text-red-600'}>
                    {activity.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recent Activity List */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Recent Activity</h3>
          <ul>
            {user.recentActivity.map((activity, index) => (
              <li key={index} className="mb-4 border-b border-gray-200 pb-4">
                <div className="flex justify-between">
                  <span className="text-xl font-semibold">{activity.title}</span>
                  <span className={activity.status === 'Solved' ? 'text-green-600' : 'text-red-600'}>
                    {activity.status}
                  </span>
                </div>
                <p className="text-gray-500 mt-2">Completed on: {new Date().toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
