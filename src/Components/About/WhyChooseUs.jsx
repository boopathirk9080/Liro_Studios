import React, { useEffect } from 'react';
import pic1 from "../../assets/Mountain/Mountains30.jpg"; // Update with your actual image path
// import '../../App.css';

const AboutCompany = () => {
    // Initialize AOS


    return (


        <div className="grid grid-cols-1 gap-10 mx-auto mt-12 lg:max-w-5xl lg:grid-cols-2 lg:gap-16 justify-center">

            <div className="md:max-w-[700px] mx-auto">
                <div className="relative">

                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        <span className="highlights">Why Choose Us?</span>
                    </h2>
                    <br />

                    <div className="px-5 sm:px-0">

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
                    <br />
                </div>
            </div>

            {/* Image Section */}
            <div className="md:max-w-[700px] mx-auto">
                <div className="relative">
                    <div className="relative flex justify-center items-center">
                        <div className="block items-center justify-center">
                            <img
                                className="object-cover w-3/4 h-3/4 md:w-auto md:h-2/3 lg:w-full lg:h-auto  rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-500 "
                                src={pic1}
                                alt="WhyChooseUs"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <br />
        </div>
    );
};

export default AboutCompany;
