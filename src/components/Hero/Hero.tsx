import Slider from "react-slick";
import { heroImgData } from "../../lib/data";
import SliderItem from "./SliderItem";
import { useRef } from "react";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  fade: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Hero = () => {
  const sliderRef = useRef<Slider>(null);
  return (
    <section className="mb-10 relative group overflow-x-hidden">
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
            <path d="M112,56V200L40,128Z" opacity="0.2"></path>
            <path d="M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"></path>
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
            <path d="M216,128l-72,72V56Z" opacity="0.2"></path>
            <path d="M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
