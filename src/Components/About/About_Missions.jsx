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
        <div className="grid grid-cols-1 gap-10 mx-auto mt-12 lg:max-w-5xl lg:grid-cols-2 lg:gap-16 justify-center">
            {/* Image Section */}
            <div className="md:max-w-[600px] mx-auto">
                <div className="relative">
                    <div className="relative flex justify-center items-center">
                        <div className="block  items-center justify-center">
                            <img
                                className="object-cover w-3/4 h-3/4 md:w-auto md:h-2/3 lg:w-full lg:h-auto  rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-500 "
                                src={pic1}
                                alt="Multimedia Animation"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:max-w-[700px] mx-auto">
                <div className="relative">

                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        <span className="highlights">OUR MISSION</span>
                    </h2>
                    <br />

                    <div className="px-5 sm:px-0">

                        <p className="mt-4 text-base leading-relaxed text-black text-justify"
                            style={{ maxWidth: '100%', letterSpacing: "0px" }}>
                            At LIRO Studios, our mission is simple: to help businesses grow digitally and achieve their fullest potential.
                            We believe that with the right blend of creativity, technology, and strategy, any vision can become a reality.
                        </p>
                    </div>
                    <br />
                </div>
            </div>
            <br />
        </div>
    );
};

export default AboutCompany;
