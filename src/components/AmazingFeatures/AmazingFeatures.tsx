import { amazingFeatures } from "../../lib/data";
import Separator from "../utils/Separators/Separators";
import AmazingFeatureItem from "./AmazingFeatureItem";

const AmazingFeatures = () => {
  return (
    <>
      <Separator />
      <section className="bg-paper">
        <div className="relative z-10 xl:custom-container pt-10 md:pt-0 pb-10 px-4 sm:px-3">
          <h1 className="text-center text-primary-dark font-medium">Amazing</h1>
          <h2 className="text-center text-3xl">Features</h2>
          <p className="text-center text-black/60 mt-2 mb-7">
            Test featured from elementor.
          </p>
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-5 duration-200 `}
          >
            {amazingFeatures.map((property) => (
              <AmazingFeatureItem key={property.id} data={property} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AmazingFeatures;
