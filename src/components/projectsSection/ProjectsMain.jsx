import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "AYUSH",
    title: "Virtual Herbal Garden",
    subtitle: `Step into a lush digital paradise where tradition 
    meets technology! Explore a virtual herbal garden that brings 
    ancient AYUSH wisdom to life with 3D models, AR/VR interaction, 
    and smart AI-guided discovery. It is not just learning—it is an 
    immersive, addictive journey into the world of healing herbs`,
    align: "right",
    image: "../../public/images/AYUSH1.png",
    link: "#",
  },
  {
    name: "The Ghoomakkads",
    title: "AI-Driven Travel Companion App",
    subtitle: `Craving adventure but tired of the usual tourist traps? 
    The Ghoomakkads is your all-in-one travel buddy—uncover hidden gems, 
    connect with fellow wanderers, and dive into thrilling surprise 
    trips tailored just for you. Pack your bags, because unforgettable 
    journeys start here!`,
    align: "left",
    image: "../../public/images/Ghoomakkads.png",
    link: "#",
  },
  {
    name: "Legal Ai Assitant",
    title: "AI-Powered Legal Assistance Web App",
    subtitle: `Imagine an AI that instantly knows the right law for any 
    situation—Legal FIR Assistant makes that real! Whether you are a police 
    officer drafting an FIR or a citizen seeking justice, this smart tool 
    guides you through Indias legal maze with accuracy, speed, and simplicity. 
    Curious how it works? Let’s dive in!`,
    align: "right",
    image: "../../public/images/Legal.jpeg",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              title={project.title}
              subtitle={project.subtitle}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
