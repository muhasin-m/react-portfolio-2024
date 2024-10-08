import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <>
      <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
        <img
          src={img}
          alt="Projects images"
          className="w-full object-fit rounded-t-lg h-64"
        />
        <div className=" p-8">
          <h2 className=" capitalize text-xl tracking-wide front-medium">
            {title}{" "}
          </h2>
          <p className="mt-4 text-slate-700 leading-loose">{text}</p>

          <div className="mt-4 flex justify-between gap-x-4 ">
            <a href={url} target="_blank">
              <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href={github} target="_blank">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectsCard;
