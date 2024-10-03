import React, { useState } from 'react';
import '../../App.css'

const graphicalDesigning = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            title: 'Logo Design',
            // category: 'Lifestyle',
            // date: 'March 21, 2020',
            image: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg',
            description: "Elevate your brand with a distinctive logo crafted by LIRO Studios, showcasing your unique identity and engaging your audience. Our custom designs ensure your brand makes a memorable impact in a competitive field."
        },
        {
            title: 'Brand Identity Design',
            // category: 'Marketing',
            // date: 'April 04, 2020',
            image: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg',
            description: "LIRO Studios develops cohesive brand identities that vividly communicate your story, differentiate you from competitors, and create a strong connection with your audience. Our designs establish a lasting impression."
        },
        {
            title: 'ABusiness Card Design',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg',
            description: "Make a lasting impression with elegant and sophisticated business cards designed by LIRO Studios. Our cards capture your brand's essence and ensure a memorable impact at every networking opportunity."
        },
        {
            title: 'Packaging Design',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg',
            description: "Stand out with creative packaging designs from LIRO Studios, enhancing your product's appeal while reinforcing your brand identity. We focus on both aesthetics and functionality for a remarkable experience."
        },
        {
            title: 'Brochure and Flyer Design',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg',
            description: "Effectively convey your message with expertly designed brochures and flyers from LIRO Studios. Our designs ensure your content is engaging and visually appealing, perfectly representing your brand."
        },
        {
            title: 'Posters and Banner Design',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg',
            description: "Grab attention with striking posters and banners designed by LIRO Studios. Our designs effectively communicate your message and make a memorable impact at events, trade shows, and in-store displays."
        },
        {
            title: 'Social Media Graphics',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg',
            description: "Boost your online presence with tailored social media graphics from LIRO Studios. Our designs align with your brand and engage your audience, enhancing brand visibility and driving interaction."
        },
        {
            title: 'Advertisement Design',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg',
            description: "Achieve impactful results with strategic advertisement designs by LIRO Studios. We craft compelling messages that target the right audience and maximize your ROI, whether in print or digital formats."
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
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid items-center md:grid-cols-2 md:gap-x-20 gap-y-10">
                    <div className="relative pl-16 pr-10 sm:pl-6 md:pl-0 xl:pr-0 md:order-2">
                        {/* <img className="absolute top-6 -right-4 xl:-right-12" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/3/dots-pattern.svg" alt="" /> */}
                        <div className="relative max-w-xs ml-auto">
                            <div className="block aspect-w-6 aspect-h-6">
                                <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="md:order-1">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"><span class="highlights">Graphical Designing</span></h2>
                        <br />
                        <div className="mt-4 text-base leading-relaxed text-gray-600 text-justify" style={{ maxWidth: '450px' }}>
                            LIRO Studios specializes in graphic design to enhance businesses.
                            We create compelling visuals for brands using logos, advertisements, and website graphics.
                            Our designs captivate audiences and strengthen brand identity across various platforms.
                            With a focus on creativity and client collaboration, We ensures each design aligns with
                            business goals and resonates with target audiences. Whether for print or digital media,
                            our graphic design services aim to elevate businesses and leave a lasting impression.
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------------------------------------------------------------------------------------------------- */}


            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Our Expertise</h2>
                            {/* <h2
                                class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"
                                style={{ textAlign: 'center' }}
                            >
                                Our Expertise
                            </h2> */}



                            {/* <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p> */}
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
                                        <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                            <img className="object-cover w-full h-full" src={card.image} alt="" />
                                        </a>

                                        {/* <div className="absolute top-4 left-4">
                                        <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> {card.category} </span>
                                    </div> */}
                                    </div>
                                    {/* <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> {card.date} </span> */}
                                    <p className="mt-5 text-2xl font-semibold">
                                        <a href="#" title="" className="text-black"> {card.title} </a>
                                    </p>
                                    <p className="mt-4 text-base text-gray-600">{card.description}</p>
                                    {/* <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                                    Continue Reading
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </a> */}
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

export default graphicalDesigning