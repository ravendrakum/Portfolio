import React from "react";
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaWhatsapp,
  FaRegEnvelope,
  FaPhone,
  FaInstagram,
} from "react-icons/fa";
import Resume from "../../assets/Resume.pdf";
const Media = () => {
  return (
    <div>
      <h2 className="text-base uppercase font-titleFont mb-4">
        Fine my Resume
      </h2>
      <div className="flex gap-6">
        <span className="download">
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            // download="Sainath_CV.pdf"
          >
            Download CV
          </a>
        </span>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
              <a href="Tel:9336655470">
                <FaPhone />
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
    </div>
  );
};

export default Media;