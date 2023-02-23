import React, { useState } from "react";
const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded shadow-sm">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-green-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-orange-700 text-justify">{children}</p>
                </div>
            )}
        </div>
    );
};

const Faq = () => {
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-white" style={{ "minHeight": "85vh" }}>
            <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div class="flex flex-col mb-16 sm:text-center">
                    <a href="/" class="mb-6 sm:mx-auto">
                        <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                            <svg
                                class="w-10 h-10 text-red-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                    </a>
                    <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span class="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative text-green-500">দক্ষতাই শক্তি</span>
                            </span>{' '}
                        </h2>
                        <p class="text-base text-red-700 md:text-lg">
                            তোমরা "All Info" page এর শুরু থেকে শেষ পর্যন্ত অবশ্যই পড়বা। কারন, ঐ page এ আমি সব কিছু ব্লগ আকারে বিস্তারিত লিখেছি।
                        </p>
                    </div>
                </div>
                <div class="space-y-4">
                    <Item title="IELTS, German Language Certificate লাগবে না ?">
                        তোমার কোনো language সার্টিফিকেট লাগবে না। তবে, তোমাকে English এ টুকিটাকি কথা বলতে পারতে হবে। কারন, 42 তে সব সময় টিম এর সাথে কাজ করতে হবে। মানে বুঝতেই পারতেছো।
                        তোমাকে অবশ্যই টীম মেম্বারদের সাথে কথা বলতে হবে। তাই IELTS সার্টিফিকেট না লাগলেও তোমাকে নূন্যতম কথা বলতে পারবা এমন দক্ষতা থাকতে হবে।
                    </Item>
                    <Item title="University তে এক বছর complete করতে হবে ?">
                        তোমার কিছুই লাগবে না। শুধু বয়স 18 বেশি হলেই হবে। আর প্রোগ্রামিং এর প্রতি আগ্রহ থাকলেই হবে।
                    </Item>
                    <Item title="লেখাপড়ায় গ্যাপ থাকলে সমস্যা আছে ?">
                        কোনো সমস্যা নাই। শুধু বয়স 18 বেশি আর 40 এর কম হলেই হবে।
                    </Item>
                    <Item title="স্কুল, কলেজ এর সার্টিফিকেট লাগবে না ?">
                        তোমাকে অবশ্যই নূন্যতম  স্কুল পাস করতে হবে। তবে কলেজ, ডিপ্লোমা অথবা ইউনিভার্সিটি স্টুডেন্ট হলে ভালো হবে।
                        কারন, প্রোগ্রামিং শিক্ষার জন্য যে mathematics প্রয়োজন তা সাধারণত এসএসসি পাস ছেলে-মেয়েরা জানে না।
                        তবে, সার্টিফিকেট দেখানোর প্রয়োজন নাই।
                    </Item>
                    <Item title="CSE ব্যাকগ্রাউন্ড না হলে কোনো সমস্যা হবে ?">
                        যেকোনো ব্যাকগ্রাউন্ড থেকে apply করতে পারবে। কোনো problem নেই।
                    </Item>
                    <Item title="সর্ব মোট কত টাকা লাগতে পারে ?">
                        ৭-১০ লক্ষ টাকার মতো। তবে একসাথে লাগবে না। বিস্তারিত জানতে Total Cost পেজে দেখতে পারো।
                    </Item>
                </div>
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
            </div>
        </div>
    );
};

export default Faq;