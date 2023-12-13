import React, { useState } from "react";

const ScholarshipForm = () => {
  // Dummy data for initial state
  const initialEntries = [
    {
      name: "National Scholarship",
      website: "https://nationalscholarship.example.com",
      status: "Active",
    },
    {
      name: "Community Award",
      website: "https://communityaward.example.com",
      status: "Pending",
    },
    {
      name: "Excellence in Science",
      website: "https://scienceaward.example.com",
      status: "Completed",
    },
    {
      name: "Artists Fund",
      website: "https://artistsfund.example.com",
      status: "Active",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    website: "",
    status: "Pending",
  });
  const [entries, setEntries] = useState(initialEntries); // Initialize with dummy data

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries([...entries, formData]); // Add the formData to the entries array
    setFormData({ name: "", website: "", status: "Pending" }); // Reset form fields
  };

  return (
    <div className="container mx-auto pt-20 lg:pl-64 px-20">
      <div className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form onSubmit={handleSubmit}>
          <h1 className="text-white font-bold mb-2 text-2xl">Add Website</h1>

          {/* Website Name Input */}
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 text-gray-400"
              htmlFor="name"
            >
              Website Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Enter website name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Website URL Input */}
          <div className="mb-6">
            <label
              className="block text-sm font-bold mb-2 text-gray-400"
              htmlFor="website"
            >
              Website URL
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

          {/* Add Button */}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>

        {/* Entries Table in a white box */}
        <div className="mt-6 bg-white shadow-md rounded px-8 pt-6 pb-8">
          <table className="min-w-full mt-4">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-300 px-4 py-2 text-left">
                  Website Name
                </th>
                <th className="border-b-2 border-gray-300 px-4 py-2 text-left">
                  URL
                </th>
                <th className="border-b-2 border-gray-300 px-4 py-2 text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="px-4 py-2">{entry.name}</td>
                  <td className="px-4 py-2">{entry.website}</td>
                  <td className="px-4 py-2">{entry.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipForm;
