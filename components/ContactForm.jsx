"use client";

import React from "react";

const ContactForm = () => {
  return (
    <div className="w-[100vw] flex flex-col">
      <div>Header</div>
      <div>Subtitle</div>
      <div className="flex flex-col justify-around w-[100vw]">
        <div className="flex justify-around">
          <input
            className="text-center"
            id="Fname"
            type="text"
            placeholder="First Name"
          ></input>
          <input
            className="text-center"
            id="Lname"
            type="text"
            placeholder="Last Name"
          ></input>
        </div>
        <div className="flex w-[100vw] justify-around">
          <input
            className="text-center"
            id="email"
            type="email"
            placeholder="Enter Your Email"
          ></input>
        </div>
        <div className="flex w-[100vw] justify-around">
          <textarea placeholder="explain the purpose of acquiring a Lavish gift briefly"></textarea>
        </div>
        <div className="flex items-center justify-between fkex -wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Join the waitlist
          </h4>
          <button
            type="button"
            className="flex items-center h-fit py-6 px-2 bg-[#25618b] rounded-[32px] gap-[12px]"
          >
            <img
              src="/headset.svg"
              className="w-[24px] h-[24px] object-contain "
            />
            <span className="font-normal text-[16px] text-white">Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
