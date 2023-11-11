import Separator from "../utils/Separators/Separators";

const Quote = () => {
  return (
    <section className="relative h-[600px] sm:h-[400px] md:h-[1000px] lg:h-[900px] xl:h-[850px] text-center bg-primary text-white flex items-center justify-center mt-5">
      <div className="absolute w-[100px] md:w-[150px] xl:w-[200px] -top-16 md:top-0 md:translate-y-1/3 left-2 md:left-12 z-10 text-primary-dark/90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="141"
          fill="currentColor"
          viewBox="0 0 205 141"
        >
          <g>
            <path d="M69.8 60.7C82.9 69.1 89.4 80.4 89.4 94.7 89.4 108.9 85.2 120.1 76.8 128.3 68.4 136.4 57.9 140.5 45.3 140.5 32.7 140.5 22.1 136.5 13.5 128.6 4.8 120.7 0.5 110.3 0.5 97.5 0.5 84.6 4.7 72.1 13.1 60L54.4 0.5 97.1 0.5 69.8 60.7ZM176.9 60.7C190 69.1 196.5 80.4 196.5 94.7 196.5 108.9 192.3 120.1 183.9 128.3 175.5 136.4 165 140.5 152.4 140.5 139.8 140.5 129.2 136.5 120.6 128.6 111.9 120.7 107.6 110.3 107.6 97.5 107.6 84.6 111.8 72.1 120.2 60L161.5 0.5 204.2 0.5 176.9 60.7Z"></path>
          </g>
        </svg>
      </div>
      <div className="absolute w-[100px] md:w-[150px] xl:w-[200px] -bottom-16 md:bottom-0 md:-translate-y-1/3 right-2 md:right-12 z-10 text-primary-dark/90 rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="inherit"
          height="141"
          fill="currentColor"
          viewBox="0 0 205 141"
        >
          <g>
            <path d="M69.8 60.7C82.9 69.1 89.4 80.4 89.4 94.7 89.4 108.9 85.2 120.1 76.8 128.3 68.4 136.4 57.9 140.5 45.3 140.5 32.7 140.5 22.1 136.5 13.5 128.6 4.8 120.7 0.5 110.3 0.5 97.5 0.5 84.6 4.7 72.1 13.1 60L54.4 0.5 97.1 0.5 69.8 60.7ZM176.9 60.7C190 69.1 196.5 80.4 196.5 94.7 196.5 108.9 192.3 120.1 183.9 128.3 175.5 136.4 165 140.5 152.4 140.5 139.8 140.5 129.2 136.5 120.6 128.6 111.9 120.7 107.6 110.3 107.6 97.5 107.6 84.6 111.8 72.1 120.2 60L161.5 0.5 204.2 0.5 176.9 60.7Z"></path>
          </g>
        </svg>
      </div>
      <div className="w-[95%] md:w-[80%] xl:w-[70%] 2xl:w-[60%] flex flex-col items-center justify-center gap-7">
        <blockquote className="relative text-2xl block md:text-4xl pt-[60px] md:pt-[80px]">
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
