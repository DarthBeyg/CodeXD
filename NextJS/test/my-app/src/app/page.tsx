import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-400 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        Dubai AC Services
      </h1>
      <p className="text-lg text-gray-200 mb-8">
        Your Trusted AC Experts in Dubai.
      </p>
      <p className="text-lg text-gray-200 mb-8">
        We provide reliable AC installation, maintenance, and repair services.
      </p>
      <a
        href="#"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Contact Us
      </a>
    </div>
  );
}
