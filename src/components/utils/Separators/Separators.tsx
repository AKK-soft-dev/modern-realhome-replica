type SeparatorProps = {
  type?: "top" | "bottom";
  bgColor?: string;
};

const Separator = ({ type = "top", bgColor = "bg-paper" }: SeparatorProps) => {
  return (
    <div
      className={`${bgColor} separator-shape h-[130px] hidden md:block w-full ${
        type === "top" ? "rotate-0" : "rotate-180"
      }`}
    ></div>
  );
};

export default Separator;
