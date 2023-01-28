import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center ">
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
        className="text-center rounded text-[#ffffff] bg-[#2f2f2f] w-[25em] h-[3em] outline-transparent "
        placeholder="Brief Description Regarding Your Inquiry"
      />
      <div className="flex items-center justify-between flex-wrap gap-5">
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#b67320] rounded-[32px] gap-[12px]"
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
