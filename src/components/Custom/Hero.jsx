/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div>
      <div className="flex h-screen justify-center items-center dark:bg-gray-800">
        <div className="text-center max-w-6xl mx-10">
          <p className="my-3 text-sm tracking-widest text-indigo-500 uppercase">
            Fast &amp; SEO friendly
          </p>
          <h1 className="my-3 text-3xl font-bold tracking-tight text-gray-800 md:text-5xl dark:text-gray-100">
            Plan Your Perfect Trip Effortlessly
          </h1>
          <div>
            <p className="max-w-2xl mx-auto my-2 text-base text-gray-500 md:leading-relaxed md:text-xl dark:text-gray-400">
              Discover our cutting-edge AI trip planner, designed to create your
              ideal travel experience in no time. Start planning quickly and
              easily with our advanced solutions, tailored to meet all your
              travel needs.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
            <Link to={"/create_trip"}>
              <Button>Get Started it's Free</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
