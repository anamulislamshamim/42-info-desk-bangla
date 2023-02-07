import React from 'react'

const Course = () => {
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
                        Piscine Preparation Course ?
                    </a>
                </div>
                <p className="text-base text-green-700 md:text-lg text-justify">
                    তোমাদের মধ্যে যারা মনে করো তোমাদের হেল্পের প্রয়োজন।
                    আগেও যেমনটা বলছি। Admission প্রসেসটা মোটেও EASY না!
                    তোমার মতো WORLD বিভিন্ন দেশ থেকেই ছেলে-মেয়েরা Apply করবে। কাজেই Application সঠিক ভাবে করা, Game এ ভালো করা, Piscine এ 4 টা প্রজেক্ট সফল ভাবে করা একটু জটিল।
                    তার উপর পুরো Piscine টাই C Programming দিয়ে হবে। C Programming সব চেয়ে কঠিন একটা প্রোগ্রামিং Language ।
                    তোমাদের পিছনে যদি একজন থাকে যে তোমাদের গাইড করতে পারবে, আটকে গেলে হেল্প করতে পারবে তাহলে তোমাদের চলার পথটা অনেক বেশি সহজ হবে।
                    <span className='text-white'> এই কোর্স এ তোমাদের C প্রোগ্রামিং এর বেসিক + ৫ টা অথবা প্রয়াজন হলে তার থেকে বেশি প্রজেক্ট করানো হবে। 
                    তারপর তোমাদের piscine মতো হুবহু ১ মাস ব্যাপি
                    একটা কোর্স করানো হবে যাতে বুঝতে পারো Piscine টা কেমন হতে পারে। এতে করে তোমাদের মাঝে ভয়টা দূর হয়ে যাবে। </span>
                    আরো আছে!<span className='text-red-500'> 42 তে যখন Piscine শুরু হবে তখন যদি কোথাও আটকে যাও তখনও হেল্প করা হবে</span>। 
                    এক কথায়, পুরো Application প্রসেস এবং Piscine যেন সফল ভাবে উত্তীণ হতে পারো এটাই আমার লক্ষ্য!
                    এই কোর্স কমপ্লিট করলে তুমি জার্মান ছাড়াও অন্য যেকোনো দেশে Piscine এর জন্য আবেদন করতে পারবা!
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

export default Course