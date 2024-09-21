import React from "react";
import heroimg from "../../../assets/MarioandAdrianA.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-primary py-5 gap-10 md:gap-20">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 px-4">
        <h1 className="text-secondary uppercase text-3xl md:text-5xl">Little Lemon</h1>
        <h2 className="text-xl md:text-3xl">Chicago</h2>
        <p className="max-w-xs md:max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          asperiores placeat reiciendis et corrupti labore optio aut nam ut
          delectus eos quibusdam! Vero, quisquam quo adipisci odio quasi nemo
          qui!
        </p>
        <Link
          to="/reservation"
          className="bg-secondary mt-5 text-black px-3 py-2 rounded-lg"
        >
          Reserve a table
        </Link>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center px-4">
        <img className="w-full h-auto md:h-80 object-cover" src={heroimg} alt="hero image" />
      </div>
    </section>
  );
};

export default Hero;
