import React from 'react'

const Visa = () => {
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
                        Visa ?
                    </a>
                </div>
                <p className="text-base text-green-700 md:text-lg text-justify">
                    42 VISA সাধারণত Student ভিসা ক্যাটাগরিতে পরে না। এর মানে ভিসার জন্য তোমায় <span className='text-red-500'>১-২ বছর অপেক্ষা করতে হবে না</span>।
                    তাহলে প্রশ্ন হচ্ছে কি Type এর ভিসার জন্য Apply করবো?
                    আসলে তোমরা জার্মান Embassy তে ট্রেনিং ভিসা ক্যাটেগরিতে Apply করবা।
                    তোমাদের কাছে তো 42 মেম্বারশিপ এর সার্টিফিকেট থাকবেই। দুঃচিন্তার কারণ নাই। তাও ক্ষেত্র বিশেষ সময় কম-বেশি লাগতে পারে। এটা Embassy তে এপ্লিকেশন এর সংখ্যার উপর নির্ভর করবে।
                    মোটামুটি <span className='text-red-500'>1-5</span> মাস সময় লাগতে পারে।
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


export default Visa