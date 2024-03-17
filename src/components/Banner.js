import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHistory,
  faMoneyBillAlt,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

export default function Banner() {
  const data = [
    {
      icon: faBuilding,
      title: "Real-time Construction",
      description:
        "Stay updated with real-time progress updates on construction activities",
    },
    {
      icon: faHistory,
      title: "Progress Timeline",
      description:
        "Track the entire construction process through a detailed progress timeline",
    },
    {
      icon: faMoneyBillAlt,
      title: "Seamless Payment",
      description:
        "Effortlessly manage payments and transactions securely online",
    },
    {
      icon: faEye,
      title: "Virtual Property Visits",
      description:
        "Explore properties remotely through virtual tours and 3D visualizations",
    },
  ];

  return (
    <div className="flex bg-[#2639a6]">
      {data.map((item, index) => (
        <div
          key={index}
          className="text-white rounded-lg overflow-hidden flex items-center m-2"
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="w-20 h-20 rounded-full mx-auto mt-4 mb-6 text-4xl"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p className="text-gray-100  text-base">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
