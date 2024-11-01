import React from 'react'
import { Meteors } from "@/components/ui/meteors";
function page() {
  return (
    <>
     <div className="p-6 mt-8">
     
      <div className=" w-full relative max-w-xs mx-auto">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-center text-white m-auto flex justify-center items-center">Contact Us</h2>
 
          <h1 className="font-bold text-xl text-white mb-4 relative z-50 mt-2">
            We would love to hear from you!
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            Please fill out the form below to get in touch with us.
          </p>
 
          <input 
            type="email" 
            placeholder="Your Email" 
            className="border border-gray-500 rounded-lg px-3 py-2 mb-4 w-full text-gray-300" 
          />
          
          <textarea 
            placeholder="Your Message" 
            className="border border-gray-500 w-full
             rounded-lg px-3 py-2 mb-4 text-gray-300" 
            rows={4} 
          />
          
          <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
            Send Message
          </button>
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={210} />
        </div>
      </div>
    </div>
  
   </>
  )
}

export default page