import { AmazingFeatureType } from "../../lib/definitions";

const AmazingFeatureItem = ({
  data: { icon, title, description },
}: {
  data: AmazingFeatureType;
}) => {
  return (
    <article className="text-center flex flex-col items-center">
      <img src={icon} alt={`${title} icon`} className="object-cover" />
      <h1 className="text-lg font-medium mt-4">{title}</h1>
      <p className="text-black/60 mt-5">{description}</p>
    </article>
  );
};

export default AmazingFeatureItem;
