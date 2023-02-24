import React from 'react'

const CostAndWork = () => {
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
                        Cost and Income
                    </a>
                </div>
                <p className="text-base text-green-700 md:text-lg text-justify">
                    এই Blog Post এ তোমাদের কে খরচ এবং ইনকাম এর বেপারে কিছু ধারণা দিবো। এক দেশ থেকে অন্য দেশে আসার আগে খরচ আর ইনকাম এর বেপারে কিছু ধারণা থাকা উচিত।
                    তোমরা জেনে থাকবা, জার্মানি ইউরোপের সব চেয়ে উন্নত Country। কিন্তু জার্মানিতে এখন <span className='text-red-500'>২ লাখের</span> বেশি IT জব আছে।
                    ২০৩০ সালের ভিতর জার্মানির ৮.৫ মিলিয়ন (৮৫ লক্ষ) প্রোগ্রামার লাগবে!
                    তার মানে তোমার দক্ষতা থাকলেই তুমি ভালো স্যালারিতে জব পেয়ে যাবা।
                    দুশ্চিন্তার কিছু নেই। তুমি যদি Piscine পাস করো তাহলে মূল Syllabus শুরু করতে পারবা। মানে Cybersecurity, AI, Software Engineering, Drone Programming, Game Development,
                    Self Driving Technology ইত্যাদি নিয়ে পড়তে পারবা।
                    এই Syllabus শেষ করতে 6 মাস থেকে 2 বছর সময় লাগতে পারে। এটা তোমার এবিলিটির উপর নির্ভর করবে। আগেই বলেছিলাম 42 লেখাপড়া পুরোটাই Industrial Projects Based।
                    তার মানে তুমি যে প্রজেক্ট গুলা করবে সেগুলো Resume তে Add করে ইন্টার্নশীপ এর জন্য আবেদন করতে পারবে। ইন্টার্নশীপ কিন্তু একটা জব।
                    ইন্টার্নশীপ এর স্যালারি <span className='text-red-500'>১২০০-২৫০০</span> ইউরো পযর্ন্ত হতে পারে।
                    আমি ইন্টার্নশীপ এর স্যালারি <span className='text-red-500'>2800</span> ইউরো ( <span className='text-red-500'>3 লক্ষ</span> ) পযর্ন্ত দেখেছিলাম। আমি Apply করছিলাম কিন্তু রিজেক্ট হইছি।
                    ইন্টার্নশিপ শেষে তুমি চাইলে তোমার লেখাপড়া চালিয়ে যেতে পারো অথবা জব Continue করতে পারো।
                    <img src="internship.jpg" alt="internship" style={{ "margin": "20px 0" }} />
                    উপরে একটা ইন্টার্নশীপ জব এর স্ক্রিনশট দিলাম। স্যালারি ২ লক্ষ ২০ হাজার টাকার বেশি। কাজেই তুমি যদি Piscine কমপ্লিট করতে পারো তাহলে এর থেকে বেশি স্যালারিতে জব করতে পারবা।
                    ধরে নিবে, জার্মানি যাওয়ার নূন্যতম ৩ মাস তোমায় নিজের টাকায় চলতে হবে। মোটামুটি ৬০০ ইউরো হলে ১ মাস আরামছে চলে যাবে।
                    সে হিসেবে ৩ মাস এ ২ লক্ষ আর নানা কিছু নিয়ে ধরে আরো ১ লক্ষ টাকা।
                    Total ৩ লক্ষ টাকার মতো তোমায় অবশ্যই সাথে নিতে হবে। বাকি টাকা প্লেন Plane ভাড়া, পাসপোর্ট আর Preparation এর জন্য খরচ।
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

export default CostAndWork