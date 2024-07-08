import React from "react";
import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    id: "1",
    count: "5",
    src: "https://media.licdn.com/dms/image/C4D03AQGxyhKv8V8vjA/profile-displayphoto-shrink_100_100/0/1594531925073?e=1726099200&v=beta&t=p1xmYWj8_RcCRjkox-uBMSiDXjWfR1JUowXeKV03iZA",
    description:
      "I firmly believe in Muhasin's potential and capability to be an asset to any team, and I am confident that he will bring his unique blend of commitment, responsibility, and care for students to any institution he joins in the future.",
    author_name: "Alkis Kastrisios",
    author_designation: "Senior Full Stack Instructor",
    linkedin_url: "https://www.linkedin.com/in/alkis-kastrisios/",
  },
  {
    id: "2",
    count: "5",
    src: "https://media.licdn.com/dms/image/C5103AQFaJZrlRogjUw/profile-displayphoto-shrink_100_100/0/1517531802291?e=1726099200&v=beta&t=xUAxbWN9pcPpizxWaKzFVrwvDfRz4JpfwwO0pcqG_kc",
    description:
      "As a colleague, Muhasin has been a pleasure to work with. Always willing to help, he has your back whenever you need him. His infectious smile and positive attitude make the day-to-day work fun.",
    author_name: "Gerhard Nuffer",
    author_designation: "Full-Stack Developer | Web Development Instructor",
    linkedin_url: "https://www.linkedin.com/in/gerhardnuffer/",
  },
  {
    id: "3",
    count: "5",
    src: "https://media.licdn.com/dms/image/C5103AQGWbXNpvh_xDw/profile-displayphoto-shrink_100_100/0/1517512569626?e=1726099200&v=beta&t=a_-TQ_ekLOqRJyj0b_f-PnTIAfEfTHIq7nsNLLu08E0",
    description:
      "Muhasin is a hard-working, dedicated colleague. Always reliable, polite and with a high level of integrity. Who wouldn't want to work with honest and intelligent people?",
    author_name: "Daniela Hollan",
    author_designation: "Lead Teaching Staff at Digital Career Institute GmbH",
    linkedin_url: "https://www.linkedin.com/in/daniela-hollan-861110117/",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 ">
      <SectionTitle text="Testimonial" />
      <div className="py-16 flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col bg-white p-6 rounded-lg shadow-md w-full md:w-5/12 lg:w-1/4 hover:shadow-xl duration-300"
          >
            <img
              src={testimonial.src}
              alt={testimonial.author_name}
              className="w-20 h-20 rounded-full mb-4 mx-auto object-cover border-2 border-emerald-100 shadow-lg"
            />
            <p className="mb-4 text-slate-700 leading-loose">
              {testimonial.description}
            </p>
            <div className="flex items-center">
              <div className="text-left">
                <hr />
                <a
                  href={testimonial.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-slate-700 leading-loose text-lg hover:underline hover:text-emerald-500"
                >
                  {testimonial.author_name}
                </a>
                <p className="text-sm text-slate-700 leading-loose font-bold mt-2">
                  {testimonial.author_designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
