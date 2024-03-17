import React from 'react'
import logo from '../assets/logo1.png'

export default function About() {
  return (
    <div className="container md:flex md:flex-row flex-col bg-[#f2f2f2] ">
    <div className="item md:w-1/2 w-full max-w-screen-xl mx-auto px-4 pt-28 pb-5 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
        <img src={logo} alt="logo" className="w-1/2 h-1/2 flex flex-center" />
    </div>
    <div className="item md:w-1/2 w-full">

    <div className="container mx-auto px-4 py-16">
  <div className="text-center mb-8">
    <h1 className="text-3xl font-bold sm:text-4xl">About Us</h1>
  </div>
  <div className="flex flex-col space-y-8 sm:flex-row sm:space-x-4">
    <div className="w-full ">
      <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
      <p className="text-gray-700 leading-loose">
        At ABC Real Estate, we are dedicated to revolutionizing the construction
        industry through innovation, transparency, and exceptional service. With
        years of experience and a passion for excellence, we strive to provide
        our clients with comprehensive solutions tailored to their unique needs.
      </p>
    </div>
  </div>
  <div className="w-full  flex flex-wrap justify-center items-center">
    <div className="sm:w-1/3 mb-4 sm:mb-0">
      <span className="inline-block rounded-xl bg-[#27aae2] px-4 py-2 text-center text-white text-xl font-bold">
        Innovation
      </span>
    </div>
    <div className="sm:w-1/3 mb-4 sm:mb-0">
      <span className="inline-block rounded-xl bg-[#5a595e] px-4 py-2 text-center text-white text-xl font-bold">
        Transparency
      </span>
    </div>
    <div className="sm:w-1/3 mb-4 sm:mb-0">
      <span className="inline-block rounded-xl bg-[#5a595e] px-4 py-2 text-center text-white text-xl font-bold">
        Client-Centricity
      </span>
    </div>
  </div>
  <div >
    <h2 className="text-2xl font-bold mb-4">Behind ABC Real Estate</h2>
    <p className="text-gray-700 leading-loose">
      Behind ABC Real Estate is a team of skilled professionals committed to
      excellence in every project we undertake. With expertise spanning
      construction management, finance, and technology, our team works
      tirelessly to ensure the success of your project from start to finish.
    </p>
  </div>
</div>


    </div>
</div>
  )
}
