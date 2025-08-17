import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12 ">
            <img
              className="rounded-2xl"
              src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              React developers are skilled professionals who use the React
              JavaScript library to build fast, interactive, and scalable web
              applications. Their work revolves around creating reusable UI
              components, managing application state, and optimizing performance
              to deliver smooth user experiences. They are proficient in modern
              JavaScript (ES6+), JSX, and often integrate tools like Redux,
              React Router, or Tailwind CSS to enhance functionality and
              styling.
            </p>
            <p className="mt-4 text-gray-600">
              In the broader scope of frontend engineering, React developers
              play a crucial role in bridging the gap between design and
              functionality. They work closely with UI/UX designers to translate
              visual concepts into responsive, accessible, and interactive
              interfaces that work seamlessly across devices and browsers.
              Frontend engineers not only write clean and maintainable code but
              also ensure the application adheres to performance best practices,
              accessibility standards, and evolving web technologies, making
              them an essential part of any modern web development team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
