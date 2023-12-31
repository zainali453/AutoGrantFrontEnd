import React from "react";
import photo from "../assests/adminlogo.png";
// Mock scholarship data
const scholarships = [
  {
    id: 1,
    title: "Out-of-State Student Scholarship",
    organization: "Fawell & Fawell",
    level: "Master, Bachelor",
    amount: "$1,000",
    deadline: "18 February 2024",
    logo: "path-to-your-logo-image", // Replace with actual logo paths
  },
  {
    id: 2,
    title: "UEA Colfuturo Partner Award (Masters)",
    organization: "University of East Anglia",
    level: "PHD, Master",
    amount: "20/25% UEA tuition fee discount",
    deadline: "N/A",
    logo: "path-to-your-logo-image",
  },
  {
    id: 3,
    title: "UEA China 60th Anniversary Award",
    organization: "University of East Anglia",
    level: "Master",
    amount: "£4,000",
    deadline: "N/A",
    logo: "path-to-your-logo-image",
  },
  {
    id: 4,
    title: "UEA Brazil Award",
    organization: "University of East Anglia",
    level: "Master",
    amount: "Up to £5,000",
    deadline: "N/A",
    logo: "path-to-your-logo-image",
  },
  {
    id: 5,
    title: "UEA Bangladesh Award",
    organization: "University of East Anglia",
    level: "Master",
    amount: "Up to £5,000",
    deadline: "N/A",
    logo: "path-to-your-logo-image",
  },
  {
    id: 6,
    title: "UEA Across the Pond Award",
    organization: "University of East Anglia",
    level: "Bachelor",
    amount: "£4,000 up to £10,000 per year",
    deadline: "N/A",
    logo: "path-to-your-logo-image",
  },
  // ... more scholarship objects
];

const ScholarshipCard = ({
  title,
  organization,
  level,
  amount,
  deadline,
  logo,
}) => {
  return (
    // Added hover effect for shadow and scale for a slight "lift" effect
    <div
      className="flex flex-col bg-white p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1"
      style={{
        minHeight: "200px",
        backgroundColor: "#B6BBC4",
        color: "#4D4C7D",
      }}
    >
      <div className="mb-4">
        <img
          className="w-20 h-14 mx-auto"
          src={photo}
          alt={`${organization} logo`}
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-2xl mb-2 text-center">{title}</h3>
        <p className="text-gray-600 text-2xl text-center mb-2">{organization}</p>
        <p className="text-gray-600 text-xl mb-2">{level}</p>
        <p className="text-gray-600 text-xl mb-2">{amount}</p>
      </div>
      <div className="text-gray-600 text-base">{deadline}</div>
    </div>
  );
};

// ... rest of the code remains the same

const ScholarshipsList = () => {
  return (
    <div
      className="bg-gray-100 p-8"
      style={{
        backgroundColor: "#161A30",
        color: "#F0ECE5",
      }}
    >
      <h2 className="font-bold text-xl mb-6 text-center">
        The Latest Scholarships
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {scholarships.map((scholarship) => (
          <ScholarshipCard key={scholarship.id} {...scholarship} />
        ))}
      </div>
    </div>
  );
};

export default ScholarshipsList;
