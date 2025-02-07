"use client";
import Slider from "react-slick";

const Projects = () => {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full md:py-10 py-2 ">
      <h2 className="md:text-3xl text-2xl  mb-8 text-gray-800 font-bold pb-5 border-b-[1px] border-gray-300">
        Projects
      </h2>
      <div className="  w-full border-[1px] border-gray-200  px-5 sm:py-12 py-8 rounded-xl flex  flex-col-reverse md:flex-row gap-4 my-6">
        <div className="md:w-[45%] w-full">
          <h1 className="md:text-xl text-lg font-bold  text-gray-800">
            Rise Stream /{" "}
            <span className="md:text-xl text-lg text-gray-700">
              A Video Hosting Platform
            </span>
          </h1>
          <p className="my-5 sm:block hidden text-base text-gray-500">
            A video streaming platform inspired by YouTube, built for hosting
            and watching videos with personalized recommendations.
          </p>

          <div className="md:block hidden">
            <h2 className="font-semibold text-lg text-gray-800 mt-5">
              Tech Used
            </h2>
            <div className="w-full mt-2 mb-6 flex justify-start md:gap-4 gap-2">
              <i className="ci ci-2x ci-react"></i>
              <i className="ci ci-2x ci-mongodb"></i>
              <i className="ci ci-2x ci-ts"></i>
              <i className="ci ci-2x ci-expressjs"></i>
              <i className="ci ci-2x ci-nodejs"></i>
              <i className="ci ci-2x ci-tailwindcss"></i>
              <i className="ci ci-2x ci-nextjs"></i>
            </div>
          </div>
          <div className="w-full my-3 flex gap-2">
            <a
              href="https://github.com/anurag2169/rise-stream-fe"
              target="_blank"
            >
              <button className="py-2 px-5 flex items-center justify-center gap-2 text-sm bg-white text-[#111111] rounded-[4px]  hover:px-10 duration-150 ease-in-out border-[1px] border-[#303030]">
                <i className="ci ci-ci-ci-xl ci-github"></i>
                Frontend
              </button>
            </a>
            <a
              href="https://github.com/anurag2169/RiseStream-backend"
              target="_blank"
            >
              <button className="py-2 px-5 flex items-center justify-center gap-2 text-sm bg-white text-[#111111] rounded-[4px]  hover:px-10 duration-150 ease-in-out border-[1px] border-[#303030]">
                <i className="ci ci-ci-ci-xl ci-github"></i>
                Backend
              </button>
            </a>
          </div>
          <a href="https://rise-stream-fe.vercel.app/home" target="_blank">
            <button className="w-full py-4 bg-neutral-900 text-white hover:tracking-wider rounded-[5px] flex justify-center items-center gap-1">
              Rise Stream
            </button>
          </a>
        </div>
        <div className="md:w-[55%] w-full overflow-hidden border-[1px] border-[#2020205d] rounded-xl">
          <Slider {...settings}>
            <img
              src={"/images/riseStream/first.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl object-cover"
            />
            <img
              src={"/images/riseStream/2.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl object-cover"
            />
            <img
              src={"/images/riseStream/3.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl object-cover"
            />
            <img
              src={"/images/riseStream/4.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl object-cover"
            />
            <img
              src={"/images/riseStream/5.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl object-cover"
            />
          </Slider>
        </div>
      </div>
      <div className="  w-full border-[1px] border-gray-200  px-5 sm:py-12 py-8 rounded-xl flex  flex-col-reverse md:flex-row gap-4 my-6">
        <div className="md:w-[45%] w-full">
          <h1 className="md:text-xl text-lg font-bold text-gray-800 text-gray-800">
            WebWorld /{" "}
            <span className="md:text-xl text-lg text-gray-700">
              Learning Platform
            </span>
          </h1>
          <p className="my-5 sm:block hidden text-base text-gray-500">
            An online learning platform designed for aspiring web developers.
            Whether you&apos;re just starting or looking to sharpen your skills,
            Web World offers comprehensive resources to help you grow as a
            developer.
          </p>
          <div className="md:block hidden">
            <h2 className="font-semibold text-lg text-gray-800 mt-5">
              Tech Used
            </h2>
            <div className="w-full mt-2 mb-6 flex justify-start md:gap-4 gap-2">
              <i className="ci ci-2x ci-react"></i>
              <i className="ci ci-2x ci-mongodb"></i>
              <i className="ci ci-2x ci-redis"></i>
              <i className="ci ci-2x ci-ts"></i>
              <i className="ci ci-2x ci-expressjs"></i>
              <i className="ci ci-2x ci-nodejs"></i>
              <i className="ci ci-2x ci-tailwindcss"></i>
            </div>
          </div>
          <div className="w-full my-3 flex gap-2">
            <a href="#" target="_blank">
              <button className="py-2 px-5 flex items-center justify-center gap-2 text-sm bg-white text-[#111111] rounded-[4px]  hover:px-10 duration-150 ease-in-out border-[1px] border-[#303030]">
                <i className="ci ci-ci-ci-xl ci-github"></i>
                Frontend
              </button>
            </a>
            <a href="#" target="_blank">
              <button className="py-2 px-5 flex items-center justify-center gap-2 text-sm bg-white text-[#111111] rounded-[4px]  hover:px-10 duration-150 ease-in-out border-[1px] border-[#303030]">
                <i className="ci ci-ci-ci-xl ci-github"></i>
                Backend
              </button>
            </a>
          </div>
          <a href="https://webworld.vercel.app/" target="_blank">
            <button className="w-full py-4 bg-neutral-900 text-white hover:tracking-wider rounded-[5px] flex justify-center items-center gap-1">
              WebWorld
            </button>
          </a>
        </div>
        <div className="md:w-[55%] w-full overflow-hidden border-[1px] border-[#2020205d] rounded-xl">
          <Slider {...settings}>
            <img
              src={"/images/Project3/p1.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project3/p2.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project3/p3.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project3/p4.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project3/p5.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
          </Slider>
        </div>
      </div>
      <div className="  w-full  border-[1px] border-gray-200 px-5 sm:py-12 py-8 rounded-xl flex  flex-col-reverse md:flex-row gap-4 my-6">
        <div className="md:w-[45%] w-full">
          <h1 className="md:text-xl text-lg font-bold text-gray-800 ">
            Shoes Hub /{" "}
            <span className="md:text-xl text-lg text-neutral-800">
              e-commerce
            </span>
          </h1>
          <p className="my-5 sm:block hidden text-base text-gray-500">
            Shoes Hub is a cutting-edge e-commerce platform. Designed for shoe
            enthusiasts, it promises seamless functionality and a captivating
            UI/UX for an exceptional shopping journey.
          </p>
          <div className="md:block hidden">
            <h2 className="font-semibold text-lg text-gray-800 mt-5">
              Tech Used
            </h2>
            <div className="w-full mt-2 mb-6 flex justify-start md:gap-4 gap-2">
              <i className="ci ci-2x ci-react"></i>
              <i className="ci ci-2x ci-redux"></i>
              <i className="ci ci-2x ci-mongodb"></i>
              <i className="ci ci-2x ci-redis"></i>
              <i className="ci ci-2x ci-ts"></i>
              <i className="ci ci-2x ci-tailwindcss"></i>
              <i className="ci ci-2x ci-nodejs"></i>
            </div>
          </div>
          <div className="w-full my-3 flex gap-2">
            <a href="" target="_blank">
              <button className="py-2 px-5 flex items-center justify-center gap-2 text-sm bg-white text-[#111111] rounded-[4px]  hover:px-10 duration-150 ease-in-out border-[1px] border-[#303030]">
                <i className="ci ci-ci-ci-xl ci-github"></i>
                Frontend
              </button>
            </a>
            <a href="" target="_blank">
              <button className="py-2 px-5 flex items-center justify-center gap-2 text-sm bg-white text-[#111111] rounded-[4px]  hover:px-10 duration-150 ease-in-out border-[1px] border-[#303030]">
                <i className="ci ci-ci-ci-xl ci-github"></i>
                Backend
              </button>
            </a>
          </div>
          <a href="https://online-shoeshub.vercel.app/" target="_blank">
            <button className="w-full py-4 bg-neutral-900 text-white hover:tracking-wider rounded-[5px] flex justify-center items-center gap-1">
              Shoes Hub
            </button>
          </a>
        </div>
        <div className="md:w-[55%] w-full overflow-hidden rounded-xl border-[1px] border-[#2020205d]">
          <Slider {...settings}>
            <img
              src={"/images/Project1/p1.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project1/p2.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project1/p3.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project1/p4.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
            <img
              src={"/images/Project1/p5.png"}
              alt=""
              loading="lazy"
              className="w-full md:h-[375px] rounded-xl"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
