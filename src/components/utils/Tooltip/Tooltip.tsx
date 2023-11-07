type TooltipProps = {
  title: string;
  bgColor?: string;
  tooltipArrowColor?: string;
  color?: string;
  animate?: boolean;
  top?: string;
  shadow?: boolean;
};

const Tooltip = ({
  title,
  bgColor = "bg-black",
  tooltipArrowColor = "border-black",
  color = "text-white",
  animate = false,
  top = "-top-[34px]",
  shadow,
}: TooltipProps) => {
  return (
    <div
      className={`absolute text-sm z-50 opacity-0 group-hover/tooltip:opacity-100 duration-150 left-1/2 -translate-x-1/2 px-4 py-1 ${bgColor} ${color} ${top} ${shadow} ${
        shadow ? "shadow-xl" : "shadow-none"
      } ${
        animate
          ? "duration-300 -translate-y-3 group-hover/tooltip:translate-y-0"
          : ""
      } flex pointer-events-none group-hover/tooltip:pointer-events-auto`}
    >
      <p style={{ width: "max-content" }}>{title}</p>
      <span
        className={`absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-[6px] border-l-transparent border-r-transparent border-b-transparent ${tooltipArrowColor}`}
      ></span>
    </div>
  );
};

export default Tooltip;
