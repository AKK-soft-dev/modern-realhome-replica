import DesktopMenu from "./DesktopMenu/DesktopMenu";
import Menu from "./Menu/Menu";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full bg-gradient-to-b py-2 md:py-4 from-black/60 z-50">
      <nav className="custom-container flex flex-col  md:flex-row items-center">
        <img src="/white-logo.png" alt="Logo" className="w-[119px] h-[62px]" />
        {/** For Desktop View */}
        <DesktopMenu />

        {/** Always visible menu */}
        {/** px are the sames as 'container' configured in index.css */}
        <div className="w-full lg:w-auto  px-2 sm:px-0 md:ml-auto xl:ml-0 mt-4 md:mt-0 flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-center md:justify-end text-default gap-3 md:gap-2">
          <div className="flex justify-center">
            <div className="flex items-center justify-center">
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
              <span className="block">1-800-555-1234</span>
            </div>
          </div>
          <div className="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-4 md:gap-2">
            <div className="flex items-center gap-4 md:gap-2">
              <div className="relative group/authIcon">
                <button className="flex items-center py-[13px] hover:text-white duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M172,120a44,44,0,1,1-44-44A44.05,44.05,0,0,1,172,120Zm60,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.09,88.09,0,0,0-91.47-87.93C77.43,41.89,39.87,81.12,40,128.25a87.65,87.65,0,0,0,22.24,58.16A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.83.32,59.83,59.83,0,0,0,78.28,0,4,4,0,0,1,4.83-.32,79.71,79.71,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128Z"></path>
                  </svg>
                </button>
                <div className="absolute hidden xl:block opacity-0 group-hover/authIcon:opacity-100 w-[270px] top-full right-1/2 pointer-events-none group-hover/authIcon:pointer-events-auto duration-300">
                  <div className="flex relative items-center gap-3 px-[17px] py-[25px] text-black/80 translate-y-8 group-hover/authIcon:translate-y-5 bg-white duration-300 hover:text-red-500 hover:underline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M240,98a57.63,57.63,0,0,1-17,41L133.7,229.62a8,8,0,0,1-11.4,0L33,139a58,58,0,0,1,82-82.1L128,69.05l13.09-12.19A58,58,0,0,1,240,98Z"></path>
                    </svg>
                    <a href="#" className="block w-full h-full">
                      My Favorites
                    </a>
                    <span className="absolute bottom-full translate-y-2 right-0 w-0 h-0 border-[12px] border-t-transparent border-l-transparent border-white"></span>
                  </div>
                </div>
              </div>
              <div>
                <button className="inline-block px-2 py-1 md:px-[17px] md:py-[10px] font-medium  bg-transparent border-2 border-paper md:border-transparent md:bg-primary hover:bg-primary-dark duration-300 cursor-pointer capitalize">
                  Submit
                </button>
              </div>
            </div>

            {/** For smaller device */}
            <Menu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
