import React from "react";
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaWhatsapp,
  FaRegEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">
          Ravendra Kumar
        </h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide text-justify">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be a part of your
          visions. Email me with any questions or inquiries. I'll happy to
          answer your questions and set up a meeting with you.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:{" "}
          <span className="text-white hover:text-designColor cursor-pointer duration-300">
            <a href="Tel:9542667793">+91 9336655470</a>
          </span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-white hover:text-designColor cursor-pointer duration-300">
            <a href="mailto:ravendrayadav933@gmail.com">
              ravendrayadav933@gmail.com
            </a>
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://github.com/ravendrakum">
              <FaGithubAlt />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/ravendra-kumar-363a9b243/">
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://wa.me/+91 9336655470">
              <FaWhatsapp />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="mailto:ravendrayadav933@gmail.com">
              <FaRegEnvelope />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.instagram.com/ravi_hindu2000/">
              <FaInstagram />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;