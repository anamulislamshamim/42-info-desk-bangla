import React from 'react'

const TotalCost = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className='text-center text-red-500 pb-20' style={{ "fontSize": "30px" }}>Calculate Total Cost</h1>
            <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
                <div className="lg:py-6 lg:pr-16">
                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                    <svg
                                        className="w-4 text-yellow-600"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <line
                                            fill="none"
                                            strokeMiterlimit="10"
                                            x1="12"
                                            y1="2"
                                            x2="12"
                                            y2="22"
                                        />
                                        <polyline
                                            fill="none"
                                            strokeMiterlimit="10"
                                            points="19,15 12,22 5,15"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                        </div>
                        <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold text-red-500">1 নম্বর খরচ: <span className='text-white'>Passport + Police Clearance !</span></p>
                            <p className="text-white text-justify">
                                Passport + Police Clearance এর জন্য সর্বোচ্চ ১৫ হাজার টাকার মতো লাগবে।
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                    <svg
                                        className="w-4 text-yellow-600"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <line
                                            fill="none"
                                            strokeMiterlimit="10"
                                            x1="12"
                                            y1="2"
                                            x2="12"
                                            y2="22"
                                        />
                                        <polyline
                                            fill="none"
                                            strokeMiterlimit="10"
                                            points="19,15 12,22 5,15"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                        </div>
                        <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold text-red-500">2 নম্বর খরচ: <span className='text-white'>Visa Appointment + Visa !</span></p>
                            <p className="text-white text-justify">
                                Visa Appointment + Visa জন্য সর্বোচ্চ ১০-১৫ হাজার টাকা।
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                    <svg
                                        className="w-4 text-yellow-600"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <line
                                            fill="none"
                                            strokeMiterlimit="10"
                                            x1="12"
                                            y1="2"
                                            x2="12"
                                            y2="22"
                                        />
                                        <polyline
                                            fill="none"
                                            strokeMiterlimit="10"
                                            points="19,15 12,22 5,15"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                        </div>
                        <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold text-red-500">3 নম্বর খরচ: <span className='text-white'>Plane ভাড়া !</span></p>
                            <p className="text-white text-justify">
                                Plane ভাড়া ৮০ হাজার থেকে ১ লক্ষ টাকার মতো হতে পারে।
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                    <svg
                                        className="w-4 text-yellow-600"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <line
                                            fill="none"
                                            strokeMiterlimit="10"
                                            x1="12"
                                            y1="2"
                                            x2="12"
                                            y2="22"
                                        />
                                        <polyline
                                            fill="none"
                                            strokeMiterlimit="10"
                                            points="19,15 12,22 5,15"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                        </div>
                        <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold text-red-500">4 নম্বর খরচ: <span className='text-white'>Security Money for Student Hotel Rent !</span></p>
                            <p className="text-white text-justify">
                                স্টুডেন্ট হোটেল ( Accommodation ) ভাড়া নিতে হলে তোমাকে ২ মাসের টাকা অগ্রিম দিতে হবে।
                                ক্ষেত্র বিশেষ ১০০০-১৫০০ ইউরো মতো যা টাকায় প্রায় ১ লক্ষ থেকে ১ লক্ষ ৫০ হারার টাকার মতো।
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                    <svg
                                        className="w-4 text-yellow-600"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <line
                                            fill="none"
                                            strokeMiterlimit="10"
                                            x1="12"
                                            y1="2"
                                            x2="12"
                                            y2="22"
                                        />
                                        <polyline
                                            fill="none"
                                            strokeMiterlimit="10"
                                            points="19,15 12,22 5,15"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                        </div>
                        <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold text-red-500">5 নম্বর খরচ: <span className='text-white'>৩ মাস চলার মতো টাকা !</span></p>
                            <p className="text-white text-justify">
                                Piscine শেষ হলেই যে সাথে সাথে ইন্টার্নশীপ পেয়ে যাবে এমনতো নাও হতে পারে! তাই নূন্যতম ৩ মাস চলার মতো টাকা তোমার সাথে থাকা উচিত। ২ লক্ষ টাকার মতো রাখলেই হবে।
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                    <svg
                                        className="w-4 text-yellow-600"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <line
                                            fill="none"
                                            strokeMiterlimit="10"
                                            x1="12"
                                            y1="2"
                                            x2="12"
                                            y2="22"
                                        />
                                        <polyline
                                            fill="none"
                                            strokeMiterlimit="10"
                                            points="19,15 12,22 5,15"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                        </div>
                        <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold text-red-500">6 নম্বর খরচ: <span className='text-white'>Others Cost !</span></p>
                            <p className="text-white text-justify">
                                এক দেশ থেকে অন্য দেশে গেলে আবহাওয়ার কারণে তোমাকে নতুন নতুন অনেক কিছু কিনতে হবে। যেমনঃ কিছু কাপড়-চোপড়, লেখা-পড়ার জিনিস-পত্র ইত্যাদি। তাই অতিরিক্ত আরও ১ লক্ষ
                                টাকার মতো হিসাবের বাহিরে ধরে নিবা।
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                    <svg
                                        className="w-4 text-yellow-600"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <line
                                            fill="none"
                                            strokeMiterlimit="10"
                                            x1="12"
                                            y1="2"
                                            x2="12"
                                            y2="22"
                                        />
                                        <polyline
                                            fill="none"
                                            strokeMiterlimit="10"
                                            points="19,15 12,22 5,15"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                        </div>
                        <div className="pt-1 pb-8">
                            <p className="mb-2 text-lg font-bold text-red-500">7 নম্বর খরচ: <span className='text-white'>Piscine Preparation Course Cost !</span></p>
                            <p className="text-white text-justify">
                                এই কোর্স এর জন্য তোমাকে ৩৫০০ ইউরো দিতে হবে। বিস্তারিত জানতে course পেজ এ দেখতে পারো।
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                                    <svg
                                        className="w-6 text-green-600"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <polyline
                                            fill="none"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit="10"
                                            points="6,12 10,16 18,8"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="pt-1">
                            <p className="mb-2 text-lg font-bold text-green-500">সর্বমোট খরচ: <span className='text-white'>৭-১০ লক্ষ টাকা !</span></p>
                            <p className='text-green-500 text-justify'>
                                খরচ কিছুটা কম-বেশি হতে পারে। আমি এখানে সর্বোচ্চ খরচ দেখিয়েছি। যদি কিছুটা কম হয় তাহলে তো ভালোই।
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <iframe id="0_youtube" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        title="DON’T PANIC: Coding aboard the 42 Wolfsburg/Berlin LearningSpaceShip | Full Documentary Film (2022)"
                        width="100%" height="574"
                        src="https://www.youtube.com/embed/SDCDaJG5QiM?autoplay=0&amp;enablejsapi=1&amp;disableKb=1&amp;playsinline=0&amp;start=0&amp;controls=0&amp;cc_load_policy=0&amp;hl=en&amp;modestbranding=1&amp;rel=0&amp;html5=1&amp;iv_load_policy=3&amp;origin=https%3A%2F%2F42wolfsburg.de&amp;widgetid=1"
                        data-gtm-yt-inspected-6="true">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default TotalCost