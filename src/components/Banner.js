import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHistory, faMoneyBillAlt, faEye } from '@fortawesome/free-solid-svg-icons'; // Import relevant icons

export default function Banner() {
  // Updated data array containing information about different features
  const data = [
    {
      icon: faBuilding, // Icon for Real-time Construction
      title: "Real-time Construction",
      description: "Stay updated with real-time progress updates on construction activities"
    },
    {
      icon: faHistory, // Icon for Progress Timeline
      title: "Progress Timeline",
      description: "Track the entire construction process through a detailed progress timeline"
    },
    {
      icon: faMoneyBillAlt, // Icon for Seamless Payment
      title: "Seamless Payment",
      description: "Effortlessly manage payments and transactions securely online"
    },
    {
      icon: faEye, // Icon for Virtual Property Visits
      title: "Virtual Property Visits",
      description: "Explore properties remotely through virtual tours and 3D visualizations"
    },
  ];

  return (
    // Banner container with flex layout and background color
    <div className="flex bg-[#2639a6]">
      {/* Mapping through each feature and rendering a feature card */}
      {data.map((item, index) => (
        <div key={index} className="text-white rounded-lg overflow-hidden flex items-center m-2">
          {/* Feature icon */}
          <FontAwesomeIcon icon={item.icon} className="w-20 h-20 rounded-full mx-auto mt-4 mb-6 text-4xl" />
          <div className="px-6 py-4">
            {/* Feature title */}
            <div className="font-bold text-xl mb-2">{item.title}</div>
            {/* Feature description */}
            <p className="text-gray-100  text-base">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
