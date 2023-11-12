import Separator from "../utils/Separators/Separators";

const GetInTouch = () => {
  return (
    <section
      className="h-[350px] md:h-[500px] lg:h-[500px] xl:h-[600px] relative bg-fixed bg-cover text-center text-white flex items-center justify-center"
      style={{ backgroundImage: "url(/cta-above-footer.jpg)" }}
    >
      <div className="absolute inset-0 bg-primary/80"></div>
      <div className="w-[85%] z-10 md:w-[70%] 2xl:w-[50%] flex flex-col items-center justify-center gap-7">
        <h1 className="font-medium">Looking for More?</h1>
        <p className="text-2xl block md:text-4xl">
          <span className="leading-normal">
            Talk to our experts or Browse through more properties.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center">
          <a
            href="#"
            className="px-4 py-3 bg-gray-800 hover:bg-gray-700 duration-200 font-medium"
          >
            Get In Touch
          </a>
          <a
            href="#"
            className="px-4 py-3 bg-paper text-black font-medium hover:bg-paper/90 hover:text-red-500 duration-200"
          >
            Browse More
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

export default GetInTouch;
