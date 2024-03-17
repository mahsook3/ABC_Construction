import React from "react";
import bg from "../assets/bg2.png";
const Contact = () => {
  return (
    <div id="contact"
      className="relative bg-opacity-50 z-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-white opacity-50 z-20"></div>
      <div className="container md:flex md:flex-row flex-col max-w-screen-xl mx-auto px-4 pt-28 pb-5 gap-12 text-gray-600 overflow-hidden md:px-8 ">
        <div className="item md:w-1/2 w-full">
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-2xl font-bold z-50">Get in Touch</h1>
            <p className="z-50">
              {" "}
              We're here to answer any questions you may have about our
              services. Reach out to us using the contact information below, and
              one of our representatives will get back to you as soon as
              possible.
            </p>
          </div>
        </div>
        <div className="item md:w-1/2 w-full">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-4 z-50">
              <div className="flex flex-col space-y-1 z-50">
                <label htmlFor="full_name" className="text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="full_name"
                  type="text"
                  className="shadow-sm rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-sm font-medium z-50">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  className="shadow-sm rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1 z-50"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="subject" className="text-sm font-medium z-50">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="shadow-sm rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1 z-50"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="message" className="text-sm font-medium z-50">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="shadow-sm rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1 z-50"
                  defaultValue={""}
                />
              </div>
              <button className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 z-50">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
