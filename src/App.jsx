// import { useState } from 'react'

// import A2 from './Components/A2';
// import A1 from './Components/A1';
// import Footer from './Footer';
// import Acount from './Components/Acount';
// import Ahome from './Ahome';
// import Aware from './Components/Aware';
// import BannerSection from './components/card_hover';
// import Home from './components/Home_1';
// // import './components/Home_1.css';
// import Services from "./Components/services/Services";


// import './App.css'
// import Contact from './Components/Contact/Contact';
// import Testimonial from './Components/Testimonial/Testimonial';
// import DigitalMarketing from './Components/digitalMarketing/DigitalMarketing';
// import WebDev from './Components/webDevelopment/WebDev';
// import Multimedia from './Components/multimedia/Multimedia';
// import GraphicalDesign from './Components/graphicalDesign/GraphicalDesign';
// // import DmServices from './Components/digitalMarketing/DmServices';
// function App() {

//   return (
//     <div>
//       {/* <A1 /> */}
//       <Home />
//       {/* <Ahome /> */}
//       {/* <Acount /> */}
//       <Services />

//       <DigitalMarketing />
//       <WebDev />
//       <Multimedia />
//       < GraphicalDesign />

//       {/* <BannerSection /> */}
//       {/* <A2 /> */}
//       {/* <Aware /> */}
//       <Testimonial />
//       <Contact/>
//       <Footer />
//     </div>


//   )
// }

// export default App

// import Footer from './Footer';
import Footer from './Components/footer/Footer';
import Services from "./Components/services/Services";
import { Routes, Route, useLocation } from "react-router-dom";
import './index.css';  // or './App.css'

import './App.css'
import Contact from './Components/Contact/Contact';
import Testimonial from './Components/Testimonial/Testimonial';
import DigitalMarketing from './Components/digitalMarketing/DigitalMarketing';
import WebDev from './Components/webDevelopment/WebDev';
import Multimedia from './Components/multimedia/Multimedia';
import GraphicalDesign from './Components/graphicalDesign/GraphicalDesign';
import Nav from './Components/navBar/Nav';
import Home from './Components/Home/Home';
import ScrollToTop from './Components/ScrollToTop';
import Blog from './Components/blog/Blog';
import Team from './Components/Team/Team';

import Ahome from './Components/About/Ahome';
import About_Missions from './Components/About/About_Missions';
import Acount from './Components/About/Acount';
import Icons from './Components/About/Icons';
import WhyChooseUs from './Components/About/WhyChooseUs';


function App() {

  return (
    <div className='poiuyt' >
      <Nav />
      <ScrollToTop />

      <Routes>

        <Route path="/" element=
          {<>
            <  Home />
            <Services />
            <Testimonial />



          </>
          }
        />


        <Route path="/about" element=
          {<>
            <Ahome />
            <Icons />
            <About_Missions />
            <WhyChooseUs />
            <Acount />

          </>
          }
        />

        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/services" element={<Services />} />
        <Route path="/digitalmarketing" element={<DigitalMarketing />} />
        <Route path="/webdevelopment" element={<WebDev />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/graphicaldesign" element={<GraphicalDesign />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />



      </Routes>

      <Contact />
      {/* <br /> */}
      <Footer />
    </div>


  )
}

export default App
