import { FC } from "react";
import heroImg from "../assets/hero-image.png";
import { Link } from "react-router-dom";

const Hero: FC = () => {
  return (
    <div className="h-[660px] md:h-[600px] flex flex-col items-center text-center">
      <h1 className="text-primary text-2xl md:text-4xl font-bold lg:w-10/12 mt-5 md:mt-10 leading-[40px] md:leading-[50px]">
        Keep Your Data Organized & Drive Smarter Decisions with Sustainable Data
        Analytics
      </h1>
      <p className="lg:w-9/12 mt-5 text-base md:text-xl text-black font-semibold">
        I'm Daniel Olanloye, a passionate data analyst dedicated to transforming
        complex data into actionable insights. With a focus on sustainability, I
        help businesses organize their data to achieve long-term success while
        making responsible, data-driven decisions.
      </p>
      <Link to="/projects" className="bg-primary px-10 mt-5 py-5 rounded-full text-white font-medium text-lg hover:bg-white hover:text-primary transition-all duration-300 ease-in-out border border-white hover:border-primary">
        Discover My Works
      </Link>
      <div className="mt-10 w-full h-auto flex-1 image-contain rounded-t-3xl overflow-hidden bg-gradient-to-r from-primary via-primary/30 to-primary">
        <div className="backdrop-blur-lg bg-white/30 px-8 md:px-10 pt-8 md:pt-10">
          <img src={heroImg} alt="hero-img" className="w-full h-auto rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
