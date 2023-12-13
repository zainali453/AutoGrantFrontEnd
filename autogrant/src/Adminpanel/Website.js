import React, { useState } from 'react';

const ScholarshipForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    website: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Insert form submission logic here
  };

  // Adjust the paddingLeft to the width of your sidebar if different from 64 (16rem)
  return (
    <div className="container mx-auto pt-20 lg:pl-96 px-20"> 
      <div className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{width:'500px', height: '500px' }}>
        <form onSubmit={handleSubmit}>
          <h1 className="text-white font-bold mb-2 text-2xl">Add Website</h1>
          

          <div className="mb-4">
            <label className="block t text-sm font-bold mb-2 text-gray-400" htmlFor="name">
              Website Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>


          <div className="mb-6">
            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="website">
              Scholarship's website URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="website"
              name="website"
              type="url"
              placeholder="https://"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScholarshipForm;
