import React from "react";
import SectionTitle from "./SectionTitle";

function ContactForm() {
  return (
    <section
      id="contact"
      className="flex items-center justify-center md-h-screen py-20 px-4 sm:px-6 lg:px-8 "
    >
      <div className="w-full max-w-4xl">
        <SectionTitle text="Contact Me" />
        {/* <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
          Contact Me
        </h2> */}
        <p className="mt-4 text-lg  text-center text-slate-700 leading-loose">
          Feel free to reach out for collaborations or just a friendly hello 😊
        </p>
        <div className="mt-8 sm:mt-12">
          <div className="w-10/12 mx-auto md:w-8/12 lg:w-6/12 bg-white p-6 rounded-lg shadow-md hover:shadow-xl duration-300">
            <form
              action="https://formspree.io/f/mwkgrvro"
              method="POST"
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  value="Submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
