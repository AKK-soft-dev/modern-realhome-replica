import autoAnimate from "@formkit/auto-animate";
import { useRef, useEffect } from "react";
import { newMenu } from "../../../lib/data";

const DeeperSubMenu = ({
  menu,
  expand,
}: {
  menu: {
    [key: string]: {
      [key: string]: any;
    } | null;
  };
  expand: boolean;
}) => {
  const parentRef = useRef(null);

  useEffect(() => {
    parentRef.current && autoAnimate(parentRef.current, { duration: 300 });
  }, []);

  return (
    <div
      ref={parentRef}
      className={`text-black/70 w-full relative overflow-hidden bg-black/10`}
    >
      {expand && (
        <ul className="flex flex-col items-stretch">
          {menu &&
            Object.keys(menu).map((menuName) => (
              <li key={menuName} className="relative group/subMenu">
                <a href="#" className="p-[15px_25px] block ">
                  {menuName}
                </a>
                {newMenu.includes(menuName) && (
                  <span className="absolute top-1/2 -translate-y-1/2 right-[25px] px-1 text-xs bg-primary text-white">
                    New
                  </span>
                )}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default DeeperSubMenu;
