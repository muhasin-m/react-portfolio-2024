import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section id="footer" className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center md:text-left">
        <p
          className="text-xs md:text-base lg:text-lg  flex
      justify-center"
        >
          &copy; {currentYear} Muhasin Mahmud.{" "}
          <br className="block md:hidden" />
          All rights reserved.
        </p>
      </div>

      <ScrollToTopButton />
    </section>
  );
};

export default Footer;
