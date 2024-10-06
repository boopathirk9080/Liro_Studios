import React, { useState } from 'react';
import '../../App.css'

const GraphicalDesign = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            title: 'Logo Design',
            // category: 'Lifestyle',
            // date: 'March 21, 2020',
            image: './graphicalDesign/designing2.png',
            description: "Elevate your brand with a distinctive logo crafted by Liro Studios, showcasing your unique identity and engaging your audience. Our custom designs ensure your brand makes a memorable impact in a competitive field."
        },
        {
            title: 'Brand Identity Design',
            // category: 'Marketing',
            // date: 'April 04, 2020',
            image: './graphicalDesign/branding.png',
            description: "Liro Studios develops cohesive brand identities that vividly communicate your story, differentiate you from competitors, and create a strong connection with your audience. Our designs establish a lasting impression."
        },
        {
            title: 'Business Card Design',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: './graphicalDesign/designing5.png',
            description: "Make a lasting impression with elegant and sophisticated business cards designed by Liro Studios. Our cards capture your brand's essence and ensure a memorable impact at every networking opportunity."
        },
        {
            title: 'Packaging Design',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: './graphicalDesign/designing3.png',
            description: "Stand out with creative packaging designs from Liro Studios, enhancing your product's appeal while reinforcing your brand identity. We focus on both aesthetics and functionality for a remarkable experience."
        },
        {
            title: 'Brochure and Flyer Design',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: './graphicalDesign/designing4.png',
            description: "Effectively convey your message with expertly designed brochures and flyers from Liro Studios. Our designs ensure your content is engaging and visually appealing, perfectly representing your brand."
        },
        {
            title: 'Posters and Banner Design',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: './graphicalDesign/designing6.png',
            description: "Grab attention with striking posters and banners designed by Liro Studios. Our designs effectively communicate your message and make a memorable impact at events, trade shows, and in-store displays."
        },
        {
            title: 'Social Media Graphics',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: './graphicalDesign/designing1.png',
            description: "Boost your online presence with stunning, tailored social media graphics from Liro Studios. Our designs align with your brand and engage your audience, enhancing brand visibility and driving interaction."
        },
        {
            title: 'Advertisement Design',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: './graphicalDesign/adDesign.png',
            description: "Achieve impactful results with strategic advertisement designs by Liro Studios. We craft compelling messages that target the right audience and maximize your ROI, whether in print or digital formats."
        }

    ];

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            return newIndex >= cards.length ? 0 : newIndex;
        });
    };

    const displayedCards = [...cards, ...cards].slice(currentIndex, currentIndex + 3);

    return (
        <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 gap-10 mx-auto mt-12 lg:max-w-5xl lg:grid-cols-2 lg:gap-16 justify-center">
                {/* Image Section */}
                <div class=" md:max-w-[600px] mx-auto relative grid grid-cols-2 w-auto md:p-10 gap-6 mt-10 md:mt-0">
                    <div class="overflow-hidden aspect-w-3 aspect-h-4">
                        <img class="object-cover object-top origin-top scale-150" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/team-work.jpg" alt="" />
                    </div>

                    <div class="relative">
                        <div class="h-full overflow-hidden aspect-w-3 aspect-h-4">
                            <img class="object-cover scale-150 lg:origin-bottom-right" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/woman-working-on-laptop.jpg" alt="" />
                        </div>

                        <div class="absolute inset-0 grid w-full h-full place-items-center">
                            <button type="button" class="inline-flex items-center justify-center w-12 h-12 text-blue-600 bg-white rounded-full shadow-md lg:w-20 lg:h-20">
                                <svg class="w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="absolute  -translate-x-1/2 left-1/2 -top-16">
                        <img class=" w-[178px] md:w-[344px] rotate-animation " src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/round-text.png" alt="" />
                    </div>
                </div>

                {/* Text Section */}
                <div className="md:max-w-[700px] mx-auto">
                    <div className="relative">

                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"><span class="highlights">Graphical Designing</span></h2>

                        <div className="px-5 sm:px-0">
                            <p className="mt-4 text-justify text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 max-w-full sm:max-w-lg lg:max-w-2xl">
                                Liro Studios specializes in graphic design to enhance businesses.
                                We create compelling visuals for brands using logos, advertisements, and website graphics.
                                Our designs captivate audiences and strengthen brand identity across various platforms.
                                With a focus on creativity and client collaboration, We ensures each design aligns with
                                business goals and resonates with target audiences. Whether for print or digital media,
                                our graphic design services aim to elevate businesses and leave a lasting impression.                        </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* 

            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
                    <div class="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
                        <div class="overflow-hidden aspect-w-3 aspect-h-4">
                            <img class="object-cover object-top origin-top scale-150" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/team-work.jpg" alt="" />
                        </div>

                        <div class="relative">
                            <div class="h-full overflow-hidden aspect-w-3 aspect-h-4">
                                <img class="object-cover scale-150 lg:origin-bottom-right" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/woman-working-on-laptop.jpg" alt="" />
                            </div>

                            <div class="absolute inset-0 grid w-full h-full place-items-center">
                                <button type="button" class="inline-flex items-center justify-center w-12 h-12 text-blue-600 bg-white rounded-full shadow-md lg:w-20 lg:h-20">
                                    <svg class="w-6 h-6 lg:w-8 lg:h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="absolute -translate-x-1/2 left-1/2 -top-16">
                            <img class="w-32 h-32" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/round-text.png" alt="" />
                        </div>
                    </div>

                    <div class="flex flex-col items-start xl:px-16">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"><span class="highlights">GRAPHICAL DESIGNING</span></h2>
                        <br></br>
                        <p class="mt-4 text-base leading-relaxed text-gray-600 text-justify" style={{ maxWidth: '450px' }}>Liro Studios specializes in graphic design to enhance businesses.
                            We create compelling visuals for brands using logos, advertisements, and website graphics.
                            Our designs captivate audiences and strengthen brand identity across various platforms.
                            With a focus on creativity and client collaboration, We ensures each design aligns with
                            business goals and resonates with target audiences. Whether for print or digital media,
                            our graphic design services aim to elevate businesses and leave a lasting impression.
                        </p>
                    </div>
                </div>
            </div> */}

            {/* -------------------------------------------------------------------------------------------------------- */}

            <br></br>
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Our Expertise</h2>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:space-x-3">
                            <button onClick={handlePrevClick} type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button onClick={handleNextClick} type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                        {displayedCards.map((card, index) => (
                            <div key={index} className="overflow-hidden bg-white rounded shadow">
                                <div className="p-5">
                                    <div className="relative">
                                        <div className="relative flex justify-center items-center">
                                            <div className="block items-center justify-center">
                                                <img className="object-cover"
                                                    style={{ height: '70%', width: '60%' }}
                                                    src={card.image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-5 text-2xl font-semibold">
                                        <div className="text-center text-black"> {card.title} </div>
                                    </p>
                                    <p className="mt-4 text-base text-gray-600">{card.description}</p>

                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
                        <button onClick={handlePrevClick} type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button onClick={handleNextClick} type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>


        </section>
    );
}

export default GraphicalDesign