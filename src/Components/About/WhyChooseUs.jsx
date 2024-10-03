import React, { useEffect } from 'react';
import pic1 from "../../assets/Mountain/Mountains30.jpg"; // Update with your actual image path
// import '../../App.css';

const AboutCompany = () => {
    // Initialize AOS


    return (
        <div className="relative w-full min-h-41 bg-white text-black p-10 rounded-lg  overflow-hidden"
            style={{ paddingLeft: "5%", paddingRight: "5%" }}>

            {/* First Section */}


            {/* Second Section */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mt-12 space-y-10 md:space-y-0 md:space-x-10">

                {/* Content Section */}
                <div className="flex flex-col items-start text-left md:w-1/2 xl:px-16" >
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        <span className="highlights">Why Choose Us?</span>
                    </h2>
                    <br />
                    <p className="mt-4 text-base leading-relaxed text-black text-justify"
                        style={{ maxWidth: '100%', letterSpacing: "0px" }}>
                        Innovation-Driven: We are always at the forefront of the latest technological advancements, ensuring our clients
                        benefit from cutting-edge solutions.

                        Client-Centric Approach: Your success is our priority. We tailor our services to meet your unique needs and objectives.
                        <br />
                        <br />
                        Experienced Team: Our team comprises seasoned professionals with deep expertise in various domains, including digital
                        marketing, SEO, and creative strategies, all working together to deliver exceptional results. Join Us on Your Digital Journey.
                    </p>
                </div>

                {/* Image Section with reduced size for desktop */}
                <div
                    // Adding AOS animation for scrolling effect
                    className="w-full md:w-[40%] lg:w-[32%] h-auto mx-auto mt-6 md:mt-0"
                    style={{ marginRight: "60px" }}>
                    <img
                        src={pic1}
                        alt="Liro Studios"
                        className="w-full h-auto rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutCompany;
