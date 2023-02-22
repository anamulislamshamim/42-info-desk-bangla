import React from 'react'
import Important from './Important';

const Requirements = () => {
    return (
        <>
            <div className="relative" style={{ "z-index": "0", "marginBottom": "100px" }}>
                <img
                    src="campus_edit.png"
                    className="absolute inset-0 bg-cover w-full h-full img-fluid"
                    alt="42 campus at night"
                />
                <div className="relative bg-black bg-opacity-75">
                    <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-4/12">
                                <div>
                                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                        তোমাকে Admission এর জন্য নিচে উল্লেখিত বিষয় গুলো থাকলেই হবে!{' '}
                                        {/* <span className="text-teal-accent-400">lazy dog</span> */}
                                    </h2>
                                    <div>
                                        <p className='text-orange-500 font-semibold'>No IELTS Certificate needed</p>
                                        <p className='text-orange-500 font-semibold'>No German Language Certificate needed</p>
                                        <p className='text-orange-500 font-semibold'>No Tution fee needed</p>
                                        <p className='text-orange-500 font-semibold'>40 &gt; Your Age &gt; 18</p>
                                        <p className='text-orange-500 font-semibold'>No need to complete 1y University</p>
                                        <p className='text-orange-500 font-semibold'>No need to show school, college Certificate</p>
                                        <p className='text-orange-500 font-semibold'>No CSE background needed</p>
                                        <p className='text-green-500 font-semibold'>অবশ্যই Programming শেখার প্রতি আগ্রহ থাকতে হবে।</p>
                                        <p className='text-green-500 font-semibold'>অবশ্যই অবশ্যই English এ কথা বলতে হবে। তবে IELTS প্রয়োজন নাই।</p>
                                    </div>
                                    <a
                                    href="/course"
                                    aria-label=""
                                    className="inline-flex mt-5 items-center font-semibold tracking-wider transition-colors duration-200 text-white bg-blue-600 hover:text-red-500 p-2 rounded"
                                >
                                    APPLY NOW
                                    <svg
                                        className="inline-block w-3 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                    </svg>
                                </a>
                                </div>
                            </div>
                            <div className="w-full max-w-xl xl:px-8 xl:w-8/12">
                                <iframe id="0_youtube" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    title="DON’T PANIC: Coding aboard the 42 Wolfsburg/Berlin LearningSpaceShip | Full Documentary Film (2022)"
                                    width="100%" height="574"
                                    src="https://www.youtube.com/embed/jZgaAJGp9oo"
                                    data-gtm-yt-inspected-6="true">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Important />
        </>
    );
};

export default Requirements