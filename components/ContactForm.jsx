import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7pi6evr",
        "template_8zc19u9",
        form.current,
        "ueRmOzuvqeDtHhdUS"
      )
      .then();
    e.target.reset();
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <img src="/left.png" className=" absolute left-0 w-[20em] h-[26em]" />
      <img src="/right.png" className=" absolute right-0 w-[20em] h-[26em] " />
      <form
        onSubmit={sendEmail}
        ref={form}
        className="flex flex-col justify-center pt-[40px] items-center gap-4"
      >
        <input
          type="text"
          name="fname"
          className="text-center rounded text-[#ffffff] bg-[#2f2f2f] w-[50vw] h-[3em] outline-none z-[1] border-[1px] border-[#6d5b3c]"
          placeholder="First Name"
        />
        <input
          type="text"
          name="lname"
          className="text-center rounded text-[#ffffff] bg-[#2f2f2f] w-[50vw] h-[3em] outline-transparent z-[1] outline-none border-[1px] border-[#6d5b3c]  "
          placeholder="Last Name"
        />
        <input
          name="email"
          className="text-center rounded text-[#ffffff] bg-[#2f2f2f] w-[50vw] h-[3em] outline-transparent z-[1] outline-none border-[1px] border-[#6d5b3c]"
          placeholder="Email Address"
        />

        <textarea
          name="desc"
          className="text-center rounded text-[#ffffff] bg-[#2f2f2f] w-[50vw] overflow-hidden resize-none h-[4.5em] outline-transparent z-[1] outline-none border-[1px] border-[#6d5b3c] "
          placeholder="Brief Description Regarding Your Inquiry"
        />
        <div className="flex items-center justify-between flex-wrap gap-5 z-[1]">
          <div className="flex items-center h-fit py-4 px-6 bg-gradient-to-t from-[#cdae69] to-[#f8eabb] z-[1] rounded-[32px] gap-[12px]">
            <input
              type="submit"
              className="font-normal text-[16px] text-white z-[1] cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
