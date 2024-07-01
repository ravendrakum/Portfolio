
import React, { useRef, useState } from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectsRef = useRef(null);

  const projectsData = [
    
    
    
    {
      title: "CRYPTO-TRACKER",
      des: " Crypto-Tracker is a personal curypto-currencies price application designed to help users track their crypto-currencies price, volume-change, and overall chartShow-Data. Compare price of two Currencies with Chart-implement for both currencies price compare",
      src: "https://logowik.com/content/uploads/images/financely630.logowik.com.webp",
      githubLink: "https://github.com/ravendrakum/crypto-dashboard-april",
      demoLink: "https://crypto-dashboard-april.netlify.app/",
      text: "SKILLS",
      skillUsed: "React, CSS, Material-UI, Axios",
    },
    {
        title: "NETFLIX CLONE",
        des: " A similar app to netflix where users can access the video streaming content, watch, subscribe, and be a part of many other activities.",
        src: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
        githubLink: "https://github.com/ravendrakum/net-resume",
        demoLink: "https://net-resume.onrender.com/",
        text: "SKILLS",
        skillUsed: "REACT, CSS, Styled-Component, Firebase Authentication, Nodejs, Mongodb",
      },

    {
      title: "WEATHER",
      des: " The Weather Application is a web-based tool that allows users to fetch real-time weather data based on their current location.",
      src: "https://english.makalukhabar.com/wp-content/uploads/2022/09/1600x960_1306284-weather-update.jpg",
      githubLink: "https://github.com/ravendrakum/Weather-Web",
      demoLink: "https://ravendrakum.github.io/Weather-Web/",
      text: "SKILLS",
      skillUsed: "HTML, CSS, JavaScript, API",
    },
    {
      title: "YOUTUBE CLONE",
      des: " A similar app to youtube where users can access the video streaming content, watch, subscribe, and be a part of many other activities.",
      src: "https://i.ytimg.com/vi/SsMn8tT3ZBQ/maxresdefault.jpg",
      githubLink: "https://github.com/ravendrakum/You-Tube-Clone",
      demoLink: "https://ravendrakum.github.io/You-Tube-Clone/",
      text: "SKILLS",
      skillUsed: "HTML, CSS, JavaScript, API",
    },
    {
      title: "DEWALI",
      des: " Diwali celebration animation created using HTML, CSS, and JavaScript. It features fireworks animations and a greeting message for the festival of lights.",
      src: "https://img.freepik.com/premium-photo/happy-diwali-indian-festival-background-with-candles-diwali-day-happy-diwali-day_692702-2604.jpg",
      githubLink: "https://github.com/ravendrakum/Diwali",
      demoLink: "https://ravendrakum.github.io/Diwali/",
      text: "SKILLS",
      skillUsed: "HTML, CSS, JavaScript",
    },
    
    
    {
      title: "GOOGLE SHEET CLONE",
      des: " Google Sheet clone, providing a basic functional grid-based spreadsheet application. It allows users to create, edit, and manage multiple sheets.",
      src: "https://images.unsplash.com/photo-1663124178632-488f399d5763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdvb2dsZSUyMG5ld3N8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      githubLink: "https://github.com/ravendrakum/GoogleSheet",
      demoLink: "https://ravendrakum.github.io/GoogleSheet/",
      text: "SKILLS",
      skillUsed: "HTML, CSS, JavaScript",
    },
    {
      title: "SPOTIFY CLONE",
      des: " Spotify clone aiming to replicate the popular music streaming service's. The clone offers familiar interface for exploring music, enjoying their favorite songs.",
      src: "https://i.etsystatic.com/22792867/r/il/e8d325/3810008213/il_fullxfull.3810008213_7bn1.jpg",
      githubLink: "https://github.com/ravendrakum/Spotify-Clone",
      demoLink: "https://ravendrakum.github.io/Spotify-clone/",
      text: "SKILLS",
      skillUsed: "HTML, CSS, Bootstrap",
    },
    {
      title: "BLINKIT CLONE",
      des: " Blinkit is a web-based online grocery store. This project aims to offer a seamless shopping experience for users with a user-friendly interface.",
      src: "https://inc42.com/wp-content/uploads/2023/03/Weekly-NL-10-March-featured.jpg",
      githubLink: "https://github.com/ravendrakum/bling-kit-sept",
      demoLink: "https://ravendrakum.github.io/bling-kit-sept/",
      text: "SKILLS",
      skillUsed: "HTML, CSS, Bootstrap",
    },
   
    
    
    
  ];

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
    if (showAllProjects) {
      // Scroll to the top of the Projects section when loading more
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectsData
          .slice(0, showAllProjects ? projectsData.length : 6)
          .map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              text={project.text}
              skillUsed={project.skillUsed}
              des={project.des}
              src={project.src}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={toggleShowAllProjects}
          className="download flex items-center"
        >
          {showAllProjects ? (
            <>
              Show Less <FaChevronUp className="ml-2" />
            </>
          ) : (
            <>
              Show More <FaChevronDown className="ml-2" />
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default Projects;
