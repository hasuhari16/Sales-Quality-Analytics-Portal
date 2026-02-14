import React from "react";
import Slider from "react-slick";
import SliderImage from "./SliderImages";
import Outlet from "../images/Analysis_SS/Outlets.png";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <>
      <div className="sliderCont">
        <Slider {...settings}>
          {SliderImage.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`SS_${index}`} className="sImg" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="abt">
        <h1>ABOUT US</h1>
        <p>
          XYZ Retail Chain is a Bangalore-based retail organization operating 10
          outlets across the city. As the business expands, leadership requires
          a unified analytics platform that provides consolidated visibility
          into both sales performance and operational quality metrics. This
          portal has been designed to centralize insights, enhance
          decision-making, and ensure alignment with the XYZ brand identity.
        </p>
      </div>

      <div>
        <h1 style={{ textAlign: "center", color: "#004975" }}>OUTLETS</h1>
        <img src={Outlet} alt="Outlet" />
      </div>
    </>
  );
}
