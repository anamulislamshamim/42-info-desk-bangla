import React from 'react'

const WhatIsPiscine = () => {
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
                        Piscine কী ?
                    </a>
                </div>
                <p className="text-base text-green-700 md:text-lg text-justify">
                    Piscine <span className='text-red-500'>4 সপ্তাহের</span> একটা কোডিং বুটক্যাম্প। <span className='text-red-500'>Piscine শব্দটি একটা ফরাসি শব্দ। 
                    এর অর্থ সুইমিং পুলে সাঁতার কাঁটা !</span> সাঁতার শিখতে হলে যেমন আমাদের নাকানিচুবানি খেতে হয় Piscine ঠিক তেমনি।
                    এই একমাস তোমায় প্রতিদিন গড়ে <span className='text-red-500'>10-14 ঘন্টা</span> কোডিং করতে হবে। মানে তোমার রাত-দিন এক করে কোডিং করতে হবে।
                    Piscine কেমন হতে পারে এমন ধারণা পেতে চাইলে তুমি YouTube এ "coding girl"  নাম একটা Channel আছে। মেয়ে টা রাশিয়ান। 
                    এখন রাশিয়ার সব চেয়ে বড় IT কোম্পানি অথবা গুগল এর রাশিয়ান শাখাতে Software Engineer হিসাবে জব করতেছে। 
                    ঐ Channel এ অনেক কিছু জানতে পারবা।
                    Piscine কেমন হয়। 4 টা প্রজেক্ট 4 সপ্তাহে কমপ্লিট করতে হবে। <span className='text-red-500'>Piscine কিন্তু মোটেও সহজ না! কারন, 
                    পুরো Piscine টাই C programming দিয়ে হবে।</span> C Programming কিছুটা কঠিন।
                    তবে চেষ্টা করলে আর Guide করার মতো কেউ থাকলে কোনো টেনশন নাই। সে জন্য তো আমি আছিই!
                    একদম জিরো থেকে কোডিং শিখে 4 টা প্রজেক্ট কমপ্লিট করা, টীম মেম্বারদের সাথে English এ কথা বলা, নিজেদের ভিতর সমন্বয় করে প্রজেক্ট কমপ্লিট করা কিন্তু মোটেও সহজ কথা না।
                    <span className='text-yellow-500'> সে জন্যই আমি শুরু করতে যাচ্ছি Piscine Preparation নামে একটা কোর্স। 
                    এই কোর্স তোমাদের কে প্রোগ্রামিং ( C programming ) বেসিক শেখানো হবে। তারপর Piscine মতো ১ মাসের একটা কোর্স করানো হবে। কোর্স চলার মধ্যেই এপ্লিকেশন করে ফেলবো।
                    এক কথায়, Application, Game, Piscine থেকে জার্মানি আসা পর্যন্ত সব কিছুতে হেল্প করা হবে। আমার মূল উদ্দেশ্য 42 Bangladesh Student Community গঠন করা। 
                    আশা করি, একদিন তোমায় 42 পরিবারে দেখতে পাবো।</span>
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

export default WhatIsPiscine