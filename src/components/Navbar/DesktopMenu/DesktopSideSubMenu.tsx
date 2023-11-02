import { newMenu } from "../../../lib/data";

const DesktopSideSubMenu = ({
  menu,
}: {
  menu: {
    [key: string]: {
      [key: string]: any;
    } | null;
  };
}) => {
  return (
    <div className="py-3 text-black/70 pointer-events-none group-hover/subMenu:pointer-events-auto group-hover/subMenu:opacity-100 opacity-0 group-hover/subMenu:translate-x-0 translate-x-2 duration-300 absolute top-0 left-full w-[240px] bg-paper z-30 border-t-4 border-secondary shadow-md">
      <ul className="flex flex-col items-stretch">
        {menu &&
          Object.keys(menu).map((menuName) => (
            <li key={menuName} className="relative">
              <a
                href="#"
                className="p-[15px_25px] block relative hover:bg-default duration-300"
              >
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
    </div>
  );
};

export default DesktopSideSubMenu;
