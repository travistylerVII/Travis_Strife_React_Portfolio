import React from "react";

const contact = () => {
  return (
    <div name="contact" className="w-full flex justify-center items-center p-4">
      <form
        action="https://getform.io/f/70f5d4fd-d562-4bf7-894b-e50389872acc"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-3">
          <p className="homepage-h4 text-4xl font-bold inline border-b-4 border-[#28e6ca] text-white">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or send me an email at
            travis@mooremediallc.com
          </p>
        </div>
        <input
          className="p-2 rounded"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 rounded"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 rounded"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="rounded-full bg-[#28e6ca] text-[#082b26] px-10 py-3 my-8 mx-auto">
          Let's Chat!
        </button>
      </form>
    </div>
  );
};

export default contact;
