import Slider from "react-slick";
import { heroImgData } from "../../lib/data";
import SliderItem from "./SliderItem";
import { useRef } from "react";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  fade: true,
  speed: 2000,
  autoplaySpeed: 5000,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
};

const Hero = () => {
  const sliderRef = useRef<Slider>(null);
  return (
    <section className="mb-10 group overflow-x-hidden -z-10">
      <Slider ref={sliderRef} {...settings}>
        {heroImgData.map((heroImg, i) => (
          <SliderItem key={i} heroImg={heroImg} />
        ))}
      </Slider>
      <div className="absolute top-1/2 -translate-y-1/2 left-5 right-7 flex justify-between">
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="-translate-x-20 duration-300 group-hover:translate-x-0 w-[38px] h-[38px] rounded-full flex items-center justify-center bg-secondary/80 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"></path>
          </svg>
        </button>
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="translate-x-20 duration-300 group-hover:translate-x-0 w-[38px] h-[38px] rounded-full flex items-center justify-center bg-secondary/80 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
