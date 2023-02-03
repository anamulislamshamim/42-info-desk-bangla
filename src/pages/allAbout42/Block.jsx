import React from 'react'

const Block = () => {
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
                        Block Account ?
                    </a>
                </div>
                <p className="text-base text-green-700 md:text-lg text-justify">
                    তোমাদের কাছে একটা গুরুত্বপূর্ণ বিষয় হচ্ছে Block Account! Piscine ২ ধরনের হয়। <span className='text-red-500'>১. On-site ২. On-line</span> । আমি তোমাদের On-site টা করার জন্য বলবো।
                    এতে তোমার মনোবল থাকবে অন্যরকম। On-site এ করার জন্য আগে থেকে visa appointemt এর জন্য apply করবা।  এটা <span className='text-red-500'>Tranning Visa</span> হবে।
                    So বুঝতেই পারতেছো এই জন্য Block Account লাগবে না। তবে তোমায় অব্যশই proof করতে হবে যে tranning যতদিন চলবে ততদিন তুমি নিজের খরচ বহন করতে পারবে।
                    <span className='text-white'> যেহেতু Piscine টা ১ মাসের তাই হয়তো ২ লক্ষ টাকার মতো দেখাতে হবে।</span> প্রশ্ন হলো piscine এ পাস করলে কি হবে? যদি পাস করো তাহলে তো একটা সার্টিফিকেট পাবা।
                    তখন তুমি তোমার <span className='text-red-500'>ভিসার মেয়াদ ৪ বছর প্রজন্ত বাড়াতে পারবা</span> । যদি piscine ফেইল করো তাহলে ৩ মাসের ভিতর দেশে চলে আসতে হবে!
                    যেহেতু piscine শেষ হলে তুমি piscine এর প্রজেক্ট গুলো দিয়ে resume বানিয়ে <span className='text-white'>ইন্টার্নশীপ এর জন্য আবেদন</span> করতে পারবা। <span className='text-red-500'>কাজেই ইন্টার্নশীপ পেয়ে গেলে ৬ মাসের ইনকাম দিয়ে অনায়াসে ২
                    বছর চলে যাবে</span>। এই দুই বছর কি বসে থাকবে? নিশ্চই কোনো পার্ট টাইম জব করবা ! Online piscine করলে সুবিধা হচ্ছে বাংলাদেশে থাকা অবস্থায় করতে পারবা।
                    কিন্তু অসুবিধা হচ্ছে যখন জার্মানি ভিসার জন্য আবেদন করবা তখন প্রব্লেম হবে। কারণ, তখন তো আর piscine থাকবো না।
                    ভিসা হবে ৪ বছরের। তাই ৪ বছর থাকার মতো টাকা ব্যাংকে রাখতে হবে! তবে ভালো খবর ও আছে ! সেটা হলো যেহেতু তুমি piscine শেষ করে ফেলছো
                    তুমি চাইলে বাংলাদেশ থেকে বিভিন্ন IT কোম্পানি তে apply করতে পারো। যদি ইন্টার্নশীপ পেয়ে যাও তাহলে তো কথাই নাই!
                    জব ভিসার জন্য apply করবা ১-৩ মাসের ভিতর ভিসা পেয়ে যাবে। তবে আমি পরামর্শ দিবো On-site piscine করার জন্য।
                    এই জন্য বলছিলাম ৫-৭ লক্ষ টাকা ready করে রাখবা।
                    আমার কোর্সটা করলে বিস্তারিত আরও অনেক তথ্য শেয়ার করা হবে।
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

export default Block