import React from 'react'

const WhoAmI = () => {
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
                        আমি কে ?
                    </a>
                </div>
                <p className="text-base text-green-700 md:text-lg text-justify">
                    আসসালামু আলাইকুম, আমি শামীম। আমি বর্তমানে ৪২  ইউনিভার্সিটিতে পড়ি। আমি বাংলাদেশের এক মাত্র স্টুডেন্ট যে এই ইউনিভার্সিটিতে পড়ার সুযোগ পাইছি।
                    আমার আগে বাংলাদেশের কেউ এই ইউনিভার্সিটিতে পড়ার সুযোগ  পায়  নাই। কারন, এই ইউনিভার্সিটি ২০২১ সাল থেকে জার্মানিতে যাত্রা। আসলে আমিও জানতাম না।
                    এই ইউনিভার্সিটিতে Admission নেওয়ার আগেই আমি  একজন  ওয়েব ডেভেলপার ছিলাম। আমার Web Development এবং Cyber Security professional সার্টিফিকেট ছিলো।
                    তাই আমি জার্মানির বিভিন্ন কোম্পানিতে জবের জন্য Apply করতেছিলাম। তখন Volkswagen এর LinkedIn প্রোফাইলে প্রথম ৪২ প্রোগ্রামিং ইউনিভার্সিটি সর্ম্পকে জানতে পারি।
                    তার পর টানা ৬ মাসের চেষ্টায় আমি Admission নিতে সক্ষম হই। এ জন্যই তোমরা  YouTube অথবা Facebook এ কোনো গ্রুপে তোমরা ৪২ প্রোগ্রামিং ইউনিভার্সিটির কথা জানতে পারবে না।
                    তোমার জন্যেই আমি এই ওয়েবসাইট + ৪২ প্রোগ্রামিং ইউনিভার্সিটি , জার্মানি ফেইসবুক পেজ খুলছি। ইনশাল্লাহ YouTube চ্যানেল খুলার কাজ চলতেছে। আমার উদ্দেশ্য হচ্ছে তোমরা যেন এজেন্সির ফাঁদে পা না দেও।
                    তোমার স্বপ্নটা যেন নষ্ট হয়ে না যায়! আমার এটা কিন্তু কোনো এজেন্সী না। আমি নিজেই personally তোমায় হেল্প করবো যাতে তোমার Admission হয়। এই একটা সুযোগ! এখন একদম শুরুর দিকে।
                    অনেকেই জানে না। তুমি এই সুযোগটা কাজে পারো। IETLS, German Language লাগবে না। শুধু English এ কথা বলার মতো Ability থাকলেই হবে অথবা কথা বলতে পারবে এমন আত্নবিশ্বাস থাকলেই হবে। 
                    তোমায় IELTS সার্টিফিকেট দেখতে হবে না!
                    তোমায় ১ বছর ইউনিভার্সিটিতে পড়তে হবে না! তবে ১ বছর পর প্রতিযোগিতা বেড়ে যাবে। তখন চাইলেও যেতে পারবে না। আশা করি তোমার সাথে উনিভার্সিটিতে দেখা হবে।
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


export default WhoAmI