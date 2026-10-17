// @own
import { About } from "@components/about/about";
import { Contact } from "@components/contact/contact";
import { Experience } from "@components/experience/experience";
import { Footer } from "@components/footer/footer";
import { Header } from "@components/header/header";
import { Hero } from "@components/hero/hero";
import { Projects } from "@components/projects/projects";

const Page = () => {
  return (
    <>
      <Header />
      <main className="site">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Page;
