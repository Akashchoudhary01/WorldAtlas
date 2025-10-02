import React from "react";


export default function Contact() {

  const handelFormSubmit = (formData , e)=>{
    e.preventDefault();
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
    
    
  }
  return (
    <div id="contact" className="bg-zinc-950 h-full w-full p-10">
      <div className="max-w-2xl min-w-[20rem] text-white m-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form
          className="flex flex-col gap-4 w-full bg-zinc-900 p-6 rounded-xl shadow-md"
          action={()=> handelFormSubmit}
        >
          {/* Name */}
          <input
            className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            required
            autoComplete="off"
            name="name"
            placeholder="Enter your name"
          />

          {/* Email */}
          <input
            className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            required
            autoComplete="off"
            name="email"
            placeholder="xyz@email.com"
          />

          {/* Message */}
          <textarea
            className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
            name="message"
            required
            placeholder="Enter your message"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300"
          >
            Send Message
          </button>
        </form>
        
      </div>
    </div>
  );
}