import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

const Services = () => {
  return (
    <section class="py-10 bg-white sm:py-16 lg:py-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"><span class="highlights">Our Services</span></h2>
          <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div className="grid grid-cols-1 gap-10 mx-auto mt-12 lg:max-w-5xl lg:grid-cols-2 lg:gap-16 justify-center">
          <div className="md:max-w-[700px] mx-auto">

            <div className="relative">
              <div className="relative flex justify-center items-center">
                <div className="block items-center justify-center">
                  <img className="object-cover"
                    style={{ height: '70%', width: '70%' }}
                    src="./services/Website3.png" alt="" />
                </div>
              </div>
            </div>
            <div></div>
            <p class="mt-6 text-xl font-semibold">
              <div class="text-black"> Web Development </div>
            </p>
            <div class="px-5 sm:px-0">
              <p class="mt-4 text-justify text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 max-w-full sm:max-w-400  lg:max-w-2xl">
                At Liro Studios, we design visually stunning, responsive, and user-friendly websites tailored to your business's unique needs.
                As a creative digital marketing agency, we build websites that not only look great but perform exceptionally well across all devices.
                Our expert team optimizes each site for SEO, helping you rank higher on search engines and attract more organic traffic.
                Whether a landing page or a complex e-commerce platform, we deliver an outstanding user experience that drives your digital marketing efforts and business objectives.
              </p>

            </div>


            {/* Find More Button */}
            <div class="mt-5">

              <Link to="/webdevelopment" class="inline-block px-6 py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-green-400 rounded-full">Find more</Link>
            </div>
            <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
          </div>
          <div className="md:max-w-[700px] mx-auto">

            <div className="relative">
              <div className="relative flex justify-center items-center">
                <div className="block  items-center justify-center">
                  <img className="object-cover"
                    style={{ height: '70%', width: '70%' }}
                    src="./services/design.png" alt="" />
                </div>
              </div>
            </div>
            <div></div>
            <p class="mt-6 text-xl font-semibold">
              <div class="text-black"> Graphical Designing</div>
            </p>
            <div class="px-5 sm:px-0">
              <p class="mt-4 text-justify text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 max-w-full sm:max-w-400  lg:max-w-2xl">
                Liro Studios excels in graphic design to elevate businesses. We create compelling visuals for brands, including logos, advertisements, and website graphics. Our designs captivate audiences and strengthen brand identity across multiple platforms. With a strong focus on creativity and close client collaboration, we ensure each design aligns with business objectives and resonates with target audiences. Whether for print or digital media, our graphic design services aim to amplify businesses and leave a lasting, impactful impression.
              </p>

            </div>
            <br />

            {/* Find More Button */}
            <div class="mt-6">

              <Link to="/webdevelopment" class="inline-block px-6 py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-green-400 rounded-full">Find more</Link>
            </div>
            <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
          </div>


        </div>
        <div className="grid grid-cols-1 gap-10 mx-auto mt-12 lg:max-w-5xl lg:grid-cols-2 lg:gap-16 justify-center">






          <div className="md:max-w-[700px] mx-auto">

            <div className="relative">
              <div className="relative flex justify-center items-center">
                <div className="block items-center justify-center">
                  <img className="object-cover"
                    style={{ height: '70%', width: '70%' }}
                    src="./services/dm.png" alt="" />
                </div>
              </div>
            </div>
            <div></div>
            <p class="mt-6 text-xl font-semibold">
              <div class="text-black">  Digital Marketing</div>
            </p>
            <div class="px-5 sm:px-0">
              <p class="mt-4 text-justify text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 max-w-full sm:max-w-400  lg:max-w-2xl">
                As a creative digital marketing agency, Liro Studios offers comprehensive digital marketing services, including SEO (Search Engine Optimization), social media management, and strategic content creation. Our specialists leverage advanced tools such as Google Analytics, Ahrefs, SEMrush, and Moz to elevate your online presence, drive meaningful engagement, and achieve your marketing objectives. We also excel in crowdfunding to support your pioneering projects.              </p>

            </div>
            <br />

            {/* Find More Button */}
            <div class="mt-5">

              <Link to="/webdevelopment" class="inline-block px-6 py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-green-400 rounded-full">Find more</Link>
            </div>
            <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
          </div>








          <div className="md:max-w-[700px] mx-auto">

            <div className="relative">
              <div className="relative flex justify-center items-center">
                <div className="block items-center justify-center">
                  <img className="object-cover"
                    style={{ height: '70%', width: '70%' }}
                    src="./services/multimedia.png" alt="" />
                </div>
              </div>
            </div>
            <div></div>
            <p class="mt-6 text-xl font-semibold">
              <div class="text-black">Multimedia Creations</div>
            </p>
            <div class="px-5 sm:px-0">
              <p class="mt-4 text-justify text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 max-w-full sm:max-w-400  lg:max-w-2xl">
                At Liro Studios, we bring imagination to life with top-tier multimedia content.
                Our expertise spans visual effects, 3D animation, and professional studio editing, using cutting-edge tools
                such as Autodesk Maya, Houdini, Blender, Avid Media Composer, DaVinci Resolve, and Pro Tools. Our highly
                skilled team is committed to delivering captivating content that deeply resonates with your audience across
                various platforms, enhancing your brand’s reach and impact.
              </p>

            </div>
            <br />

            {/* Find More Button */}
            <div class="mt-12 ">

              <Link to="/webdevelopment" class="inline-block px-6 py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-green-400 rounded-full">Find more</Link>
            </div>
            <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
          </div>




        </div>
      </div>
    </section>

  )
}

export default Services