import { FeaturedPropertyType } from "../Hero/definitions";
import Tooltip from "../utils/Tooltip/Tooltip";

const FeaturedPropertyItem = ({
  data: {
    backdrop,
    title,
    description,
    bedrooms,
    bathrooms,
    area,
    status,
    price,
  },
}: {
  data: FeaturedPropertyType;
}) => {
  return (
    <div className="relative flex flex-col w-full">
      <div className="relative text-white">
        <a href="#" className="">
          <img
            src={backdrop}
            alt=""
            className="w-full max-h-[420px] aspect-video"
          />
        </a>
      </div>

      <div className="relative py-8 px-7 -mt-16 bg-paper w-[95%] md:w-[80%] mx-auto shadow-md">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-black/60 flex items-center mt-3">{description}</p>

        <div className="mt-5 flex items-center gap-4 text-sm text-black/90 font-medium">
          {bedrooms && (
            <div className="flex flex-col gap-2">
              <h6>Bedrooms</h6>
              <div className="flex text-black/30 items-center gap-2">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M208,72H24V48A8,8,0,0,0,8,48V208a8,8,0,0,0,16,0V176H232v32a8,8,0,0,0,16,0V112A40,40,0,0,0,208,72ZM24,88H96v72H24Z"></path>
                </svg>
                <span className="text-black/70">{bedrooms}</span>
              </div>
            </div>
          )}
          {bathrooms && (
            <div className="flex flex-col gap-2">
              <h6>Bathrooms</h6>
              <div className="flex text-black/30 items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M64,236a12,12,0,1,1-12-12A12,12,0,0,1,64,236Zm20-44a12,12,0,1,0,12,12A12,12,0,0,0,84,192Zm-64,0a12,12,0,1,0,12,12A12,12,0,0,0,20,192Zm32-32a12,12,0,1,0,12,12A12,12,0,0,0,52,160ZM248,32H219.31A15.86,15.86,0,0,0,208,36.69L180.14,64.54,53.38,86.19a16,16,0,0,0-8.69,27.1l98,98a16,16,0,0,0,27.09-8.66L191.46,75.86,219.31,48H248a8,8,0,0,0,0-16Z"></path>
                </svg>
                <span className="text-black/70">{bathrooms}</span>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <h6>Area</h6>
            <div className="flex text-black/30 items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z"
                  opacity="0.2"
                ></path>
                <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Z"></path>
              </svg>
              <span className="text-black/70">
                {area} <span className="text-black/60">Sq Ft</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <div className="font-medium">
            <h6 className="text-sm">{status}</h6>
            <p className="text-2xl sm:text-xl text-primary">
              ${price.toLocaleString()} {status === "For Rent" && "Monthly"}
            </p>
          </div>
          <div className="flex gap-2 text-black/30">
            <div className="relative group/tooltip hover:text-red-500">
              <Tooltip
                title="ADD TO FAVORITE"
                bgColor="bg-orange-600"
                top="-top-[20px]"
                tooltipArrowColor="border-orange-600"
                shadow
                animate
              />
              <button className="relative h-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M240,98a57.63,57.63,0,0,1-17,41L133.7,229.62a8,8,0,0,1-11.4,0L33,139a58,58,0,0,1,82-82.1L128,69.05l13.09-12.19A58,58,0,0,1,240,98Z"></path>
                </svg>
              </button>
            </div>

            <div className="relative group/tooltip hover:text-orange-600 ">
              <Tooltip
                title="ADD TO COMPARE"
                top="-top-[20px]"
                bgColor="bg-orange-600"
                tooltipArrowColor="border-orange-600"
                shadow
                animate
              />
              <button className="h-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M42.34,85.66a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,88,48V72H208a8,8,0,0,1,0,16H88v24a8,8,0,0,1-13.66,5.66Zm171.32,84.68-32-32A8,8,0,0,0,168,144v24H48a8,8,0,0,0,0,16H168v24a8,8,0,0,0,13.66,5.66l32-32A8,8,0,0,0,213.66,170.34Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute left-0 bottom-full w-24 h-7 bg-secondary duration-300 group-hover/contact:bg-primary text-white featured-batch translate-y-1/2">
          <span className="w-[85%] h-full flex items-center justify-center text-sm">
            Featured
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPropertyItem;
