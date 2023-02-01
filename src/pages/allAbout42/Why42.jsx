import React from 'react'

const Why42 = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
                        কেন 42 তে পড়া উচিৎ ?
                    </a>
                </div>
                <p className="text-base text-green-700 md:text-lg text-justify">
                    42 একদম ফ্রীতে আপনাকে একজন Software Engineer হওয়ার সুযোগ দিচ্ছে। প্রশ্ন হচ্ছে তাহলে 42 টাকা পাচ্ছে কোথায়? এটা কি সরকারি ?
                    উত্তর হচ্ছে মোটেও সরকারি না ! আসলে জার্মানি কিছু বড় বড় কোম্পানি যেমনঃ Google, BMW, Volkswagen, Mercedes, Porsche, Audi, SAP অর্থায়ন করে।
                    প্রশ্ন হচ্ছে কেন তারা অর্থায়ন করে? আচ্ছা আমি যদি বলি University বর্তমান প্রেক্ষাপটে অনেকটাই সেকেলে হয়ে গেছে তাহলে আপনাদের প্রতিক্রিয়া কি হবে?
                    আসলে এটা আমার কথা না। বরং Google, SAP সহ বড় বড় কোম্পানি গুলা এমন টা মনে করে ! <br/>
                    <span className='text-red-500'>"SAP removes university requirements"</span> <br/><span className='text-white' style={{"marginLeft":"100px"}}>Max Wessel, chief learning officer, SAP</span><br/>
                    দেখেন SAP (ইউরোপ এর সব চেয়ে বড় IT কোম্পানি চিফ লার্নিং অফিসার ম্যাক্স ভেসেল কি বলছে ) ।
                    প্রশ্ন হচ্ছে কেন বলছে? সত্যিটা হলো ইউনিভার্সিটি থেকে গ্রাডুয়েশন শেষ করা স্টুডেন্টরা আসলে সফটওয়্যার কোম্পানি গুলার Requirements পূরণ করতে পারে না। মনে করেন,
                    গুগল একটা ওয়েব ডেভেলপার চায় যে <span className='text-red-500'>JavaScript , React , MongoDB , NodeJS</span> জানে। এখন এই জব এর জন্য যদি ইউনিভার্সিটি থেকে
                    গ্রাডুয়েশন করা স্টুডেন্ট apply করে তাহলে এই জব এ যেই টেকনোলজি গুলা চাওয়া হইছে যা উপরে উল্ল্যেখ করা হয়েছে সেই Requirements পূরণ করা সম্ভব না।
                    কেন? কারণ, যদি আপনারা ইউনিভার্সিটি syllabus দেখেন, জেনে থাকবেন ইউনিভার্সিটি তে উপরের কোনো টেকনোলজি শিখানো হয় না। আবার IT
                    যত তাড়াতাড়ি change হয় তার সাথে পাল্লা দিয়ে ইউনিভার্সিটি syllabus পরিবর্তন করাও সম্ভব না।
                    কারণ, এর সাথে অনেকের জীবিকা জড়ায়া আছে! এই জন্যই বড় বড় টেক কোম্পানি গুলা 42 মতো স্কুল এ অর্থায়ন করে যাতে এখন থেকে গ্রাজুয়েট হওয়া স্টুডেন্টরা তাদের Requirements পূরণ করতে পারে।
                    তাহলে, একটা জিনিস তো পরিষ্কার যে, আপনি এখান থেকে সফটওয়্যার ইঞ্জিনিয়ার হলে <span className='text-red-500'>Google , SAP , BMW</span>  etc  কোম্পানি তে <span className='text-red-500'>জব</span> পাওয়ার <span className='text-red-500'>Possibility </span>বেশি।
                    এখন আপনাদের মতো আমার মাথায় ও একটা প্রশ্ন ঘুরপাক খেয়েছিলো। সেটা হলো, 42 থেকে গ্রাজুয়েট হওয়া স্টুডেন্টরা কি সব পারে? উত্তর হচ্ছে হ্যা ! 
                    কিভাবে? কারণ, ৪২ তে স্টুডেন্টরা Real World Project Based লেখা পড়া করে।  এর মানে একটা batch এ যে projects গুলা শিখানো হয় অন্য batch এ একই projects করানো যায় না। Project এর উপর base  করে technology different হয়। তার উপর ৪২ তে যেহেতু Pair  Learning (অর্থাৎ Team  Work ) করে তাই ৪২ স্টুডেন্টদের ভিতর Team Work , একে উপর কে help করা , প্ল্যান করেন কাজ করা ইত্যাদি Soft -skills achieve করে। 
                    তাই 42 থেকে গ্রাজুয়েট করা স্টুডেন্টদের জন্য যেকোনো টেকনোলজি নিয়ে কাজ করা অনেক বেশি easy । 
                    এখনো কী বলতে হবে কেন পড়া উচিৎ ?!
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

export default Why42