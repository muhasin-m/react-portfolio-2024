import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import aboutImg from "../assets/mahmud.jpg";
import CV from "../assets/CV_Muhasin-Mahmud.pdf";
const Hero = () => {
  return (
    <div className="bg-white py-24" id="home">
      <div className="align-element grid  md:grid-cols-2 items-center gpa-8">
        <article className="my-10 py-10">
          <h1 className="text-6xl font-bold tracking-wide grid grd-5">
            Muhasin Mahmud
          </h1>
          <p className="py-4 mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Full stack Web Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            I am passionate about building modern, full-stack web apps that are
            user-friendly, aiming to deliver seamless and engaging digital
            experiences.
          </p>

          <div className="flex items-center gap-x-4 mt-8">
            <a href="https://github.com/muhasin-m" target="_black">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhasin-uddin-mahmud-5b6639164/"
              target="_black"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href={CV} download>
              <button className="py-1 px-2 capitalize bg-emerald-500 text-white font-semibold rounded-md shadow-md hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-400 focus:ring-opacity-75">
                Download CV
              </button>
            </a>
          </div>
        </article>

        <article className="hidden md:block px-10 mx-20">
          <img
            src={aboutImg}
            alt=""
            className=" w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full border-4 border-emerald-100 shadow-lg transform transition duration-500 hover:scale-110"
          />
        </article>
      </div>
    </div>
  );
};

export default Hero;
