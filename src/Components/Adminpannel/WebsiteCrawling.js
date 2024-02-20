import React, { useState } from 'react';

const CrawlingDashboard = () => {
  const [entries, setEntries] = useState([
    { name: 'National Scholarship', website: 'https://nationalscholarship.example.com', status: 'Active' },
     { name: 'Community Award', website: 'https://communityaward.example.com', status: 'Pending' },
     { name: 'Excellence in Science', website: 'https://scienceaward.example.com', status: 'Completed' },
     { name: 'Artists Fund', website: 'https://artistsfund.example.com', status: 'Active' },
   ]);

   // Handlers for Start and Stop Crawling buttons
  const startCrawling = () => {
     console.log('Crawling started');
     // Implement starting crawling logic here
  };

   const stopCrawling = () => {
     console.log('Crawling stopped');
     // Implement stopping crawling logic here
  };

  return (
    <div className="container mx-auto pt-20 px-6 lg:px-20">
      <div className="bg-gray-900 text-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex justify-between mb-6">
          <button
            onClick={startCrawling}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Start Crawling
          </button>
          <button
            onClick={stopCrawling}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Stop Crawling
          </button>
        </div>

        {/* Entries Table */}
        <div>
          <h2 className="text-xl font-bold leading-tight mb-3 text-white">Crawling Entries</h2>
          <div className="bg-white p-4 rounded shadow-md">
            <table className="min-w-full text-black"> {/* Add text-white class */}
              <thead>
                <tr>
                  <th className="border-b-2 border-gray-800 px-4 py-2 text-left">Website Name</th>
                  <th className="border-b-2 border-gray-800 px-4 py-2 text-left">URL</th>
                  <th className="border-b-2 border-gray-800 px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="px-4 py-2 text-black">{entry.name}</td> {/* Add text-white class */}
                    <td className="px-4 py-2 text-black">{entry.website}</td> {/* Add text-white class */}
                    <td className="px-4 py-2 text-black">{entry.status}</td> {/* Add text-white class */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrawlingDashboard;
