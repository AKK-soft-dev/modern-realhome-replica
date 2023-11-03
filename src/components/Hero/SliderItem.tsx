import Featured from "./Featured";
import { CarouselItemType } from "./definitions";

const SliderItem = ({ data }: { data: CarouselItemType }) => {
  return (
    <div
      style={{ backgroundImage: `url(${data.backdrop})` }}
      className={`h-[400px] md:h-[500px] lg:h-[70vh] xl:h-[800px] bg-cover bg-center bg-no-repeat`}
    >
      <Featured data={data} />
    </div>
  );
};

export default SliderItem;
