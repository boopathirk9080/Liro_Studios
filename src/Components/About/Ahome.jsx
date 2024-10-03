import React from 'react';
import AboutMain from "../../assets/AboutPage/png -4.png";
// import Icons from './Icons';

export const Ahome = () => {
    return (

        <div className="relative w-full min-h-60 bg-white text-black p-10 rounded-lg  overflow-hidden"
            style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "0px" }}>

            {/* First Section */}


            {/* Second Section */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mt-12 space-y-10 md:space-y-0 md:space-x-10">

                {/* Content Section */}
                <div className="flex flex-col items-start text-left md:w-1/2 xl:px-16" data-aos="fade-right">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        <span className="highlights">Liro Studios</span>
                    </h2>
                    <br />
                    <p className="mt-4 text-base leading-relaxed text-black text-justify"
                        style={{ maxWidth: '100%', letterSpacing: "1px" }}>
                        At LIRO Studios, we are passionate about transforming ideas into digital realities. Founded with the mission to empower businesses in the digital era, we specialize in a wide array of services that drive growth, enhance brand presence, and optimize operations. Whether you’re a startup looking to make a mark or an established company seeking to innovate, LIRO Studios is your partner in success.

                    </p>
                    <br />
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:w-auto hover:bg-blue-700 focus:bg-blue-700"
                    >
                        Contact us
                    </button>
                </div>

                {/* Image Section with reduced size for desktop */}
                <div
                    data-aos="fade-up" // Adding AOS animation for scrolling effect
                    className="w-full md:w-[40%] lg:w-[50%] h-auto mx-auto mt-6 md:mt-0"
                    style={{ marginRight: "60px" }}>
                    <img
                        src={AboutMain}
                        alt="Liro Studios"
                        className="w-full h-auto rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-500"

                    />
                </div>
            </div>
            <br />

            {/* <Icons /> */}
        </div>

    );
};

export default Ahome;

