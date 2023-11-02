import { useState, useEffect, useRef } from "react";
import { menu } from "../../../lib/data";
import SubMenu from "./SubMenu";

const Menu = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [expandedMenuList, setExpandedMenuList] = useState<Set<string>>(
    new Set()
  );
  const mainMenu = Object.keys(menu);

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

  const toggleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  // Click away listener
  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", close);

    return () => {
      window.removeEventListener("click", close);
    };
  }, []);

  return (
    <div ref={menuRef} className="ml-auto sm:ml-0 xl:hidden block relative">
      <button onClick={toggleOpen} className="text-white/80 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M224,120v16a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8H216A8,8,0,0,1,224,120Zm-8,56H40a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V184A8,8,0,0,0,216,176Zm0-128H40a8,8,0,0,0-8,8V72a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48Z"></path>
        </svg>
      </button>
      {/** For smaller device */}
      <ul
        className={`absolute top-full right-0 py-3 flex flex-col ml-auto xl:hidden w-[240px] bg-white text-black ${
          open
            ? "translate-y-3 opacity-100 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }  duration-300`}
      >
        {mainMenu.map((menuName) => (
          <li key={menuName} className="relative">
            <div className="relative">
              <a
                href="#"
                className="block relative px-[25px] py-[15px] cursor-pointer capitalize duration-300 hover:text-secondary"
              >
                {menuName}
              </a>
              {!!menu[menuName] && (
                <button
                  onClick={() => toggleExpand(menuName)}
                  className="absolute top-0 right-0 bottom-0 flex items-center justify-center p-3 text-black/60"
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
                </button>
              )}
            </div>

            {!!menu[menuName] && (
              <SubMenu
                menuName={menuName}
                expand={expandedMenuList.has(menuName)}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
