import React from 'react'
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="relative" style={{ "z-index": "0" }}>
      <img
        src="https://42berlin.de/wp-content/uploads/2021/08/379-HteDef-1024x682.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-black bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-4/12">
              <div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Start Your programming Journey in Germany,
                  with 42 programming University!{' '}
                  {/* <span className="text-teal-accent-400">lazy dog</span> */}
                </h2>
                <div>
                  <p className='text-orange-500 font-semibold'>No IELTS Certificate</p>
                  <p className='text-orange-500 font-semibold'>No German Language Certificate</p>
                  <p className='text-orange-500 font-semibold'>No Tution fee</p>
                  <p className='text-orange-500 font-semibold'>Age &gt; 18</p>
                </div>
                <Link
                  to="/course"
                  aria-label=""
                  className="inline-flex mt-5 items-center font-semibold tracking-wider transition-colors duration-200 text-white bg-green-600 hover:text-red-500 p-2 rounded"
                >
                  Admission Preparaton Course
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-8/12 bg-green-500">
              <iframe id="0_youtube" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                title="DON’T PANIC: Coding aboard the 42 Wolfsburg/Berlin LearningSpaceShip | Full Documentary Film (2022)"
                width="100%" height="574"
                src="https://www.youtube.com/embed/8FjrzYKTkf0?autoplay=0&amp;enablejsapi=1&amp;disableKb=1&amp;playsinline=0&amp;start=0&amp;controls=0&amp;cc_load_policy=0&amp;hl=en&amp;modestbranding=1&amp;rel=0&amp;html5=1&amp;iv_load_policy=3&amp;origin=https%3A%2F%2F42wolfsburg.de&amp;widgetid=1"
                data-gtm-yt-inspected-6="true">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner