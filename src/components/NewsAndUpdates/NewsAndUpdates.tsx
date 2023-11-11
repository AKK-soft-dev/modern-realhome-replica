import { newsAndUpdates } from "../../lib/data";
import NewsAndUpdateItem from "./NewsAndUpdateItem";

const NewsAndUpdates = () => {
  return (
    <>
      <section className="relative custom-container bg-default pt-10 md:pt-0  px-54 sm:px-5 lg:px-0">
        <h1 className="text-center text-primary-dark font-medium">
          Check out recent
        </h1>
        <h2 className="text-center text-3xl">News & Updates</h2>
        <p className="text-center text-black/60 mt-2 mb-7">
          From real estate industry and beyond.
        </p>
        <div className={`relative duration-300 pb-10`}>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 duration-200`}
          >
            {newsAndUpdates.map((property) => (
              <div
                key={property.id}
                className={`md:[&:nth-child(3)]:col-span-2 md:[&:nth-child(3)]:justify-self-center md:[&:nth-child(3)]:w-[calc(50%-14px)] lg:[&:nth-child(3)]:w-full lg:[&:nth-child(3)]:col-span-1 relative`}
              >
                <NewsAndUpdateItem data={property} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsAndUpdates;
