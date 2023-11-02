import clsx from "clsx";
import { menu } from "../../../lib/data";
import DesktopSubMenu from "./DesktopSubMenu";

const DesktopMenu = () => {
  const mainMenu = Object.keys(menu);

  return (
    <ul className="hidden ml-auto xl:flex items-center text-white">
      {mainMenu.map((menuName) => (
        <li
          key={menuName}
          className="relative group/menu hover:bg-secondary duration-300"
        >
          <a
            href="#"
            className={clsx(
              "inline-block px-[17px] py-[13px] cursor-pointer capitalize",
              { "bg-secondary": menuName === "home" }
            )}
          >
            {menuName}
          </a>
          {!!menu[menuName] && <DesktopSubMenu menuName={menuName} />}
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;
