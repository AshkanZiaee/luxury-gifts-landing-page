import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <img src="/left.png" className="left-0 absolute w-[32em] z-[10]" />
      <img src="/right.png" className="right-0 absolute w-[32em] z-[10]" />

      <input
        type="text"
        className="text-center rounded text-[#ffffff] bg-[#2f2f2f] w-[25em] h-[3em] border-[#A77207] outline-transparent"
        placeholder="First Name"
      />
      <input
        type="text"
        className="text-center rounded text-[#ffffff] bg-[#2f2f2f] w-[25em] h-[3em] outline-transparent"
        placeholder="Last Name"
      />
      <input
        type="email"
        className="text-center rounded text-[#ffffff] bg-[#2f2f2f] w-[25em] h-[3em] outline-transparent"
        placeholder="Email Address"
      />

      <textarea
        className="text-center rounded text-[#ffffff] bg-[#2f2f2f] w-[25em] h-[4.5em] outline-transparent placeholder:translate-y-6 "
        placeholder="Brief Description Regarding Your Inquiry"
      />
      <div className="flex items-center justify-between flex-wrap gap-5">
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-gradient-to-t from-[#cdae69] to-[#f8eabb] rounded-[32px] gap-[12px]"
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">Submit</span>
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
