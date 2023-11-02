import { useState } from "react";
import { menu } from "../../../lib/data";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const mainMenu = Object.keys(menu);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="ml-auto sm:ml-0 xl:hidden block relative">
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
          <li
            key={menuName}
            className="relative group/menu hover:text-secondary duration-300"
          >
            <a
              href="#"
              className="inline-block px-[25px] py-[15px] cursor-pointer capitalize"
            >
              {menuName}
            </a>
            {/* {!!menu[menuName] && <DesktopSubMenu menuName={menuName} />} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
