import React, { useState } from 'react'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigates = <>
        <li>
            <a
                href="/home"
                aria-label="Our product"
                title="In this home page you will get all information regarding to 42 programming school admission process."
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-green-400"
            >
                All Info
            </a>
        </li>
        <li>
            <a
                href="/admission"
                aria-label="Admission Process"
                title="Admission process in step by step"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-green-400"
            >
                Admission Process
            </a>
        </li>
        <li>
            <a
                href="/requirements"
                aria-label="requirements"
                title="Requirements Data"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-green-400"
            >
                Requirements
            </a>
        </li>
        <li>
            <a
                href="/cost"
                aria-label="cost data"
                title="Total Cost Related Data"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-green-400"
            >
                Total Cost
            </a>
        </li>
        <li>
            <a
                href="/faq"
                aria-label="faq"
                title="Some common questions that people frequently ask"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-green-400"
            >
                Common Questions
            </a>
        </li>
    </>
    return (
        <div class="bg-black">
            <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div class="relative flex items-center justify-between">
                    <a
                        href="/"
                        aria-label="42 programming school info"
                        title="42 programming school admission info in Bangla"
                        class="inline-flex items-center"
                    >
                        <img style={{ "width": "80px" }} src="https://biolibre.fr/media/cache/articleMainImg/images/articles/school_42.jpeg" alt="" />
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                            Info Desk Bangla
                        </span>
                    </a>
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        {navigates}
                    </ul>
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <a
                                href="/course"
                                class="inline-flex bg-blue-800 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                aria-label="42 preparation course for piscine"
                                title="42 programming schools's preparation for piscine"
                            >
                                Course
                            </a>
                        </li>
                    </ul>
                    <div class="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div class="absolute top-0 left-0 w-full">
                                <div class="p-5 bg-black border rounded shadow-sm">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <a href='/'>
                                                <img style={{ "width": "50px" }} src="https://biolibre.fr/media/cache/articleMainImg/images/articles/school_42.jpeg" alt="42 Banlga" />
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul class="space-y-4">
                                            {navigates}
                                            <li>
                                                <a
                                                    href="/course"
                                                    class="inline-flex bg-blue-800 items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                    aria-label="42 preparation course for piscine"
                                                    title="42 programming schools's preparation for piscine"
                                                >
                                                    Course
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar