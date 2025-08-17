// Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Get in touch:
            </h2>
            <p className="text-gray-600 mb-6">
              Fill in the form to start a conversation
            </p>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <p>Kolkata , West Bengal , India</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <p>+91 9123805454</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <p>aneeshghosh80@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
