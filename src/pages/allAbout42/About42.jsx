import React from 'react'

const About42 = () => {
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
            42 কোডিং ইউনিভার্সিটি কী ?
          </a>
        </div>
        <p className="text-base text-green-700 md:text-lg text-justify">
          42 হচ্ছে একটা প্রোগ্রামিং স্কুল যার যাত্রা শুরু হয় ফ্রান্সে ২০১৪ সালে। আসলে ফ্রান্সের একজন বিখ্যাত লেখক তার একটা সাইন্স ফিক্শনে এ 42 নম্বরটা কে উনিভার্সের সব কিছুর সমাধান হিসাবে দেখিয়েছিলেন।
          যেহেতু এই প্রোগ্রামিং উনিভার্সিটিতে প্রোগ্রামিং এর সব কিছু শেখানো হয় তাই এর নামকরণ করা হয়েছে 42। বর্তমানে জার্মানি, ফ্রান্স, আমেরিকা, ব্রিটেন, তুরস্ক, জাপান সর্ব মোট ২৪ টি দেশে 42 প্রোগ্রামিং
          ইউনিভার্সিটি কার্যক্রম পরিচালোনা করছে।
          শুধু জার্মানি তে বছরে <span className='text-red-500'>১৮০০</span> আগ্রহীদের সুযোগ দেওয়া হচ্ছে। জার্মানি তে দুই টা শাখা আছে যথাক্রমে <span className='text-red-500'>42 Berlin</span> এবং <span className='text-red-500'>42 Wolfburg</span>।
          তোমার বয়স যদি <span className='text-red-500'>১৮+</span> হয়, কিছুটা <span className='text-red-500'>English</span> এর basic থাকে যাতে তোমার পার্টনারের সাথে টুকিটাকি একটু কথা বলতে পারবে,
          প্রোগ্রামিং শেখার প্রতি প্রবল আগ্রহ থাকে তাহলে তুমি <span className='text-red-500'>বিনা টাকায়, IELTS, German Language</span> সার্টিফিকেট <span className='text-red-500'>ছাড়াই </span>
          এই প্রোগ্রামিং ইউনিভার্সিটিতে পড়তে পারবে। 
          এখানে শুধু প্রোগ্রামিং শেখানো হয় ( <span className='text-red-500'>Software Engineering, Cyber Security, Artificial  Entiligence, Self Driving Technology, Drone Programming ইত্যাদি</span> )।
          এর মানে অন্য কোনো সাবজেক্ট পড়ানো হয় না। তবে এই লেখাপড়া আমাদের গতানুগতিক university লেখা পড়ার মতো না।
          এই programming স্কুলে সব কিছু শেখানো হয় <span className='text-red-500'>Industrial Project Based</span> অর্থাৎ তুমি যদি Drone Programming করো তাহলে
          একটা সত্যিকারের ড্রোনে তোমার লেখা প্রোগ্রামটা ইনস্টল করে Drone টা সফল ভাবে উড়াতে হবে!
          তবে ভয়ের কিছুই নাই। তুমি এই প্রজেক্ট একা কমপ্লিট করবেন না বরং তোমাকে একটা টীম এর সাথে কাজ করতে হবে যাকে বলে <span className='text-red-500'>Pair Learning</span>।
          প্রতি বছর <span className='text-red-500'>Russia, Iran, India, Pakistan and others European countries</span> থেকে প্রচুর ছেলে-মেয়ে এই সুযোগ নিতেছে এবং software engineer
          হিসাবে নিজেদের ক্যারিয়ার শুরু করতেছে। এখন decision তোমার!
          তুমি কি করবে?
          তুমি কি বাংলাদেশে প্রাইভেট ইউনিভার্সিটি পড়ে শিক্ষিত বেকার হবে নাকি নিজেকে একজন দক্ষ প্রোগ্রামার হিসেবে গড়ে তুলে একটা সুন্দর ক্যারিয়ার শুরু করবে?
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

export default About42