import { CarouselItemType } from "./definitions";

const Featured = ({
  data: { title, description, bedrooms, bathrooms, area, status, price },
}: {
  data: CarouselItemType;
}) => {
  return (
    <div className="xl:hidden w-[90%] sm:w-[80%] md:w-[450px] absolute bottom-7 md:bottom-12 lg:bottom-0  lg:-translate-y-1/2 right-1/2 translate-x-1/2 md:translate-x-0 md:right-16  p-7 bg-paper">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="hidden lg:block text-black/70 text-sm mt-4">
        {description}
      </p>
      <div className="mt-7 hidden lg:flex items-center gap-4 text-sm text-black/70 font-medium">
        <div className="flex flex-col">
          <h6>Bedrooms</h6>
          <div className="flex text-primary items-center gap-2">
            <svg
              className="text-primary"
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
        <div className="flex flex-col">
          <h6>Bathrooms</h6>
          <div className="flex text-primary items-center gap-2">
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
        <div className="flex flex-col">
          <h6>Area</h6>
          <div className="flex text-primary items-center gap-2">
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
            <span className="text-black/70">{area} Sq Ft</span>
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm text-black/70 font-medium">
        <h6>{status}</h6>
        <p className="text-xl text-primary">
          ${price.toLocaleString()} {status === "For Rent" && "Monthly"}
        </p>
      </div>
      <div className="absolute left-0 bottom-full w-24 h-8 bg-secondary duration-300 group-hover/contact:bg-primary text-white featured-batch translate-y-4">
        <span className="w-[85%] h-full flex items-center justify-center text-sm">
          Featured
        </span>
      </div>
    </div>
  );
};

export default Featured;
