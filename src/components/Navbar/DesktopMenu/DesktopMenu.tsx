import clsx from "clsx";
import { menu } from "../../../lib/data";

const DesktopMenu = () => {
  const mainMenu = Object.keys(menu);

  return (
    <ul className="hidden ml-auto xl:flex items-center text-white">
      {mainMenu.map((menuName) => (
        <li key={menuName}>
          <a
            href="#"
            className={clsx(
              "inline-block px-[17px] py-[13px] hover:bg-secondary duration-300 cursor-pointer capitalize",
              { "bg-secondary": menuName === "home" }
            )}
          >
            {menuName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;
