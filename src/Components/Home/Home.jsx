// import React from 'react';
// import { useTypewriter, Cursor } from 'react-simple-typewriter';
// import './Home.css';

// const Home = () => {

//     const [text] = useTypewriter({
//         words: ["Digital Marketing.", "Graphical Designing.", "Web Development.", "Web Designing.", "Multimedia Creations."],
//         loop: true,
//         typeSpeed: 40,
//         deleteSpeed: 30,
//         delaySpeed: 1500,
//     });

//     return (
//         <section class="pt-4 overflow-hidden bg-gray-50 md:pt-0 sm:pt-8 2xl:pt-8"> {/* Reduced top padding */}
//             <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//                 <div class="grid items-center grid-cols-1 md:grid-cols-2">
//                     <div>
//                         <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Get join with Liro Studios</h2>
//                         {/* <h2 className="highlights">{text}<Cursor cursorStyle="|" /></h2> Added the 'highlights' class */}
//                         <br></br>
//                         <h2 className="text-3xl font-bold subheading"><span class="highlights">{text}<Cursor cursorStyle="|" /></span></h2>
//                         <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Welcome to Liro Studios, where creativity seamlessly meets innovation. As a premier design studio, we take pride in our ability to transform visions into captivating visual experiences.</p>

//                         <p class="mt-4 text-xl text-gray-600 md:mt-8">
//                             <button className="cta-button">Discover More</button>
//                         </p>
//                     </div>

//                     <div class="relative">
//                         <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

//                         <img class="relative w-full xl:max-w-md xl:mx-auto 2xl:origin-bottom 2xl:scale-90" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" /> {/* Reduced image size */}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Home;























import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Home.css';
import blobshape from '../../assets/home/blob-shape.svg';
import businesswoman from '../../assets/home/business-woman.png';
import { Link } from 'react-router-dom';



const Home = () => {

    const [text] = useTypewriter({
        words: ["Digital Marketing.", "Graphical Designing.", "Web Development.", "Web Designing.", "Multimedia Creations."],
        loop: true,
        typeSpeed: 40,
        deleteSpeed: 30,
        delaySpeed: 1500,
    });

    return (
        <section class="pt-4 overflow-hidden bg-gray-50 md:pt-0 sm:pt-8 2xl:pt-8  "> {/* Reduced top padding */}
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div class="grid items-center grid-cols-1 md:grid-cols-2">
                    <div className=' ml-10  '>
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Get join with</h2>
                        <h2 class="text-3xl mt-2 font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Liro Studios</h2>
                        {/* <h2 className="highlights">{text}<Cursor cursorStyle="|" /></h2> Added the 'highlights' class */}
                        <br></br>
                        <h2 className="text-3xl mt-4 font-bold subheading"><span class="highlights">{text}<Cursor cursorStyle="|" /></span></h2>
                        <p class="max-w-lg mt-4 text-xl leading-relaxed text-gray-600 md:mt-8">Welcome to Liro Studios, where creativity seamlessly meets innovation. As a premier design studio, we take pride in our ability to transform visions into captivating visual experiences.</p>
                        <p class="mt-4 text-xl text-gray-600 md:mt-8">

                            <button className="cta-button">Discover More</button>
                        </p>

                    </div>

                    <div class="relative">
                        <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src={blobshape} alt="" />

                        <img class="relative w-full xl:max-w-md xl:mx-auto 2xl:origin-bottom 2xl:scale-90" src={businesswoman} alt="" /> {/* Reduced image size */}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Home;
