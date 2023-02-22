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
                    তোমাদের কাছে একটা গুরুত্বপূর্ণ বিষয় হচ্ছে Block Account! Piscine ২ ধরনের হয়। <span className='text-red-500'>১. On-site ২. On-line</span> । 
                    তবে February 27, 2023 থেকে শুধু Onsite Piscine করতে পারবে।
                    এতে তোমার মনোবল থাকবে অন্যরকম। On-site এ করার জন্য আগে থেকে VISA APPOINMENT এর জন্য APPLY করবা। 
                    এটা <span className='text-red-500'>Tranning Visa</span> হবে।
                    So, বুঝতেই পারতেছো এই জন্য Block Account লাগবে না। তবে তোমায় অব্যশই PROOF করতে হবে যে TRAINING যতদিন চলবে ততদিন তুমি নিজের খরচ বহন করতে পারবে।
                    <span className='text-white'> যেহেতু Piscine টা ১ মাসের, তাই হয়তো ২ লক্ষ টাকার মতো দেখাতে হবে।</span> প্রশ্ন হলো Piscine এ পাস করলে কি হবে? 
                    যদি পাস করো তাহলে তো একটা সার্টিফিকেট পাবা।
                    তখন তুমি তোমার <span className='text-red-500'>ভিসার মেয়াদ 4 বছর পযর্ন্ত বাড়াতে পারবা</span>। যদি Piscine এ Fail করো তাহলে 3 মাসের ভিতর দেশে চলে আসতে হবে!
                    Piscine এর সময় তুমি কোন কাজ করতে পারবে না। তবে Piscine শেষ হলে তুমি পার্ট-টাইম জব করতে পারবে। 
                    যেহেতু, 42 গতানুগতিক ইউনিভার্সিটির মতো না, তাই তুমি তোমার সুবিধা মতো ক্যাম্পাছে যেতে পারবে। ক্যাম্পাস 24/7 খোলা থাকে। তোমার সাথে কার্ড থাকলেই ঢুকতে পারবে। 
                    এর মানে তুমি পার্ট-টাইম জব করার জন্য যথেষ্ট সময় পাবে যা সাধারণত ইউনিভার্সিটিতে পাওয়া যায় না।
                    এই জন্য বলছিলাম 7-10 লক্ষ টাকা Ready করে রাখবা।
                    আমার কোর্সটা করলে বিস্তারিত আরও অনেক তথ্য দেওয়া হবে।
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