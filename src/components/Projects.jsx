import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 flex flex-wrap lg:justify-center"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full flex justify-center lg:w-1/4 lg:block lg:justify-start lg:items-start"
              >
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded cursor-pointer"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold cursor-pointer flex justify-center md:block md:justify-start">
                  {project.title}
                </h6>
                <p className="mb-4 text-neutral-400 cursor-pointer flex justify-center text-center md:block md:justify-start md:text-left">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 m-1 md:m-0 md:mr-2 "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
