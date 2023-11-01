import { SliderItemProps } from "./definitions";

const SliderItem = ({ heroImg }: SliderItemProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${heroImg})` }}
      className={`h-[400px] md:h-[500px] lg:h-[70vh] xl:h-[800px] bg-cover bg-center bg-no-repeat`}
    ></div>
  );
};

export default SliderItem;
