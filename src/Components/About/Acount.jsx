import React, { useState, useEffect, useRef } from 'react';
// import vid from "../assets/Mountain/er.mp4"; // Update with your actual video path

export const Acounts = () => {
    const [years, setYears] = useState(0);
    const [projects, setProjects] = useState(0);
    const [team, setTeam] = useState(0);
    const videoRef = useRef(null);
    const hasPlayedOnce = useRef(false); // Track if the video has played
    const hasCountedOnce = useRef(false); // Track if the counters have started

    // Function to handle counter increments
    const startCounters = () => {
        if (hasCountedOnce.current) return; // Prevent restarting the counters
        hasCountedOnce.current = true;

        const duration = 1500; // 4 seconds
        const intervalTime = 100; // Interval for updating the counters
        const steps = duration / intervalTime;

        const incrementYears = 3 / steps;
        const incrementProjects = 100 / steps;
        const incrementTeam = 25 / steps;

        const interval = setInterval(() => {
            setYears((prev) => (prev < 6 ? prev + incrementYears : 6));
            setProjects((prev) => (prev < 4821 ? prev + incrementProjects : 4821));
            setTeam((prev) => (prev < 37 ? prev + incrementTeam : 37));
        }, intervalTime);

        setTimeout(() => {
            clearInterval(interval);
        }, duration); // Stop the counter after the duration ends
    };



    // Trigger counters on scroll only once
    useEffect(() => {
        const section = document.querySelector('.numbers-section');

        const handleIntersection = (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting && !hasCountedOnce.current) {
                startCounters(); // Start counters when section is in view
            }
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5, // 50% of section should be visible to start the counter
        });

        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <>

            {/* Numbers Section */}
            <section className="numbers-section py-10 bg-white sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Numbers tell our story
                        </h2>
                        <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                        <div>
                            <h3 className="font-bold text-7xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                                    {years.toFixed(0)}+
                                </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">Years in business</p>
                            <p className="text-base mt-0.5 text-gray-500">Creating the successful path</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-7xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                                    {projects.toFixed(0)}+
                                </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">Projects delivered</p>
                            <p className="text-base mt-0.5 text-gray-500">In last 3 years</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-7xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                                    {team.toFixed(0)}+
                                </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">Happy Clients</p>
                            <p className="text-base mt-0.5 text-gray-500">Working for your success</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Acounts;
