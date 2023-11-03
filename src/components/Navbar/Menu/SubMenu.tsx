import autoAnimate from "@formkit/auto-animate";
import { useRef, useEffect, useState } from "react";
import { menu } from "../../../lib/data";
import DeeperSubMenu from "./DeeperSubMenu";

const SubMenu = ({
  menuName,
  expand,
}: {
  menuName: string;
  expand: boolean;
}) => {
  const [expandedMenuList, setExpandedMenuList] = useState<Set<string>>(
    new Set()
  );

  const parentRef = useRef(null);
  const subMenu = menu[menuName];

  const addToExpandedMenuList = (menuName: string) => {
    setExpandedMenuList((prev) => {
      const newSet = new Set(prev);
      newSet.add(menuName);
      return newSet;
    });
  };

  const removeFromExpandedMenuList = (menuName: string) => {
    setExpandedMenuList((prev) => {
      const newSet = new Set(prev);
      newSet.delete(menuName);
      return newSet;
    });
  };

  const toggleExpand = (menuName: string) => {
    if (expandedMenuList.has(menuName)) {
      removeFromExpandedMenuList(menuName);
    } else {
      addToExpandedMenuList(menuName);
    }
  };

  useEffect(() => {
    parentRef.current && autoAnimate(parentRef.current, { duration: 300 });
  }, []);

  return (
    <div
      ref={parentRef}
      className={`text-black/70 w-full relative overflow-hidden bg-black/5`}
    >
      {expand && (
        <ul className="flex flex-col items-stretch">
          {subMenu &&
            Object.keys(subMenu).map((menuName) => (
              <li key={menuName} className="relative group/subMenu">
                <div className="relative">
                  <a href="#" className="p-[10px_25px] block ">
                    {menuName}
                  </a>
                  {!!subMenu[menuName] && (
                    <button
                      onClick={() => toggleExpand(menuName)}
                      className="absolute top-0 right-0 bottom-0 flex items-center justify-center p-3 text-black/60"
                    >
                      <span
                        className={
                          expandedMenuList.has(menuName)
                            ? "rotate-180"
                            : "rotate-0"
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>
                        </svg>
                      </span>
                    </button>
                  )}
                </div>

                {subMenu[menuName] && (
                  <DeeperSubMenu
                    expand={expandedMenuList.has(menuName)}
                    menu={subMenu[menuName]!}
                  />
                )}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SubMenu;
