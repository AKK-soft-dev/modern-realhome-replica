import Featured from "./Featured";
import { CarouselItemType } from "./definitions";

const SliderItem = ({ data }: { data: CarouselItemType }) => {
  return (
    <div
      style={{ backgroundImage: `url(${data.backdrop})` }}
      className={`h-[400px] md:h-[500px] lg:h-[70vh] xl:min-h-[800px] xl:h-[80vh] bg-cover bg-center bg-no-repeat`}
    >
      <Featured data={data} />
    </div>
  );
};

export default SliderItem;
