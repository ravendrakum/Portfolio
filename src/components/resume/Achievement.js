import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p> */}
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>
       <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* <ResumeCard
      title="Cisco Networking Academy."
      subTitle="Introduction to Cybersecurity, Packet Tracer, and Cybersecurity Essentials."
      result={
        <span>
          <a
            href="https://drive.google.com/file/d/1WS-cMdzNkzJbsl3J_uPghGjaDboYpi-7/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-designColor hover:text-red-700 duration-100 underline"
          >
            Click here
          </a>
        </span>
      }
      des="Embark on foundational cybersecurity training with Cisco Networking Academy. Explore Introduction to Cybersecurity, Packet Tracer, and Cybersecurity Essentials. Gain essential knowledge and hands-on experience in threat landscapes, network configurations, and defense strategies."
    /> */}
          {/* <ResumeCard
      title="Frontend Bootcamp."
      subTitle="Mastering Modern Web Development with React."
      result={
        <span>
          <a
            href="https://drive.google.com/file/d/1iSe9Cq_pBjahhIT-_bJi6xH7q5fBa8IU/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-designColor hover:text-red-700 duration-100 underline"
          >
            Click here
          </a>
        </span>
      }
      des="Embark on a transformative journey into modern web development with our intensive React JS Bootcamp. Learn core React concepts, build dynamic interfaces, integrate with APIs, and optimize performance."
    /> */}
          {/* <ResumeCard
      title="Hotstar Bootcamp."
      subTitle="Master React JS with Hotstar's Expert Guidance."
      result="Completed"
      des="Unlock the power of React JS with Hotstar's immersive bootcamp. Dive deep into building dynamic web applications, mastering state management, and optimizing performance."
    /> */}
          {/* <ResumeCard
      title="CodSoft."
      subTitle="Mastering Web Development with Codsoft."
      result={
        <span>
          <a
            href="https://drive.google.com/file/d/1GOpoUidTzL5siZDAllwojteZMZyySj5w/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-designColor hover:text-red-700 duration-100 underline"
          >
            Click here
          </a>
        </span>
      }
      des="Codsoft offers cutting-edge training in web development, equipping interns with essential skills and hands-on experience. Dive into real-world projects, master the latest web technologies, and emerge as a proficient web developer ready to tackle industry challenges."
    /> */}
        </div>
      </div> 

      {/* <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;