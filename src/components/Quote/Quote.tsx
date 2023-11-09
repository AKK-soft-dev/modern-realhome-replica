import Separator from "../utils/Separators/Separators";

const Quote = () => {
  return (
    <section className="h-[400px] md:h-[500px] lg:h-[600px] xl:h-[850px] relative bg-fixed bg-cover text-center bg-primary text-white flex items-center justify-center">
      <div className="w-[85%] md:w-[70%] 2xl:w-[50%] flex flex-col items-center justify-center gap-7">
        <blockquote className="text-2xl block md:text-4xl">
          <span className="leading-normal">
            I have been looking at this theme for a long time so I decided to
            check it out and I am so happy I did its great. The quality of the
            work is exceptional. I have decided I am going to use it on multiple
            projects and cant wait to get them up and running. It just works.
          </span>
        </blockquote>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <p className="text-2xl md:text-3xl font-medium">Netang</p>
          <a href="#" className="underline">
            https://1.envato.market/realhomes
          </a>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 w-full">
        <Separator type="bottom" bgColor="bg-default" />
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <Separator bgColor="bg-default" />
      </div>
    </section>
  );
};

export default Quote;
