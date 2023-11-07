import { useRef, useState } from "react";
import { forSaleProperties } from "../../lib/data";
import Pagination from "../utils/Pagination/Pagination";
import { slowScrollTo } from "../../lib/utils";
import Separator from "../utils/Separators/Separators";
import ForSalePropertyItem from "./ForSalePropertyItem";

const ForSaleProperties = () => {
  const itemsContainerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const onPageChange = (page: number) => {
    setLoading(true);
    const elementToScroll = itemsContainerRef.current;
    //itemsContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    if (elementToScroll) {
      setTimeout(() => {
        setLoading(false);
        setCurrentPage(page);
        slowScrollTo(elementToScroll, 1000);
      }, 2000);
    }
  };

  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const totalPages = Math.ceil(forSaleProperties.length / itemsPerPage);

  const itemsToShow = forSaleProperties.slice(startIndex, endIndex);
  return (
    <>
      <Separator type="bottom" />
      <section className="relative z-10 xl:custom-container bg-default pt-10 md:pt-0 pb-10">
        <h1 className="text-center text-primary-dark font-medium">
          Properties
        </h1>
        <h2 className="text-center text-3xl">For Sale</h2>
        <p className="text-center text-black/60 mt-2 mb-7">
          Check out latest properties for sale.
        </p>
        <div
          ref={itemsContainerRef}
          className={`relative duration-300 pb-10 ${
            loading ? "-translate-y-7 origin-top" : ""
          }`}
        >
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 duration-200 ${
              loading ? "opacity-50 pointer-events-none" : "opacity-100"
            }`}
          >
            {itemsToShow.map((property) => (
              <div
                key={property.id}
                className={`md:[&:nth-child(3)]:col-span-2 md:[&:nth-child(3)]:justify-self-center md:[&:nth-child(3)]:w-[calc(50%-14px)] lg:[&:nth-child(3)]:w-full lg:[&:nth-child(3)]:col-span-1 relative ${
                  currentPage === totalPages && itemsToShow.length === 1
                    ? "md:col-span-3 md:justify-self-center md:w-[calc(50%-14px)] lg:w-[calc(33.3333%-18.65px)]"
                    : ""
                }`}
              >
                <ForSalePropertyItem data={property} />
              </div>
            ))}
          </div>
          {loading && (
            <div className="absolute w-full bottom-0 left-0 right-0 flex justify-center items-center">
              <svg
                className="animate-spin h-5 w-5 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          )}
        </div>

        <div className="flex justify-center items-center">
          <Pagination
            disabled={loading}
            currentPage={currentPage}
            totalPages={totalPages}
            onChange={onPageChange}
          />
        </div>
      </section>
    </>
  );
};

export default ForSaleProperties;
