import React, { useRef, useEffect } from 'react';
import vidIcons from "../../assets/AboutPage/er.mp4";
import './Icons.css';

const Icons = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        const handlePlay = () => {
            console.log('Video started playing');
        };

        const handleEnd = () => {
            console.log('Video ended');
        };

        if (video) {
            video.addEventListener('play', handlePlay);
            video.addEventListener('ended', handleEnd);
        }

        return () => {
            if (video) {
                video.removeEventListener('play', handlePlay);
                video.removeEventListener('ended', handleEnd);
            }
        };
    }, []);

    return (


        <div className="relative w-full min-h-41 bg-white text-black p-10 rounded-lg  overflow-hidden"
            style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "0px" }}>

            <div className="videoContainer Icons_bg">
                <br />
                <video
                    ref={videoRef}
                    src={vidIcons}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="videoElement"
                    aria-label="Autoplaying video"
                >
                    Your browser does not support the video tag.
                </video>

                {/* Adding the bubble/cube effect */}
                <div className="bubble-container">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="bubble"></div>
                    ))}
                </div>
            </div>
            <br />
        </div>
    );
};

export default Icons;
