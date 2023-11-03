import { menu, newMenu } from "../../../lib/data";
import DesktopSideSubMenu from "./DesktopSideSubMenu";

const DesktopSubMenu = ({ menuName }: { menuName: string }) => {
  const subMenu = menu[menuName];
  return (
    <div className="py-3 text-black/70 pointer-events-none group-hover/menu:pointer-events-auto group-hover/menu:opacity-100 opacity-0 group-hover/menu:translate-y-0 -translate-y-2 duration-300 absolute top-full left-0 w-[240px] bg-paper z-30 border-t-4 border-secondary shadow-md">
      <ul className="flex flex-col items-stretch">
        {subMenu &&
          Object.keys(subMenu).map((menuName) => (
            <li
              key={menuName}
              className="relative group/subMenu hover:bg-default duration-300"
            >
              <a href="#" className="p-[10px_25px] block ">
                {menuName}
              </a>
              {newMenu.includes(menuName) && (
                <span className="absolute top-1/2 -translate-y-1/2 right-[25px] px-1 text-xs bg-primary text-white">
                  New
                </span>
              )}
              {subMenu[menuName] && (
                <DesktopSideSubMenu menu={subMenu[menuName]!} />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DesktopSubMenu;
