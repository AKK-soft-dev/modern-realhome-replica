import DesktopMenu from "./DesktopMenu/DesktopMenu";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full bg-gradient-to-b py-4 from-black/60 z-50">
      <nav className="container flex items-center">
        <img src="/white-logo.png" alt="Logo" className="w-[119px] h-[62px]" />
        <DesktopMenu />
        <ul className="flex items-center text-white gap-2 ml-2">
          <li>
            <div className="flex items-center">
              <svg
                className="text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z"></path>
              </svg>
              <span>1-800-555-1234</span>
            </div>
          </li>
          <li>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M172,120a44,44,0,1,1-44-44A44.05,44.05,0,0,1,172,120Zm60,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.09,88.09,0,0,0-91.47-87.93C77.43,41.89,39.87,81.12,40,128.25a87.65,87.65,0,0,0,22.24,58.16A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.83.32,59.83,59.83,0,0,0,78.28,0,4,4,0,0,1,4.83-.32,79.71,79.71,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128Z"></path>
              </svg>
            </div>
          </li>
          <li>
            <button className="inline-block px-[17px] py-[10px] bg-primary hover:bg-primary-dark duration-300 cursor-pointer capitalize">
              Submit
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
