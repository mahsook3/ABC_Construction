import React from "react";
import bg from "../assets/bg1.png";
export default function Services() {
  return (
    <div id="services" style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex ml-20 pt-20">
        <div className="flex-1 flex flex-col justify-center h-screen">
          <h1 className="text-2xl font-bold">Our Services</h1>
          <p>Comprehensive Solutions Tailored to Your Needs</p>
        </div>
        <div className="flex-1">
          <div className="container mx-auto flex flex-wrap justify-center gap-8">
            <div className="bg-yellow-500 text-center text-white p-4 rounded-lg w-72">
              <h2 className="text-3xl font-bold mb-2">
                Construction Management
              </h2>
              <p className="text-base">
                Our experienced construction management team oversees every
                aspect of your project, ensuring seamless coordination, timely
                execution, and adherence to quality standards.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 bg-[#2639a6] border border-gray-400 rounded-md font-medium text-base no-underline hover:bg-blue-900 mt-4"
              >
                GET MORE
              </a>
            </div>
            <div className="bg-yellow-500 text-center text-white p-4 rounded-lg w-72">
              <h2 className="text-3xl font-bold mb-2">
                Construction Management
              </h2>
              <p className="text-base">
                Our experienced construction management team oversees every
                aspect of your project, ensuring seamless coordination, timely
                execution, and adherence to quality standards.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 bg-[#2639a6] border border-gray-400 rounded-md font-medium text-base no-underline hover:bg-blue-900 mt-4"
              >
                GET MORE
              </a>
            </div>
            <div className="bg-yellow-500 text-center text-white p-4 rounded-lg w-72">
              <h2 className="text-3xl font-bold mb-2">
                Construction Management
              </h2>
              <p className="text-base">
                Our experienced construction management team oversees every
                aspect of your project, ensuring seamless coordination, timely
                execution, and adherence to quality standards.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 bg-[#2639a6] border border-gray-400 rounded-md font-medium text-base no-underline hover:bg-blue-900 mt-4"
              >
                GET MORE
              </a>
            </div>
            <div className="bg-yellow-500 text-center text-white p-4 rounded-lg w-72">
              <h2 className="text-3xl font-bold mb-2">
                Construction Management
              </h2>
              <p className="text-base">
                Our experienced construction management team oversees every
                aspect of your project, ensuring seamless coordination, timely
                execution, and adherence to quality standards.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 bg-[#2639a6] border border-gray-400 rounded-md font-medium text-base no-underline hover:bg-blue-900 mt-4"
              >
                GET MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
