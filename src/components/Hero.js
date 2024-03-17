import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [heroData, setHeroData] = useState([
        {
            title: "Track Your Property's Progress with Confidence",
            description: "Real-time Updates, Seamless Monitoring, Complete Peace of Mind",
            buttons: [
                {
                    text: "Track Construction Progress",
                    color: "white",
                    backgroundColor: "gray-800",
                    hoverColor: "gray-700"
                },
            ],
            image: hero1
        },
        {
            title: "Visualize Your Dream Taking Shape",
            description: "From Blueprint to Reality: Witness Every Phase of Construction",
            buttons: [
                {
                    text: "Track Construction Progress",
                    color: "white",
                    backgroundColor: "gray-800",
                    hoverColor: "gray-700"
                },
            ],
            image: hero2
        },
        // Data 3
        {
            title: "Stay Ahead of the Curve with ABC Real Estate",
            description: "Efficiency, Transparency, Progress: Your Keys to Success",
            buttons: [
                {
                    text: "Track Construction Progress",
                    color: "white",
                    backgroundColor: "gray-800",
                    hoverColor: "gray-700"
                },
            ],
            image: hero3
        },
        // Data 4
        {
            title: "Empowering Your Vision, Every Step of the Way",
            description: "Transform Ideas into Reality: Your Construction Journey Starts Here",
            buttons: [
                {
                    text: "Track Construction Progress",
                    color: "white",
                    backgroundColor: "gray-800",
                    hoverColor: "gray-700"
                },
            ],
            image: hero4
        }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % heroData.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [heroData.length]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='relative mt-20 h-screen' id='hero'>
            <div className='absolute inset-0 blur-xl h-[580px]'></div>
            <div className='relative'>
                <section>
                    <div className="max-w-screen-xl mx-auto px-4 pt-28 pb-5 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
                        <div className='flex-none space-y-5 max-w-xl'>

                            <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                                {heroData[currentIndex].title}
                            </h1>
                            <p>
                                {heroData[currentIndex].description}
                            </p>
                            <div className='flex items-center gap-x-3 sm:text-sm'>
                                {heroData[currentIndex].buttons.map((button, index) => (
                                    <a key={index} href="javascript:void(0)" className={`flex items-center justify-center gap-x-1 py-2 px-4 text-${button.color} font-medium bg-${button.backgroundColor ? button.backgroundColor : "gray-800"} duration-150 hover:bg-${button.hoverColor ? button.hoverColor : "gray-700"} active:bg-gray-900 rounded-full md:inline-flex`}>
                                        {button.text}  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                            <div className="flex items-center -space-x-4">
  <img
    alt="user 1"
    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
  />
  <img
    alt="user 2"
    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
  />
  <img
    alt="user 3"
    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
  />
  <img
    alt="user 4"
    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
  />
  <img
    alt="user 5"
    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
  /> 10K+ Happy Clients
</div>


                            <div className=" mt-6 mb-10">
                        {heroData.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 mx-2 rounded-full focus:outline-none ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                                onClick={() => handleDotClick(index)}
                            />
                        ))}
                    </div>
                        </div>

                        <div className='flex-1 hidden md:block w-200 h-150'>
                            <div style={{  overflow: 'hidden' }}>
                                <motion.img
                                    key={heroData[currentIndex].image}
                                    src={heroData[currentIndex].image}
                                    alt="Organize Resume"
                                    className="w-full h-full object-cover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
}
