import React from "react";
import imga from "../../../assets/MarioandAdrianA.jpg";
import imgb from "../../../assets/MarioandAdrianb.jpg";

const Aboutus = () => {
  return (
    <section id="aboutus" className="grid grid-cols-1 md:grid-cols-2 my-32 mx-4 md:mx-64">
      <h2 className="text-5xl col-span-2 font-semibold">About Us</h2>
      <div className="inline-flex items-center flex-col gap-5 md:col-span-1">
        <h1 className="text-secondary text-left">Little Lemon</h1>
        <h2 className="text-left">Chicago</h2>
        <p className="w-full md:w-2/3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          asperiores placeat reiciendis et corrupti labore optio aut nam ut
          delectus eos quibusdam! Vero, quisquam quo adipisci odio quasi nemo
          qui! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
          nostrum eius commodi, reiciendis voluptatibus deleniti earum excepturi
          inventore dolores maiores maxime aut optio, molestias dolorum
          perspiciatis assumenda? Ut, facilis veniam!
        </p>
      </div>
      <div className="relative w-full md:flex md:justify-center">
        <div className="absolute top-1/5 left-1/4 md:relative md:w-64 md:h-80">
          <img
            src={imga}
            alt="First"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute top-1/3 left-1/6 md:relative md:w-64 md:h-80">
          <img
            src={imgb}
            alt="Second"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;