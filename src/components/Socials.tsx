"use client";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const icons = [
  {
    icon: "./socialIcons/github.svg",
    delay: 0,
    link: "https://github.com/anurag2169",
    name: "github",
  },
  {
    icon: "./socialIcons/linkedin.svg",
    delay: 0.5,
    link: "https://www.linkedin.com/in/anuragdubey2169/",
    name: "linkedin",
  },
  {
    icon: "./socialIcons/twitter.svg",
    delay: 1.5,
    link: "https://x.com/anurag270569",
    name: "twitter",
  },
  {
    icon: "./socialIcons/instagram.svg",
    delay: 2,
    link: "https://www.instagram.com/anurag2169/",
    name: "instagram",
  },
  {
    icon: "./socialIcons/gmail.svg",
    delay: 2,
    link: "mailto:anuragd2169@gmail.com?subject=Hello%20Anurag&body=Hi%20Anurag,%0D%0A%0D%0AHow%20are%20you?",
    name: "email",
  },
];
const Socials: React.FC = () => {
  return (
    <div className="z-40 flex w-full items-center justify-center mt-8 gap-4 ">
      {icons.map((icon, index) => (
        <TooltipProvider delayDuration={90} key={index}>
          <Tooltip>
            <TooltipTrigger>
              <Link href={icon.link} target="_blank">
                <img src={icon.icon} className="md:w-7 w-6 "></img>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm text-[#fff]">{icon.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};
export default Socials;
