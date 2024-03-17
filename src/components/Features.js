import React from "react";

export default function Features() {
  const teams = [
    {
      name: "Real-Time Progress",
      description:
        "Effortlessly track construction progress in real-time, ensuring stakeholders stay informed and enabling prompt decision-making.",
      imageUrl:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1650&q=80",
    },
    {
      name: "Seamless Payment",
      description:
        "Streamline payment processes with a seamless, integrated system, enhancing convenience for clients and reducing administrative burdens.",
      imageUrl:
        "https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Real-Time Construction",
      description:
        "Monitor construction activities in real-time, providing immediate insights into project status and facilitating timely responses to issues.",
      imageUrl:
        "https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <div
        id="features"
        className="flex-1 flex flex-col justify-center items-center"
      >
        <h1 className="text-2xl font-bold">Our Features</h1>
        <p>Comprehensive Solutions Tailored to Your Needs</p>
      </div>
      <>
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8"></div>
        <div className="flex flex-wrap justify-center">
          {teams.map((team, index) => (
            <div
              key={index}
              className="relative group w-96 h-96 overflow-hidden bg-gray-100 m-4 rounded-lg"
            >
              {" "}
              <img
                className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
                src={team.imageUrl}
                alt={team.name}
              />
              <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0" />
              <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                <div className="absolute w-full flex place-content-center">
                  <p className="capitalize  font-bold text-3xl text-center shadow-2xl text-white mt-10">
                    {team.name}
                  </p>
                </div>
                <div className="absolute w-full flex place-content-center mt-20">
                  <p className=" text-center w-4/5 text-white mt-5">
                    {team.description}
                  </p>
                </div>
                <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    </>
  );
}
