import { NewsAndUpdateType } from "../../lib/definitions";

const NewsAndUpdateItem = ({
  data: { title, photo, description, date, category, author },
}: {
  data: NewsAndUpdateType;
}) => {
  return (
    <div className="relative flex flex-col w-full shadow-md text-sm bg-paper">
      <div className="relative text-white">
        <a href="#" className="">
          <img src={photo} alt="" className="w-full height-auto" />
        </a>
      </div>

      <div className="py-5 px-5">
        <p className="mt-2">
          {date} In{" "}
          <a href="#" className="text-primary">
            {category}
          </a>
        </p>
        <h3 className="text-lg font-medium mt-4">{title}</h3>
        <p className="mt-4 text-black/70">{description}</p>
        <span className="mt-4 block">
          <span className="text-black/70 mr-1">By</span>
          <span>{author}</span>
        </span>
      </div>
    </div>
  );
};

export default NewsAndUpdateItem;
