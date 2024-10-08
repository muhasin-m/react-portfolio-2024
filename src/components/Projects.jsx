import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <>
      <section className="py-20 align-element" id="projects">
        <SectionTitle text="Projects" />
        <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />;
          })}
        </div>
        <button className="py-1 px-2 capitalize bg-emerald-500 text-white font-semibold rounded-md shadow-md hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400 focus:ring-opacity-75">
          More projects to be uploaded soon ...
        </button>
      </section>
    </>
  );
};

export default Projects;
