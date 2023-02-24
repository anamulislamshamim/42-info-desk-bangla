import React from 'react'

const AdditionalBenifities = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            {/* <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
          20 Nov 2020
        </p> */}
            <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                <div className="mb-4">
                    <a
                        href="/"
                        aria-label="Article"
                        className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-white transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
                    >
                        অতিরিক্ত কিছু লাভ ?
                    </a>
                </div>
                <p className="text-base text-green-700 md:text-lg text-justify">
                    এই Blog এ আমি তোমাদের আর কিছু সুবিধার কথা বলবো যা তোমরা 42 তে পড়লে পাবে। আগেই বলেছিলাম, 42 প্রোগ্রামিং স্কুল সর্ব মোট ২৪ টি দেশে তাদের কার্যক্রম পরিচালনা করছে।
                    ভালো খরব এই যে, তুমি যদি একবার Piscine PASS করো তখন তুমি 42 স্টুডেন্টশিপ পেয়ে যাবে!
                    তখন তুমি 42 যেকোনো ব্রাঞ্চ মানে <span className='text-red-500'>যে কোনো দেশে যেতে</span> পারবে ( আমেরিকা, ফ্রাঞ্চ, তরুস্ক, জাপান ইত্যাদি )।
                    42 তোমাকে <span className='text-red-500'>Sponshorship</span> দিবে!
                    জার্মান কোনো ইউনিভার্সিটিতে পড়তে হলে <span className='text-white'>এক বছর বাংলাদেশে জার্মান অনুমোদিত ইউনিভার্সিটিতে পড়তে হবে</span>।
                    <span className='text-red-500'> তোমাকে IELTS এ ৬.৫ অথবা জার্মান B1 লেবেল কমপ্লিট করতে হবে। </span>
                    কিন্তু তুমি যদি 42 প্রোগ্রামিং ইউনিভার্সিটিতে পড়ার সুযোগ পাও তাহলে তোমাকে <span className='text-red-500'>জার্মান ভাষা শিখতে হবে না</span>। <span className='text-white'>
                        এক বছর ইউনিভার্সিটিতে পড়তে হবে না</span>। এতে তোমার <span className='text-red-500'>৩ লক্ষ</span> টাকার মতো বাঁচবে!
                    কারন, জার্মান ভাষা শিখতে ১ লক্ষ ২০ হাজার টাকার বেশি লাগবে। এক বছর ইউনিভার্সিটিতে পড়তে ২ লক্ষ টাকার মতো লাগবে যদি ড্যাফোডিল, ব্র্যাক, আসানউল্লাতে পড়ো!
                    <p>
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
                    </p>
                </p>
            </div>
            <div className="mb-10 sm:text-center">
                <a href="/" aria-label="Author" className="inline-block mb-1">
                    <img
                        alt="avatar"
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                </a>
                <div>
                    <a
                        href="/"
                        aria-label="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                        Shamim
                    </a>
                    <p className="text-sm font-medium leading-4 text-red-600">Student of 42 Wolfburg, Berlin, Germany<br />From Bangladesh</p>
                </div>
            </div>
            <div className="sm:text-center">
                <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                    Read more
                </a>
            </div>
        </div>
    );
};

export default AdditionalBenifities