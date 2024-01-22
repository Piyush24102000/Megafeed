'use client'
import React from 'react'

const Contact = () => {
    const openMap = () => {
        const iframe = document.createElement('iframe');
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.84161512034!2d77.12320077500705!3d21.056381080599863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd71f1a01764f91%3A0xa8dc90fb45092b69!2sMEGAFEED%20BIOTECH%20AND%20PLANTATION!5e1!3m2!1sen!2sin!4v1693257789832!5m2!1sen!2sin";
        iframe.style.border = '0';
        iframe.allowFullscreen = true;
        iframe.loading = 'lazy';

        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        // Adjust the iframe dimensions based on screen width
        if (screenWidth <= 768) {
            iframe.width = '100%';  // Use full width for mobile devices
            iframe.height = '100%';  // Set a fixed height for mobile
        } else {
            iframe.width = '800';   // Set a width for larger screens
            iframe.height = '600';  // Set a height for larger screens
        }

        const newWindow = window.open('', '_blank');
        newWindow.document.body.appendChild(iframe);
    };

    return (
        <div>
            <section id="contact-section" className="text-gray-400 bg-black body-font relative">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-6">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Contact Us</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We are available 24/7 for our Customers</p>
                    </div>
                    <div className="lg:w-1/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center flex flex-col items-center">
                                <a className="text-indigo-400">Any Queries Contact - 86053 10918</a>

                                <a href="#" className="ml-4 text-gray-500 mt-5 cursor-pointer" onClick={openMap}>
                                    <svg fill="#009900" viewBox="0 0 20 20" className="w-10 h-10">
                                        <path fillRule="evenodd" d="M10 0a7 7 0 00-7 7c0 5.18 7 13 7 13s7-7.82 7-13a7 7 0 00-7-7zm0 9a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </a>


                                <p className="leading-normal my-5">Megafeed Biotech, Gut No 2, Asegaon bazaar, Taluka-Akot, District-Akola, 444101</p>
                                <span className="inline-flex">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-gray-500">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact