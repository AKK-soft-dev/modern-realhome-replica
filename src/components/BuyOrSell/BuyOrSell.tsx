import Separator from "../utils/Separators/Separators";

const BuyOrSell = () => {
  return (
    <section
      className="h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] relative bg-fixed bg-cover text-center text-white flex items-center justify-center"
      style={{ backgroundImage: "url(/cta-bg.jpg)" }}
    >
      <div className="w-[85%] md:w-[70%] 2xl:w-[50%] flex flex-col items-center justify-center gap-7">
        <h1 className="font-medium">Buy or Sell</h1>
        <p className="text-2xl block md:text-4xl">
          <span className="leading-normal">
            Looking to Buy a new property or Sell an existing one? RealHomes
            provides an awesome solution!
          </span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="#"
            className="px-4 py-3 bg-secondary hover:bg-secondary/80 duration-200"
          >
            Submit Property
          </a>
          <a
            href="#"
            className="px-4 py-3 bg-slate-500/60 hover:bg-slate-500/80 duration-200"
          >
            Browse Property
          </a>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 w-full">
        <Separator type="bottom" />
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <Separator bgColor="bg-default" />
      </div>
    </section>
  );
};

export default BuyOrSell;
