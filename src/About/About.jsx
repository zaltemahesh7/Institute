import React from "react";

function About() {
  return (
    <div className="md:px-28 py-10">
      <div className=" flex flex-col m-auto text-center md:gap-6 max-sm:gap-3">
        <h1 className=" max-sm:text-4xl md:text-7xl">About SAI DHANVANTARI NURSING INSTITUTE </h1>
        <h1 className=" max-sm:text-4xl md:text-7xl text-[#07bcce]">
          A place for every one's best thinking
        </h1>
        <h2 className=" text-xl">We scratch, build & play together.</h2>
        <div className="flex md:gap-5 max-sm:flex-col max-sm:gap-4 items-center justify-center">
          <button className="border rounded-md md:py-5 md:px-6 bg-[#07bcce] text-white hover:text-[#07bcce] hover:bg-white">
            Explore Career
          </button>
          <button className=" border border-[#07bcce] text-[#07bcce] hover:bg-[#07bcce] hover:text-white rounded-md md:py-5 md:px-6">
            Life at EazyGrad
          </button>
        </div>
      </div>
      <div className=" flex justify-center md:py-3 max-sm:py-2">
        <iframe className=" md:w-[60rem] md:h-[35rem] max-sm:w-62 max-sm:h-48"
          src="https://www.youtube.com/embed/ggCDaAghFw8?si=Cbg4XTYzE8mj2lVV"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default About;
