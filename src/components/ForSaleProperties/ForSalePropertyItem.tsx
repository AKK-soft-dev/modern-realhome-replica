import { ForSalePropertyType } from "../Hero/definitions";
import Tooltip from "../utils/Tooltip/Tooltip";

const ForSalePropertyItem = ({
  data: {
    backdrop,
    title,
    location,
    addedDate,
    bedrooms,
    bathrooms,
    area,
    status,
    price,
    photos,
    videos,
    agent,
    featured,
    hot,
    type,
  },
}: {
  data: ForSalePropertyType;
}) => {
  return (
    <div className="relative flex flex-col w-full shadow-md text-sm bg-paper">
      <div className="relative group/top">
        <div className="relative text-white overflow-hidden ">
          <a href="#" className="">
            <img
              src={backdrop}
              alt=""
              className="w-full height-auto scale-110 group-hover/top:scale-100 duration-300"
            />
          </a>

          <div className="absolute top-0 left-0 w-full bg-gradient-to-b p-2 flex gap-3 from-black/70">
            <button className="flex items-center gap-1 p-1 bg-black/70 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm-44,76a36,36,0,1,1-36-36A36,36,0,0,1,164,132Z"></path>
              </svg>
              <span>{photos}</span>
            </button>
            <button className="flex items-center gap-1 p-1 bg-black/70 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM184,56h32V72H184ZM72,200H40V184H72ZM72,72H40V56H72Zm48,128H88V184h32Zm0-128H88V56h32Zm48,128H136V184h32Zm0-128H136V56h32Zm48,128H184V184h32v16Z"></path>
              </svg>
              <span>{videos}</span>
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full px-5 py-2 flex justify-between items-center bg-gradient-to-t from-black/70 to-transparent">
            <span className="font-medium">{type}</span>
            <span className="bg-black px-2 py-1 rounded-md">{status}</span>
          </div>
        </div>

        <div className="absolute top-0 right-2 flex gap-3 text-white">
          {featured && (
            <div className="relative group/tooltip">
              <Tooltip title="Featured" />
              <div className="overflow-hidden">
                <div className="ribbon-shape relative w-6 h-10 bg-green-500 -mt-2 duration-150 hover:mt-0 cursor-pointer">
                  <div className="h-full pt-1 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {hot && (
            <div className="relative group/tooltip">
              <Tooltip title="Hot" />
              <div className="overflow-hidden">
                <div className="ribbon-shape relative w-6 h-10 bg-red-500 -mt-2 duration-150 hover:mt-0 cursor-pointer">
                  <div className="h-full pt-1 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M143.38,17.85a8,8,0,0,0-12.63,3.41l-22,60.41L84.59,58.26a8,8,0,0,0-11.93.89C51,87.53,40,116.08,40,144a88,88,0,0,0,176,0C216,84.55,165.21,36,143.38,17.85Zm40.51,135.49a57.6,57.6,0,0,1-46.56,46.55A7.65,7.65,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="pt-8 pb-4 px-5">
        <h3 className="text-lg font-medium">{title}</h3>
        <a href="#" className="text-blue-500 flex items-center mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path>
          </svg>
          <span className="underline decoration-solid decoration-blue-500">
            {location}
          </span>
        </a>
        <p className="text-black/80 mt-2">
          Added: <span className="text-black/60">{addedDate}</span>
        </p>

        <div className="mt-2 flex items-center gap-4 text-sm text-black/90 font-medium">
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

        <div className="flex justify-between mt-3">
          <div className="font-medium">
            <h6>{status}</h6>
            <p className="text-lg sm:text-xl text-green-600">
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
      </div>

      {/** Agent */}
      <div className="mx-2 mb-2 px-2 py-3 bg-default">
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-12 h-12 rounded-full p-[2px] bg-white duration-100 hover:bg-slate-400"
          >
            <img
              src={agent.photo}
              alt={`${agent.name}'s photo`}
              className="w-full h-full rounded-full"
            />
          </a>
          <div className="flex flex-col">
            <a
              href="#"
              className="text-black font-medium hover:text-black/80 duration-100"
            >
              {agent.name}
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-slate-700 duration-100"
            >
              {agent.type}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForSalePropertyItem;
