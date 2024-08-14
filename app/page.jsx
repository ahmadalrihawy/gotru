import Features from "@components/Features/Features";
import Hero from "@components/Hero/Hero";
import Services from "@components/ServicesComponents/Services";
import Image from "next/image";
import image1 from "../public/assets/images/heroBg.jpeg";
import Technologies from "@components/Technologies/Technologies";
import Process from "@components/Process/Process";
import Footer from "@components/Footer/Footer";
function page() {
  return (
    <>
      <section className="hero-section">
        <Image src={image1} alt="bgImg" className="hero-image" />
        <Hero />
        <Features />
      </section>
      <section id="Service" className="services-section">
        <Services />
      </section>
      <section id="Technolgies">
        <Technologies />
      </section>
      <section id="Process">
        <Process />
      </section>
      <footer id="Contact">
        <Footer />
      </footer>
    </>
  );
}

export default page;
