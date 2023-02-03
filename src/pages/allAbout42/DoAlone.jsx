import React from 'react'

const DoAlone = () => {
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
                        আমি কি একা Admit হতে পারবো ?
                    </a>
                </div>
                <p className="text-base text-green-700 md:text-lg text-justify">
                    একটা silly প্রশ্ন, ভাইয়া আমি কি একা একা admit হতে পারবো?
                    উত্তর বেপারটা অনেক কঠিন হলেও একাই admit হওয়া সম্ভব। কারণ, আমি নিজেই তো একা admit হয়েছিলাম। কিন্তু একটা বিষয় আছে, আমার ৩ বছরের কোডিং দক্ষতা ছিল।
                    আমি 42 তে এডমিট হওয়ার আগেই একজন Web  Developer ছিলাম। এখন তুমি এই ব্লগটা যে ওয়েবসাইটে পড়তেছো সেই <span className='text-red-500'>"42 Info Desk Bangla"</span> আমার নিজের হাতে বানানো!
                    আমার <span className='text-white'>Full Stack Web Development</span> এবং <span className='text-white'>Cyber Security</span> উপর প্রফেশনাল সার্টিফিকেশন ছিল।
                    আমি ২ টা কোম্পানি থেকে জব অফার ও পাইছিলাম। বুঝতেই পারতেছো আমি মোটামুটি ভালো একজন প্রোগ্রামার ছিলাম।
                    তোমার যদি এমন কোডিং স্কিল থাকে তাহলে তুমি একাই পারবে। আর যদি না থাকে তাহলে তো আমি আছিই!
                    হয়তো কিছু টাকা যাবে কিন্তু একটা ভালো ফলাফল আশা করতে পারো।
                    তুমি কখনো হাতি কে গাড়িতে তুলতে দেখছো? দেখবা, হাতির মালিক হাতিকে পিছন থেকে ধাক্কা দেয়! আচ্ছা, কখনো ভেবে দেখছো কেন ধাক্কা দেয় ? 
                    কারণ, হাতির মালিক যখন হাতিকে ধাক্কা দেয় তখন হাতি মনে করে পিছন থেকে তাকে ধাক্কা দেওয়ার মতো কেউ একজন আছে।  
                    এতে হাতির মনোবল বেড়ে যায় আর সে একাই গাড়িতে উঠে যায়। ঠিক তেমনি আমি তোমার পিছনে থাকবো। তোমায় গাইড করবো। যেখানে পারব না হেল্প করবো। 
                    আমি কিছুই করে দিবো না।  আমি শুধু তোমায় গাইড করে একটা যোগ্য candidate বানিয়ে দিবো।
                    তুমি তোমার নিজের যোগ্যতায় চান্স পাবা ইনশাল্লাহ।
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


export default DoAlone