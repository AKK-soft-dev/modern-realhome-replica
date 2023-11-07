import { useState } from "react";

const Search = () => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand((prev) => !prev);
  };
  return (
    <section className="w-full bg-default relative z-20 custom-container">
      <div className="xl:w-[90%] 2xl:w-full min-h-[90px] xl:-translate-y-[50%] mx-auto bg-paper flex flex-col xl:flex-row items-stretch xl:shadow border-t-2 xl:border-b-2 xl:border-none">
        <div className="xl:flex-1 flex flex-col md:flex-row flex-wrap items-stretch divide-x-2 divide-y-2 md:divide-y-0">
          <div className="flex-[2] flex flex-col sm:flex-row divide-x-2 divide-y-2 sm:divide-y-0">
            <div className="flex-1 h-[90px] px-6 py-4 flex flex-col justify-between items-start">
              <h6 className="font-medium text-sm">Location</h6>
              <button className="relative text-black/70 w-full pl-1 text-start flex justify-between items-center">
                <span>All Locations</span>
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="flex-1 h-[90px] px-6 py-4 flex flex-col justify-between items-start">
              <h6 className="font-medium text-sm">Property Status</h6>
              <button className="relative text-black/70 w-full pl-1 text-start flex justify-between items-center">
                <span>Any</span>
                <span className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="w-full flex-1 md:w-auto h-[90px] px-6 py-4 flex flex-col justify-between items-start">
            <h6 className="font-medium text-sm">Property Type</h6>
            <button className="relative text-black/70 w-full pl-1 text-start flex justify-between items-center">
              <span>All Types</span>
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        {/** Dropdown */}
        <div
          className={`xl:absolute overflow-hidden top-full left-0 xl:w-[calc(100%-250px)] bg-paper xl:shadow xl:z-10 duration-500 ${
            expand
              ? "h-[820px] sm:h-[500px] md:h-[315px] border-t-2"
              : "h-0 pointer-events-none"
          }`}
        >
          <div className="min-h-[270px] flex flex-col divide-y-2">
            {/** 1st row */}
            <div className="flex flex-col md:flex-row divide-x-2 divide-y-2 md:divide-y-0">
              {/** 1st column */}
              <div className="flex flex-1 flex-col sm:flex-row divide-x-0 sm:divide-x-2 divide-y-2 sm:divide-y-0">
                <div className="flex-1 h-[90px] px-6 py-4 flex flex-col justify-between items-start">
                  <h6 className="font-medium text-sm">Min Beds</h6>
                  <button className="relative text-black/70 w-full pl-1 text-start flex justify-between items-center">
                    <span>Any</span>
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="flex-1 h-[90px] px-6 py-4 flex flex-col justify-between items-start">
                  <h6 className="font-medium text-sm">Min Baths</h6>
                  <button className="relative text-black/70 w-full pl-1 text-start flex justify-between items-center">
                    <span>Any</span>
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              {/** 2nd column */}
              <div className="flex flex-1 flex-col sm:flex-row divide-x-0 sm:divide-x-2 divide-y-2 sm:divide-y-0">
                <div className="flex-1 h-[90px] px-6 py-4 flex flex-col justify-between items-start">
                  <h6 className="font-medium text-sm">Min Price</h6>
                  <button className="relative text-black/70 w-full pl-1 text-start flex justify-between items-center">
                    <span>Any</span>
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="flex-1 h-[90px] px-6 py-4 flex flex-col justify-between items-start">
                  <h6 className="font-medium text-sm">Max Price</h6>
                  <button className="relative text-black/70 w-full pl-1 text-start flex justify-between items-center">
                    <span>Any</span>
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/** 2nd row */}
            <div className="flex flex-col md:flex-row divide-x-2 divide-y-2 md:divide-y-0">
              {/** 1st column */}
              <div className="flex flex-1 flex-col sm:flex-row divide-x-0 sm:divide-x-2 divide-y-2 sm:divide-y-0">
                <div className="flex-1 h-[90px] px-6 py-4 flex flex-col justify-between items-start">
                  <h6 className="font-medium text-sm">Min Garage</h6>
                  <button className="relative text-black/70 w-full pl-1 text-start flex justify-between items-center">
                    <span>Any</span>
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="flex-1 h-[90px] px-6 py-4 flex flex-col justify-between items-start">
                  <h6 className="font-medium text-sm">Agents</h6>
                  <button className="relative text-black/70 w-full pl-1 text-start flex justify-between items-center">
                    <span>ALl Agents</span>
                    <span className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              {/** 2nd column */}
              <div className="flex flex-1 flex-col sm:flex-row divide-x-0 sm:divide-x-2 divide-y-2 sm:divide-y-0">
                <div className="flex-1 h-[90px] px-6 py-4 flex flex-col justify-between items-start">
                  <h6 className="font-medium text-sm">Min Area (sq ft)</h6>
                  <button className="relative text-black/70 w-full text-start flex justify-between items-center">
                    <span>Any</span>
                  </button>
                </div>
                <div className="flex-1 h-[90px] px-6 py-4 flex flex-col justify-between items-start">
                  <h6 className="font-medium text-sm">Min Area (sq ft)</h6>
                  <button className="relative text-black/70 w-full text-start flex justify-between items-center">
                    <span>Any</span>
                  </button>
                </div>
              </div>
            </div>
            {/** 3rd row */}
            <div className="flex flex-col sm:flex-row divide-x-0 sm:divide-x-2 divide-y-2 sm:divide-y-0">
              {/** 1st column */}
              <div className="flex-1 h-[90px] px-6 py-4 flex flex-col justify-between items-start">
                <h6 className="font-medium text-sm">Min Area (sq ft)</h6>
                <button className="relative text-black/70 w-full text-start flex justify-between items-center">
                  <span>Any</span>
                </button>
              </div>
              {/** 2nd column */}
              <div className="flex-1 h-[90px] px-6 py-4 flex flex-col justify-between items-start">
                <h6 className="font-medium text-sm">Min Area (sq ft)</h6>
                <button className="relative text-black/70 w-full text-start flex justify-between items-center">
                  <span>Any</span>
                </button>
              </div>
            </div>
          </div>
          <div className="h-10 flex items-center px-7 bg-black/80 xl:bg-primary text-white text-xs">
            <span>+ Looking for certain features</span>
          </div>
        </div>
        {/** Button Group */}
        <div className="min-w-[250px] h-[90px] flex items-stretch">
          <div className="relative">
            <button
              onClick={toggleExpand}
              className="relative w-[80px] h-full bg-primary-dark/90 hover:bg-primary-dark duration-300 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path
                  d="M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z"
                  opacity="0.2"
                ></path>
                <path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Zm112,0a8,8,0,0,1-8,8H120v24a8,8,0,0,1-16,0V120H80a8,8,0,0,1,0-16h24V80a8,8,0,0,1,16,0v24h24A8,8,0,0,1,152,112Z"></path>
              </svg>
            </button>
            <div className="absolute top-full right-[40%] w-[150px] hidden xl:flex items-end justify-end">
              <span className="flex-1 px-1 text-xs block font-semibold text-end relative top-[5px]">
                Advance Search
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="32"
                viewBox="0 0 37 32"
              >
                <g fill="none">
                  <g stroke="#000000">
                    <path d="M31 1C31 21 20.8 31 0.5 31"></path>
                    <path d="M25 8C25 8 26.9 5.7 30.8 1L36 8"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <button className="flex-1 bg-primary hover:bg-primary-dark duration-300 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path
                d="M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z"
                opacity="0.2"
              ></path>
              <path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
            <span className="text-white ml-1">Search</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
