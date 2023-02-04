import React from 'react'

const HowToEnroll = () => {
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
                        কোর্সে কিভাবে ভর্তি হবো ?
                    </a>
                </div>
                <p className="text-base text-green-700 md:text-lg text-justify">
                    কোর্সে ভর্তি হওয়ার জন্য তোমাকে anamulislamshamim117@gmail.com এ ইমেইল করে নিশ্চিত করতে হবে তুমি ভর্তি হতে ইচ্ছুক। ইমেইল এর subject: Application For Piscine Preparation Course ।
                    ইমেইলের body তে তোমার সংক্ষিপ্ত পরিচয়, তুমি কেন  এই কোর্সে ভর্তি হতে চাও? এই কোর্স থেকে তোমার আখাঙ্কা কি? তুমি জার্মানি না যাওয়া পযর্ন্ত টানা লেগে থাকতে পারবে এমন commitment!
                    আবারও বলছি, আমি তোমায় কিছুই করে দিবো না। আমি শুধু তোমার অভিবাবকের মতো তোমার পিছনে ছায়ার মতো থাকবো। তোমাকে দিক-নির্দেশনা দিবো। ইনশাল্লাহ তুমি সফল হবে।
                    তুমি নিজে করবে, কারন আমি কাজে স্বচ্ছতা রাখতে চাই।
                    ইমেইল এ তোমাকে Google Meet এর লিংক দেওয়া হবে। তোমার কোনো প্রশ্ন থাকলে তুমি তখন জিজ্ঞাসা করতে পারবে।
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

export default HowToEnroll