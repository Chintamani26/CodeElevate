import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext'; 
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const DashboardPage = () => {
  const { user } = useContext(UserContext);
  const { progress, recentActivity } = user;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-6">
        <section className="text-center my-8">
          <h1 className="text-4xl font-bold text-gray-800">Welcome Back, {user.name}!</h1>
          <p className="text-lg text-gray-600">Your DSA journey at a glance</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Progress Card */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Progress Overview</h2>
            <p className="text-gray-600">
              Solved {progress.solved} out of {progress.total} problems
            </p>
            <div className="bg-gray-200 h-4 rounded-full mt-2">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${(progress.solved / progress.total) * 100}%` }}
              />
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <ul className="space-y-2">
              {recentActivity.map((activity, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-gray-800">{activity.title}</span>
                  <span
                    className={`text-sm font-semibold ${activity.status === 'Solved' ? 'text-green-600' : 'text-red-600'}`}
                  >
                    {activity.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
