import React, { useEffect } from 'react';
import pic1 from "../../assets/AboutPage/png-1.png"; // Update with your actual image path
import { MdMargin } from 'react-icons/md';
// import '../../App.css';

const AboutCompany = () => {
    const myStyle = {
        highlights: {
            display: 'flex',
            justifyContent: 'center',  // Example of a flex property
            alignItems: 'center',      // Another flex property
            marginRight: '5px'         // Make sure 'marginRight' is camelCase
        }
    };


    return (
        <div className="relative w-full min-h-41 bg-white text-black p-10 rounded-lg overflow-hidden"
            style={{ paddingLeft: "5%", paddingRight: "5%" }}>

            {/* First Section */}








            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10">

                {/* Image Section with faster transition duration */}
                <div
                    // data-aos="fade-up" // Adding AOS animation for scrolling effect
                    className="w-full md:max-w-[700px]  md:w-[40%] lg:w-[35%] h-auto mx-auto mt-6 md:mt-0 animate-move"
                    style={{ position: "relative", left: "0" }}>
                    <img
                        src={pic1}
                        alt="Liro Studios"
                        className="w-full h-auto rounded-lg shadow-lg hover:opacity-70 transition-opacity duration-500 ease-in-out"
                    />
                </div>

                {/* Content Section */}
                <div className="flex flex-col items-start text-left md:w-1/2 xl:px-16" /*data-aos="fade-left"*/>
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        <span className="highlights">OUR MISSION</span>
                    </h2>
                    <br />

                    <p className="mt-4 text-base leading-relaxed text-black text-justify"
                        style={{ maxWidth: '100%', letterSpacing: "0px" }}>
                        At LIRO Studios, our mission is simple: to help businesses grow digitally and achieve their fullest potential.
                        We believe that with the right blend of creativity, technology, and strategy, any vision can become a reality.
                    </p>
                </div>
            </div>



























        </div>
    );
};

export default AboutCompany;
