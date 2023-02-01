import React from 'react'

const CostAndWork = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
                        Cost and Income
                    </a>
                </div>
                <p className="text-base text-green-700 md:text-lg text-justify">
                    এই Blog Post এ তোমাদের কে খরচ এবং ইনকাম এর বেপারে কিছু ধারণা দিবো। এক দেশ থেকে অন্য দেশে আসার আগে খরচ আর ইনকাম এর বেপারে কিছু ধারণা থাকা উচিত।
                    তোমরা জেনে থাকবা, জার্মানি ইউরোপের সব চেয়ে উন্নত country। কিন্তু জার্মানিতে এখন <span className='text-red-500'>১৫০০০০</span> এর বেশি IT জব আছে।
                    তার মানে তোমার দক্ষতা থাকলেই তুমি ভালো স্যালারি তে জব পেয়ে যাবা।
                    দূঃচিন্তার কিছুই নাই। Piscine কমপ্লিট করে তুমি চাইলে piscine এর প্রজেক্টস গুলা তোমার Resume তে অ্যাড করে বিভিন্ন IT কোম্পানি তে ইন্টার্ন জব এর জন্য এপলাই করতে পারবা।
                    জার্মানি তে ইন্টার্ন এর স্যালারি <span className='text-red-500'>২০০০ ইউরো</span> বেশি হয় যা বাংলাদেশী টাকায় <span className='text-red-500'>২ লক্ষ</span> টাকার বেশি !
                    <img src="internship.jpg" alt="internship" style={{ "margin": "20px 0" }} />
                    উপরে একটা ইন্টার্নশীপ জব এর স্ক্রিনশট দিলাম। স্যালারি ২ লক্ষ ২০ হাজার টাকার বেশি। কাজেই তুমি যদি piscine  কমপ্লিট করতে পারো তাহলে এর থেকে বেশি স্যালারি তে জব করতে পারবা।
                    ধরে নিবে, জার্মানি যাওয়ার নূন্যতম ৩ মাস তোমায় নিজের টাকায় চলতে হবে। মোটামুটি ৬০০ ইউরো হলে ১ মাস আরামছে চলে যাবে। 
                    সেই হিসাবে ৩ মাস এ ২ লক্ষ আর নানা কিছু নিয়ে ধরে আরো ১ লক্ষ টাকা।
                    টোটাল ৩ লক্ষ টাকার মতো তোমায়  অব্যশই সাথে নিতে হবে। বাকি টাকা প্লেন plane ভাড়া, পাসপোর্ট আর প্রিপারেশন এর জন্য খরচ।
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

export default CostAndWork