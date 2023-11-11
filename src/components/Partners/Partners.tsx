import { partners } from "../../lib/data";

const Partners = () => {
  return (
    <>
      <section className="relative custom-container bg-default pt-10 md:pt-0 px-4 sm:px-5 lg:px-0">
        <h1 className="text-center text-primary-dark font-medium">Our</h1>
        <h2 className="text-center text-3xl">Partners</h2>
        <p className="text-center text-black/60 mt-2 mb-7">
          We honoured to have these amazing partners.
        </p>
        <div className={`relative duration-300 pb-10`}>
          <div className={`text-center`}>
            {partners.map((partner) => (
              <div
                key={partner}
                className={`inline-flex justify-center w-[80%] md:w-[30%] lg:w-[19%] mx-auto p-3 align-middle`}
              >
                <img src={partner} alt="Partner company logo" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
