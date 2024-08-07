import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
