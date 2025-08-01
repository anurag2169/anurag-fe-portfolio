"use client";

import Socials from "@/components/Socials";
import { FlipWords } from "@/components/ui/flipWords";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ExperienceDetails from "@/components/ExperienceDetails";
import ProjectSection from "@/components/projectSection";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(mainRef.current, {
      opacity: 1,
      duration: 2,
      ease: "power2.out",
      delay: 1,
    });
  }, []);

  return (
    <div
      className="w-full h-auto flex flex-col my-5 gap-5 text-[#111111] items-center relative opacity-0"
      ref={mainRef}
    >
      <div className="w-full h-full  max-w-screen-lg px-4 ">
        <section id="home" className="w-full h-full mb-40">
          <div className="w-full md:text-8xl text-5xl text-center   text-[#ff6f009a] font-light md:mb-20 mb-10 mt-10 md:py-16 py-8 header-font ">
            Build
            <FlipWords
              duration={2000}
              className="text-[#ff6f009a]"
              words={["adaptive", "dynamic", "beautiful", "elegant", "awesome"]}
            />
            web app with MERN stack
          </div>
          <div className="w-full flex md:flex-row flex-col ">
            <div className="md:w-1/2  w-full flex items-center  justify-center">
              <div className="md:w-[70%] w-[70%] rounded-xl">
                <div className="overflow-hidden">
                  <img
                    src="/images/Avatar.jpg"
                    alt="Anurag Dubey"
                    className="w-full h-full cursor-pointer rounded-xl hover:scale-105 duration-150 ease-in-out"
                    onClick={() => {
                      window.open("https://github.com/anurag2169");
                    }}
                  />
                </div>
                <Socials />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:text-lg text-sm  text-gray-600 md:text-left text-center mt-5">
              👋 Hi there, I&apos;m Anurag Dubey! I&apos;m a results-driven MERN
              stack developer with a passion for building cutting-edge web
              applications that make an impact. <br />
              <span className="md:flex hidden">
                I&apos;ve honed my skills in MongoDB, Express.js, React.js, and
                Node.js to deliver high-quality solutions tailored to meet
                specific user needs. With a strong foundation in full-stack
                development, I thrive in environments that challenge me to
                continuously learn and innovate.
              </span>
            </div>
          </div>
        </section>
        <section className="w-full h-auto  my-20">
          <Skills />
        </section>
        <section className="w-full  h-auto my-10">
          <ExperienceDetails />
        </section>
        <section className="w-full  h-auto my-10">
          {/* <Projects /> */}
          <ProjectSection />
        </section>
        <section className="w-full h-auto  my-10 ">
          <Contact />
        </section>
      </div>
    </div>
  );
}
