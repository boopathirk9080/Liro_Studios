import React, { useState } from 'react';
import '../../App.css'

const DigitalMarketing = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            title: 'Search Engine Optimization',
            // category: 'Lifestyle',
            // date: 'March 21, 2020',
            image: './digitalMarketing/seo.png',
            description: "Enhance your online presence with Liro Studios' expert SEO services. Our team excels in optimizing your site to boost visibility, drive targeted traffic, and improve search engine rankings for sustained greater success."
        },
        {
            title: 'Social Media Optimization',
            // category: 'Marketing',
            // date: 'April 04, 2020',
            image: './digitalMarketing/smo.png',
            description: "Amplify your brand's social media impact with Liro Studios. We craft engaging and relevant content, manage profiles, and apply data-driven tactics to elevate online visibility and increase audience interaction."
        },
        {
            title: 'Advertising Campaigns',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: './digitalMarketing/adCampaigns.png',
            description: "Expand your brand's reach with our strategic Ad Campaigns. We create and execute targeted ads that capture attention, drive traffic, and convert leads, using precise targeting and creative content."
        },
        {
            title: 'Social Media Marketing',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: './digitalMarketing/smm2.png',
            description: "Boost your brand’s presence with our Social Media Marketing services. We handle your social profiles, create captivating content, and deploy targeted strategies to grow your online community effectively."
        },
        {
            title: 'Content Marketing',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: './digitalMarketing/ContentMarketing.png',
            description: "Our Content Marketing services include planning, creating, and distributing high-quality content tailored to your brand’s voice. We produce engaging and relevant content, from blogs to videos, optimized for SEO."
        },
        {
            title: 'Content Writing',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: './digitalMarketing/contentwriting2.png',
            description: "Our Content Writing services offer engaging and high-quality content that reflects your brand's voice. From blog posts to articles and newsletters, we deliver content that informs, entertains, and drives results."
        },
        {
            title: 'Copywriting',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: './digitalMarketing/copywriting.png',
            description: "Our services deliver compelling and persuasive copy that grabs attention and converts leads. From catchy headlines to impactful descriptions, our copywriters make your brand's message clear and memorable."
        },
        {
            title: 'Crowd Funding',
            // category: 'Productivity',
            // date: 'May 12, 2020',
            image: './digitalMarketing/crowdFund.png',
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

        <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">

            <div className="grid grid-cols-1 gap-10 mx-auto mt-12 lg:max-w-5xl lg:grid-cols-2 lg:gap-16 justify-center">
                {/* Image Section */}
                <div className="md:max-w-[700px] mx-auto">
                    <div className="relative">
                        <div className="relative flex justify-center items-center">
                            <div className="block  items-center justify-center">
                                <img
                                    className="object-cover w-3/4 h-3/4 md:w-auto md:h-2/3 lg:w-full lg:h-auto"
                                    src="./digitalMarketing/animated1.gif"
                                    alt="Multimedia Animation"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Section */}
                <div className="md:max-w-[700px] mx-auto">
                    <div className="relative">

                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"><span class="highlights">DIGITAL MARKETING</span></h2>

                        <div className="px-5 sm:px-0">
                            <p className="mt-4 text-justify text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 max-w-full sm:max-w-lg lg:max-w-2xl">
                                Liro Studios helps businesses grow using digital marketing strategies. We use social media, search engines, and websites to reach customers. Our methods include SEO, content marketing, email campaigns, and targeted ads to improve online visibility and engage with customers. By analyzing data and adjusting strategies in real time, Liro Studios ensures businesses get the most out of their digital marketing efforts, helping them grow and succeed online.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

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
                                            <div className="block  items-center justify-center">
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
};

export default DigitalMarketing;
