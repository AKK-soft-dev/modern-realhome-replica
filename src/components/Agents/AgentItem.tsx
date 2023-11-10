import { AgentType } from "../../lib/definitions";

const AgentItem = ({
  data: { name, photo, phone, email, listedPropertiesCount },
}: {
  data: AgentType;
}) => {
  return (
    <div className="relative w-[270px] md:w-auto mx-auto flex flex-col group/agent pt-10">
      <div className="bg-paper shadow">
        <img
          src={photo}
          alt=""
          className="w-[125px] h-[125px] relative z-10 mx-auto -mt-10"
        />
        <div className="text-center pb-10">
          <h2 className="text-lg font-medium mt-6">{name}</h2>
          <p className="text-primary mt-4">{phone}</p>
          <p className="mt-3 font-light">{email}</p>
          <div className="flex flex-col items-center mt-3">
            <h4 className="text-primary text-2xl font-medium">
              {listedPropertiesCount}
            </h4>
            <p className="text-sm font-medium">Listed Properties</p>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="absolute top-full -translate-y-1/2 left-1/2 -translate-x-1/2 p-3 bg-secondary rounded-full text-white flex justify-center items-center duration-300 scale-[3] opacity-0 group-hover/agent:opacity-100 group-hover/agent:scale-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"></path>
        </svg>
      </a>
    </div>
  );
};

export default AgentItem;
