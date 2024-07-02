import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Locations() {
  return (
    <Carousel>
      <div>
        <img src="/carousel_Images/Locations/Australia.webp" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="/carousel_Images/Locations/Australia.webp" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="/carousel_Images/Locations/Australia.webp" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default Locations;
