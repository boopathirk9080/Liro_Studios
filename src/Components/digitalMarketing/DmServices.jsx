import React, { useState } from 'react';

const dmServices = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            title: 'Search Engine Optimization',
            // category: 'Lifestyle',
            // date: 'March 21, 2020',
            image: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg',
            description: "Enhance your online presence with LIRO Studios' expert SEO services. Our team excels in optimizing your site to boost visibility, drive targeted traffic, and improve search engine rankings for sustained greater success."
        },
        {
            title: 'Social Media Optimization',
            // category: 'Marketing',
            // date: 'April 04, 2020',
            image: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg',
            description: "Amplify your brand's social media impact with LIRO Studios. We craft engaging and relevant content, manage profiles, and apply data-driven tactics to elevate online visibility and increase audience interaction."
        },
        {
            title: 'Advertising Campaigns',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg',
            description: "Expand your brand's reach with our strategic Ad Campaigns. We create and execute targeted ads that capture attention, drive traffic, and convert leads, using precise targeting and creative content."
        },
        {
            title: 'Social Media Marketing',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg',
            description: "Boost your brand’s presence with our Social Media Marketing services. We handle your social profiles, create captivating content, and deploy targeted strategies to grow your online community effectively."
        },
        {
            title: 'Content Marketing',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg',
            description: "Our Content Marketing services include planning, creating, and distributing high-quality content tailored to your brand’s voice. We produce engaging and relevant content, from blogs to videos, optimized for SEO."
        },
        {
            title: 'Content Writing',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg',
            description: "Our Content Writing services offer engaging and high-quality content that reflects your brand's voice. From blog posts to articles and newsletters, we deliver content that informs, entertains, and drives results."
        },
        {
            title: 'Copywriting',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg',
            description: "Our services deliver compelling and persuasive copy that grabs attention and converts leads. From catchy headlines to impactful descriptions, our copywriters make your brand's message clear and memorable."
        },
        {
            title: 'Crowd Funding',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: 'https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg',
            description: "Our services guide you in raising funds and realizing your vision. We offer support, including crafting persuasive narratives, designing attractive visuals, and developing effective promotional strategies."
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
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-end justify-between">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Our Expertise</h2>
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
    );
};

export default dmServices;
