import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Certifications } from "@/components/sections/certifications";
import { Services } from "@/components/sections/services";

import { Experience } from "@/components/sections/experience";
import { TechStack } from "@/components/sections/tech-stack";


import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Services />
        <TechStack />
        <Experience />
        
        
        
        <Contact />
      </main>
      <Footer />
    </>
  );
}
