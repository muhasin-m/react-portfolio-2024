import aboutSvg from "../assets/about.svg";

import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="svg photo" className="w-full h-64" />

        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose">
            Hello! 👋 I'm Muhasin Mahmud, a dedicated fullstack developer with a
            background in Usability Engineering. Having completed my MSc in
            Usability Engineering, I've specialized in creating user-friendly
            digital solutions. Currently, I work as a Fullstack Web Developer
            Trainer, where I enjoy mentoring future developers and helping them
            master the complexities of contemporary web development.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
