import { useRef } from "react";
import Separator from "../utils/Separators/Separators";
import Slider from "react-slick";
import { featuredProperties } from "../../lib/data";
import FeaturedPropertyItem from "./FeaturedPropertyItem";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  fade: true,
  speed: 1000,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const FeaturedProperties = () => {
  const sliderRef = useRef<Slider>(null);
  return (
    <>
      <Separator />
      <section className="bg-paper">
        <div className="relative z-10 xl:custom-container bg-paper pt-10 md:pt-0 xl:mt-0 mb-7">
          <h1 className="text-center text-primary-dark font-medium">
            Check out
          </h1>
          <h2 className="text-center text-3xl">Featured Properties</h2>
          <p className="text-center text-black/60 mt-2 mb-7">
            View list of our short listed properties
          </p>
          {/* <FeaturedPropertyItem data={featuredProperties[0]} /> */}
          <div className="relative lg:w-[650px] xl:w-[60%]  mx-auto">
            <Slider ref={sliderRef} {...settings}>
              {featuredProperties.map((property) => (
                <div key={property.id} className="relative z-[5] px-2">
                  <FeaturedPropertyItem data={property} />
                </div>
              ))}
            </Slider>
            <div className="hidden lg:flex justify-between absolute top-1/2 -translate-y-1/2 -left-[150px] -right-[150px]">
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="duration-300 w-[70px] h-[70px] rounded-full flex items-center justify-center shadow-[0px_0px_0px_2px_rgba(0,0,0,0.05)] hover:bg-secondary hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path>
                </svg>
              </button>
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="duration-300 w-[70px] h-[70px] rounded-full flex items-center justify-center shadow-[0px_0px_0px_2px_rgba(0,0,0,0.05)] hover:bg-secondary hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProperties;
