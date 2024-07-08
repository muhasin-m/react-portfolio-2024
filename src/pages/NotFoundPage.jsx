import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="animate-bounce text-6xl font-bold text-gray-800 mb-8">
        404
      </div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300 ease-in-out">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
