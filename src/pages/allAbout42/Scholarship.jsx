import React from 'react'

const Scholarship = () => {
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
                        Scholarship ?
                    </a>
                </div>
                <p className="text-base text-green-700 md:text-lg text-justify">
                    তোমরা  ইতোমধ্যে জানো, 42 একটা <span className='text-red-500'>Full Free</span> প্রোগ্রামিং ইউনিভার্সিটি।
                    একবার ভাবতো <span className='text-red-500'>UK, Australia, Canada</span> তে স্কলারশিপ বলতে কি বুঝায়?
                    এই সব দেশে তুমি স্কলারশিপ পেলে হয়তো 70% বা 80% টিউশন ফী দিতে হয় না বাকি 20% কিন্তু ঠিকই দিতে হবে। যাইহোক, আমাদের প্রত্যাশার তো শেষ নাই।
                    তবে তোমাদের প্রত্যাশা কিন্তু সঠিক! <span className='text-white'>মানে স্কলারশিপ ও আছে!
                    </span> কিন্তু সে ক্ষেত্রে তুমি যদি Piscine পাস করো, তারপর 3-6 মাসের ইন্টার্নশীপ শেষ করে ফুল টাইম স্কুলে মনোযোগ দেও।
                    তখন তুমি স্কলারশিপ এর জন্য আবেদন করতে পারবে। স্কলারশিপ পেলে <span className='text-red-500'>প্রতি মাসে 600 ইউরো করে পাবা</span>!
                    কিন্তু আগেই তো বলছিলাম ইন্টার্নশীপ থেকে যা ইনকাম করবা তা দিয়ে অনায়েসে ১-২ বছর চলে যাবে!
                    তবে তুমি শুধু স্কলারশিপ উপর ভরসা করে সিদ্ধান্ত নিও না। এটা করা বোকামি হবে! কারণ, স্কলারশিপ এর আগে বহু পথ পারি দিতে হবে!
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

export default Scholarship