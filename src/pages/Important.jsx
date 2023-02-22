import React from 'react'

const Important = () => {
    return (
        <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
            <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
                <div className="mb-4">
                    <a
                        href="/"
                        aria-label="Article"
                        className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-white transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
                    >
                        গুরুত্বপূর্ণ কিছু কথা !!!
                    </a>
                </div>
                <p className="text-base text-green-700 md:text-lg text-justify">
                    আসসালামু আলাইকুম,
                    আশা করি তুমি ভালো আছো। তুমি যেহেতু এই ওয়েবসাইট এ আসছো। তার মানে তোমার প্রোগ্রামার হওয়ার স্বপ্ন আছে। 
                    অনেক সময় তথ্যের অভাবে আমাদের কাছে অনেক সুযোগ থাকা সত্বেও আমরা কিছুই করতে পারি না।
                    ঠিক এই সুযোগটাই ব্যবহার করে Agency গুলা আমাদের কে মিথ্যা তথ্য দিয়ে আমাদের বাবা-মায়ের কষ্টে অর্জিত টাকা আত্নস্বাদ করে। 
                    ওরা নিজেদের স্বার্থে আমাদের ভূল তথ্য দেয়। তোমাদের যেন এজেন্সির ফাঁদে পা না দিতে হয়, 
                    তুমি যেন তোমার বাবা-মায়ের কষ্টে অর্জিত টাকা সঠিক জায়গায় ব্যবহার করে একটা যোগ্য মানুষ হিসাবে গড়ে উঠে বাবা-মায়ের মুখে হাসি ফুটাতে পারো 
                    সে জন্যই আমার এই ওয়েবসাইট বানানো। তোমাদের প্রয়োজনীয় সব তথ্যই আমি এখানে দিয়েছি। যদি আরো কিছু জানার থাকে তাহলে "42 Programming University, 
                    Germany" Facebook পেজে এ মেসেঞ্জার আমাকে মেসেজ করতে পারো। তাও এজেন্সির ফাঁদে পা দিয়ে নিজের স্বপ্নটা নষ্ট করে দিওনা!
                    তোমার স্বপ্ন জয়ের যাত্রায় আমি যদি একটু অবদান রাখতে পারি তাহলে আমি নিজের কষ্টটাকে স্বার্থক মনে করবো।
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

export default Important