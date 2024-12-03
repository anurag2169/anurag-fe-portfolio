"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/movingCards";

interface Skill {
  name: string;
  iconClass: string;
  link?: string;
}

const Skills: React.FC = () => {
  const skillsData = {
    frontend: [
      { name: "HTML", iconClass: "ci ci-html" },
      { name: "React.js", iconClass: "ci ci-react" },
      { name: "Next.js", iconClass: "ci ci-nextjs" },
      { name: "Angular", iconClass: "ci ci-angular" },
      { name: "Remix", iconClass: "/socialIcons/remix-run-fill.svg" },
      { name: "JavaScript", iconClass: "ci ci-js" },
      { name: "TypeScript", iconClass: "ci ci-ts" },
      { name: "Redux Toolkit", iconClass: "ci ci-redux" },
      { name: "Tailwind CSS", iconClass: "ci ci-tailwindcss" },
      { name: "Bootstrap", iconClass: "ci ci-bootstrap" },
      { name: "MUI", iconClass: "ci ci-mui" },
      { name: "Shadcn UI", iconClass: "/socialIcons/shadcn-ui-seeklogo.png" },
      { name: "Angular Material", iconClass: "ci ci-angular" },
      { name: "Prime Ng", iconClass: "ci ci-angular" },
      { name: "Emotion", iconClass: "/socialIcons/emotion.png" },
      { name: "Styled Components", iconClass: "/socialIcons/styled-components.svg" },
      { name: "Storybook", iconClass: "/socialIcons/storybook-icon.svg" },
    ],
    backend: [
      { name: "Express.js", iconClass: "ci ci-expressjs" },
      { name: "Node.js", iconClass: "ci ci-nodejs" },
      { name: "MongoDB", iconClass: "ci ci-mongodb" },
      { name: "MySQL", iconClass: "ci ci-mysql" },
      { name: "Redis", iconClass: "ci ci-redis" },
      { name: "Multer", iconClass: "ci ci-folder" },
    ],
    productivity: [
      { name: "Git", iconClass: "ci ci-git" },
      { name: "GitHub", iconClass: "ci ci-github" },
      { name: "Postman", iconClass: "ci ci-postman" },
      { name: "Vercel", iconClass: "ci ci-vercel" },
      { name: "Figma", iconClass: "ci ci-figma" },
      { name: "VS Code", iconClass: "ci ci-vscode" },
    ],
    Authentication: [
      { name: "Next Auth", iconClass: "/socialIcons/nextauth.svg" },
      { name: "JWT", iconClass: "/socialIcons/jwt-3.svg" },
      { name: "Keycloak", iconClass: "/socialIcons/keycloak.svg" },
    ],
    Cms: [
      { name: "Strapi", iconClass: "/socialIcons/strapi.png" },
      { name: "Cloudinary", iconClass: "/socialIcons/cloudinary-2.svg" },
    ],
    Containerization: [{ name: "Docker", iconClass: "ci ci-docker" }],
  };

  const renderSkills = (skills: Skill[]) => {
    return skills.map((skill, index) => (
      <div
        key={index}
        className="bg-gray-100 flex justify-center gap-4 items-center py-3  rounded-[5px] shadow-md ring-2 ring-white ring-opacity-75 select-none"
      >
        {skill.iconClass.startsWith("ci") ? (
          <i className={`${skill.iconClass} ci-2x`}></i>
        ) : (
          <img className="w-8 h-8" src={`${skill.iconClass}`} alt={`${skill.name}`} />
        )}

        <span className="md:text-base text-sm text-gray-800">{skill.name}</span>
      </div>
    ));
  };

  return (
    <div className="w-full">
      <h2 className="md:text-3xl text-2xl  mb-8 text-gray-800 font-bold pb-5 border-b-[1px] border-gray-300">
        Tech Stack
      </h2>
      <div className="md:grid hidden gap-10">
        <div>
          <h3 className="md:text-xl text-lg   text-gray-800 my-4">Frontend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {renderSkills(skillsData.frontend)}
          </div>
        </div>
        <div>
          <h3 className="md:text-xl text-lg   text-gray-800 my-4">Backend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {renderSkills(skillsData.backend)}
          </div>
        </div>
        <div>
          <h3 className="md:text-xl text-lg   text-gray-800 my-4">
            Productivity
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {renderSkills(skillsData.productivity)}
          </div>
        </div>
        <div>
          <h3 className="md:text-xl text-lg   text-gray-800 my-4">
            Authentication
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {renderSkills(skillsData.Authentication)}
          </div>
        </div>
        <div>
          <h3 className="md:text-xl text-lg   text-gray-800 my-4">
            Content Management System
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {renderSkills(skillsData.Cms)}
          </div>
        </div>
        <div>
          <h3 className="md:text-xl text-lg   text-gray-800 my-4">
            Containerization
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {renderSkills(skillsData.Containerization)}
          </div>
        </div>
      </div>
      <div className="md:hidden block w-full">
        <div>
          <h3 className="font-bold text-lg   text-gray-800 mt-2">Frontend</h3>
          <InfiniteMovingCards items={skillsData.frontend} />
        </div>
        <div>
          <h3 className="font-bold text-lg   text-gray-800 mt-2">Backend</h3>
          <InfiniteMovingCards items={skillsData.backend} />
        </div>
        <div>
          <h3 className="font-bold text-lg   text-gray-800 mt-2">
            Productivity
          </h3>
          <InfiniteMovingCards items={skillsData.productivity} />
        </div>
        <div>
          <h3 className="font-bold text-lg   text-gray-800 mt-2">
          Authentication
          </h3>
          <InfiniteMovingCards items={skillsData.Authentication} />
        </div>
        <div>
          <h3 className="font-bold text-lg   text-gray-800 mt-2">
          Content Management System
          </h3>
          <InfiniteMovingCards items={skillsData.Cms} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
