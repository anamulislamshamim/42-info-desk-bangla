import React from 'react'

const OverPrice = () => {
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
                        ভাইয়া, কোর্সের দামটা বেশি মনে হচ্ছে ?
                    </a>
                </div>
                <p className="text-base text-green-700 md:text-lg text-justify">
                    আমি যেহেতু একজন বাংলাদেশী ছেলে এবং একসময় আমিও তোমার জায়গায় ছিলাম তাই কোর্সের দামটা বেশি মনে হওয়াটা অস্বাভাবিক কিছু না। যাইহোক, আমি তোমার সাথে কিছু কথা বলতে চাই।
                    একবার ভাবতো কোনো <span className='text-red-500'>এজেন্সী মাধ্যমে</span> জার্মানি, ফ্রান্স, ব্রিটেন, কানাডা, আমেরিকা অথবা অস্ট্রেলিয়া গেলে কত টাকা নিতো? নূন্যতম <span className='text-red-500'>১৫-২০ লক্ষ</span> টাকা!
                    অনেক সময় দেখা যায় তারা মিথ্যা তথ্য দিয়ে তোমাদের কে বোকা বানায় তাদের স্বার্থের জন্য। তাদের থেকে কোনো তথ্য চাইলে তারা সঠিক তথ্য দেয় না।
                    অথচ আমি এই ওয়েবসাইটে তোমাদের প্রয়োজনীয় সব তথ্যই দিয়েছি। এমনকি আমি এটা পযর্ন্ত বলেছি যে তুমি চাইলে একা করতে পারো তবে সেটা না হওয়ার সম্ভাবনা <span className='text-red-500'>৯৯%</span> ।
                    <span className='text-white'> আমি একজন সফটওয়্যার ইঞ্জিনিয়ার। জার্মানিতে একটা সফটওয়্যার ইঞ্জিনিয়ার এর মাসিক বেতন ৫-৭ হাজার ইউরো। </span>
                    আমি তোমার জন্য <span className='text-red-500'>৩-৫ মাস</span> শ্রম দিবো তার বিনিময় আমি কি <span className='text-white'>১ মাসের বেতন তোমার থেকে আশা করতে পারি না </span>?
                    <span className='text-red-500'> এটা তোমার বিবেকের কাছে আমার প্রশ্ন ?</span> তারপরও যদি বলো Over Priced, 
                    তাহলে আমি বলবো ভাই তুমি একটা এজেন্সী ধরে যাও। তাদের কে ১৫-২০ লক্ষ টাকা দাও!
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

export default OverPrice