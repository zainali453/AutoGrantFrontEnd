import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column for scholarships */}
        <div>
          <h5 className="text-lg mb-4 font-semibold">Find Scholarships in ...</h5>
          <div className="grid grid-cols-2 gap-2">
            <a href="#" className="hover:text-red-500 mb-2">United States</a>
            <a href="#" className="hover:text-red-500 mb-2">India</a>
            <a href="#" className="hover:text-red-500 mb-2">Germany</a>
            <a href="#" className="hover:text-red-500 mb-2">Finland</a>
            <a href="#" className="hover:text-red-500 mb-2">United Kingdom</a>
            <a href="#" className="hover:text-red-500 mb-2">Australia</a>
            <a href="#" className="hover:text-red-500 mb-2">Netherlands</a>
            <a href="#" className="hover:text-red-500 mb-2">Spain</a>
            <a href="#" className="hover:text-red-500 mb-2">Canada</a>
            <a href="#" className="hover:text-red-500 col-span-2">View All Countries</a>
          </div>
        </div>

        {/* Column for missing scholarship */}
        <div className="md:col-span-1 flex flex-col justify-between">
          <div>
            <h5 className="text-lg mb-4 font-semibold">Missing a scholarship?</h5>
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
              Get your scholarship listed
            </button>
          </div>
        </div>

        {/* Column for team names */}
        <div className="md:col-span-1">
          <h5 className="text-lg mb-4 font-semibold">Our Team</h5>
          <ul className="list-none">
            <li className="mb-2"><a  className="hover:text-red-500">Zain Ali</a></li>
            <li className="mb-2"><a  className="hover:text-red-500">Tayyab Afzal</a></li>
            <li className="mb-2"><a  className="hover:text-red-500">Mateen Shah</a></li>
            {/* Add more teams as needed */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
