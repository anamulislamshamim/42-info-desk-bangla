import React from 'react'

const WhoStudyAt42 = () => {
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
                        42 কাদের জন্য ?
                    </a>
                </div>
                <p className="text-base text-green-700 md:text-lg text-justify">
                    এক কথায়, ১৮ থেকে  বড় এবং ৪০ থেকে ছোট  সবার জন্য! তবে আমি তাদের পরামর্শ দিতে চাই, যারা <span className='text-red-500'>Diploma, Private  ইউনিভার্সিটিতে</span> পড় অথবা যারা
                    Private University or Diploma তে <span className='text-red-500'>Admission</span> নেওয়ার কথা ভাবতেছো!
                    প্রশ্ন হচ্ছে  কেন? কারণ, এক্ষেত্রে তোমাকে ন্যূনতম <span className='text-red-500'>৫-৭ লক্ষ টাকা ব্যায় করার ability থাকতে হবে</span>। যদিও টাকাটা একসাথে লাগবে না।
                    তাও আগে থেকেই খরচের কথা মাথায় রাখা উচিৎ!
                    বাংলাদেশে <span className='text-red-500'>১০-১২ লক্ষ</span> টাকা ব্যায় করে <span className='text-red-500'>Daffodil, Ashanullah, Brac , North - South </span>
                    এ পড়ে শিক্ষিত বেকার না হয়ে, বাবা-মার কষ্টে উপার্জিত টাকা সঠিক জায়গায় ব্যায় করে একটা ভালো career
                    শুরু করে <span className='text-white'>বাবা-মায়ের মুখে হাসি ফুটানোর চেয়ে খুশির</span> কি হতে পারে আমার জানা নেই? প্রশ্ন হচ্ছে, যারা সরকারি ইউনিভার্সিটিতে পড়ে?
                    আসলে সরকারি university পড়া ম্যাক্সিমাম স্টুডেন্টরাই গরিব ফ্যামিলির  হয়।
                    তবে, যদি তোমার <span className='text-red-500'>৭-১০ লক্ষ </span>
                    টাকা ব্যায় করার সচ্ছলতা থাকে তাহলে আমার পরামর্শ কেন সুযোগ হাত ছাড়া করবে? টাকা কোথায় কিভাবে লাগবে সেটা আমি <span className='text-white'>Total Cost </span>
                    পেজে  বিস্তারিত দেখিয়েছি।
                    So, তুমি যদি English এ টুকিটাকি কথা বলতে পারো অথবা পারবে এমন confident থাকে ( <span className='text-red-500'>IELTS সার্টিফিকেট লাগবে না</span> ),
                    তোমার ফ্যামিলি যদি ৭-১০ লক্ষ টাকা ব্যায় করার মতো স্বচ্ছলতা থাকে এবং
                    তুমি যদি প্রোগ্রামিং শিখতে আগ্রহী হও তাহলে এই সুযোগটি তোমার জন্য! <span className='text-white'>তোমার SSC, HSC রেজাল্ট অথবা লেখা-পড়ায় গ্যাপ অথবা তুমি এখন কোন সাবজেক্ট নিয়ে
                        পড়তেছো সেটা কোনো বিষয় না। তোমার বয়স যদি ১৮ বেশি হয়,
                        তুমি যদি ইংলিশে টুকিটাকি কথা বলতে পারো এবং তোমার যদি প্রোগ্রামিং শেখার প্রবল আগ্রহ থাকে তাহলেই তুমি এখানে পড়তে পারবে!</span>
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

export default WhoStudyAt42