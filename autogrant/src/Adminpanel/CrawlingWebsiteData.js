import React, { useState } from "react";
import axios from "axios";

const CrawlingDataDashboard = () => {
  const [entries, setEntries] = useState([]);
  const [checkgetwebsitesdata, setcheckgetwebsitesdata] = useState(true);
  const startCrawling = async () => {
    console.log("Crawling started");
    try {
      const token = localStorage.getItem('accessToken');

      const response = await axios.post('http://localhost:4000/admin/crawler/crawlscholarships', {
        headers: {
          'x-access-token': token,
          'Content-Type': 'application/json', // Set content type if necessary
        }
      });

      if (response.status === 200) {
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const stopCrawling = async () => {
    console.log("Crawling stopped");
    try {
      const token = localStorage.getItem('accessToken');

      const response = await axios.post('http://localhost:4000/admin/crawler/stop', {
        headers: {
          'x-access-token': token,
          'Content-Type': 'application/json', // Set content type if necessary
        }
      });

      if (response.status === 200) {
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  if (checkgetwebsitesdata) {
    getWebsitesData(setEntries);
    setTimeout(() => {
      setcheckgetwebsitesdata(true);
    }, 30000);
    setcheckgetwebsitesdata(false);
  }


  return (
    <div className="container mx-auto pt-20 px-6 pl-96 pr-56 bg-gray-500">
      <div className="bg-gray-900 text-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        style={{
          background: "#161A30",
          color: "#B6BBC4",
        }}
      >
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
          <h2 className="text-xl font-bold leading-tight mb-3 text-white">
            Crawling Entries
          </h2>
          <div className="bg-white p-4 rounded shadow-md">
            <table className="min-w-full text-black">
              {" "}
              {/* Add text-white class */}
              <thead>
                <tr>
                  <th className="border-b-2 border-gray-800 px-4 py-2 text-left">
                    Website Name
                  </th>
                  <th className="border-b-2 border-gray-800 px-4 py-2 text-left">
                    URL
                  </th>
                  <th className="border-b-2 border-gray-800 px-4 py-2 text-left">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="px-4 py-2 text-black">{entry.name}</td>{" "}
                    {/* Add text-white class */}
                    <td className="px-4 py-2 text-black">
                      {entry.website}
                    </td>{" "}
                    {/* Add text-white class */}
                    <td className="px-4 py-2 text-black">
                      {entry.status}
                    </td>{" "}
                    {/* Add text-white class */}
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
const getWebsitesData = async (setEntries) => {
  try {
    const token = localStorage.getItem('accessToken');

    const response = await axios.get('http://localhost:4000/admin/getwebsitesdata?type=true', {
      headers: {
        'x-access-token': token,
        'Content-Type': 'application/json', // Set content type if necessary
      },
    });
    if (response.status === 200) {
      const data = response.data;
      var arrayOfWebsites = [];
      for (let index = 0; index < data.length; index++) {
        const d = data[index];
        arrayOfWebsites.push({ name: d.source[0].websiteName, website: d.scholarshipUrl, status: d.status ? "Completed" : "Pending" })
      }
      setEntries(arrayOfWebsites);
    } else {
      console.error('Request failed with status:', response.status);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }

}
export default CrawlingDataDashboard;
