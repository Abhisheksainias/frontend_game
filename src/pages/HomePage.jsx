import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Spinner from './Spinner';

const HomePage = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 p-6">
        <div className="bg-white shadow-lg rounded-lg p-10 text-center max-w-lg w-full">
          <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
            Welcome to Fantasy Game
          </h1>
          <p className="mb-8 text-gray-600">
            Create and manage your fantasy team easily.
          </p>
          <div className="space-x-4">
            <Link
              to="/players"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View Players
            </Link>
            <Link
              to="/create-team"
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Create Team
            </Link>
            <Link
              to="/all-teams"
              className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              All Teams
            </Link>
          </div>
        </div>
      </div>
    </>

  );
};

export default HomePage;
