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
                    এক কথায়, ১৮ থেকে  বড় এবং ৪০ থেকে ছোট  সবার জন্য! তবে আমি তাদের পরামর্শ দিতে চাই, যারা <span className='text-red-500'>Diploma, Private  University</span> তে পড়েন অথবা যারা
                    Private University or Diploma তে <span className='text-red-500'>admission</span> নেওয়ার কথা ভাবতেছেন!
                    প্রশ্ন হচ্ছে  কেন? কারণ , এক্ষেত্রে আপনাকে ন্যূনতম <span className='text-red-500'>৫-৭ লক্ষ টাকা ব্যায় করার ability থাকতে হবে</span>। যদিও টাকাটা একসাথে লাগবে না। তাও আগে থেকেই খরচের কথা মাথায় রাখা উচিৎ !
                    বাংলাদেশ এ <span className='text-red-500'>১০-১২ লক্ষ</span> টাকা ব্যায় করে <span className='text-red-500'>Daffodil, Ashanullah, Brac , North - South </span> 
                    এ পড়ে শিক্ষিত বেকার না হয়ে, বাবা-মার কষ্টে উপার্জিত টাকা সঠিক জায়গায় ব্যায় করে একটা ভালো career
                    শুরু করে <span className='text-white'>বাবা-মায়ের মুখে হাসি ফুটানোর চেয়ে খুশির</span> কি হতে পারে আমার জানা নাই ? প্রশ্ন হচ্ছে , যারা সরকারি ইউনিভার্সিটি তে পড়ে? আসলে সরকারি university পড়া ম্যাক্সিমাম স্টুডেন্টরাই গরিব ফ্যামিলির  হয়। 
                    তবে, যদি আপনাদের <span className='text-red-500'>৭-১০ লক্ষ </span> 
                    টাকা ব্যায় করার সচ্ছলতা থাকে তাইলে আমার পরামর্শ কেন সুযোগ হাত ছাড়া করবেন? টাকা কোথায় কিভাবে লাগবে সেটা আমি <span className='text-blue-800'>Total Cost</span>  পেজে  বিস্তারিত দেখিয়েছি।
                    So, তুমি যদি English এ টুকিটাকি কথা বলতে পারো অথবা পারবে এমন confident থাকে ( <span className='text-red-500'>IELTS সার্টিফিকেট লাগবে না</span> ), তোমার ফ্যামিলি যদি ৭-১০ লক্ষ টাকা ব্যায় করার মতো সচ্ছলতা থাকে এবং
                    তুমি যদি প্রোগ্রামিং শিখতে আগ্রহী হও তাহলে এই সুযোগ টি তোমার জন্য! <span className='text-white'>তোমার SSC, HSC রেজাল্ট অথবা লেখাপড়ায় গ্যাপ অথবা তুমি এখন কোন সাবজেক্ট নিয়ে পড়তেছো সেটা কোনো বিষয় না। তোমার বয়স যদি ১৮ বেশি হয় , 
                    তুমি যদি ইংলিশে টুকিটাকি কথা বলতে পারো এবং তোমার যদি প্রোগ্রামিং শেখার প্রবল আগ্রহ থাকে তাহলেই তুমি এখানে পড়তে পারবে!</span>
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