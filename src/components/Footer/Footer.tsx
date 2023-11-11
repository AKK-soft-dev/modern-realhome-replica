import Separator from "../utils/Separators/Separators";

const Footer = () => {
  return (
    <>
      <div className="hidden lg:block">
        <Separator bgColor="bg-[#303030]" />
      </div>
      <footer className="bg-[#303030] px-3">
        <div className="custom-container py-12 lg:py-15">
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="flex flex-col md:flex-row items-center">
              <img src="/white-logo.png" alt="Logo" />
              <p className="text-sm text-white/60">
                <span className="hidden md:inline mx-3">/</span>
                <span>Simply #1 Real Estate Theme</span>
              </p>
            </div>

            {/** Icons */}
            <div className="flex items-center justify-center gap-2 text-white/70">
              {/** Facebook */}
              <a href="#" className="hover:text-white duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z"></path>
                </svg>
              </a>
              {/** Twitter */}
              <a href="#" className="hover:text-white duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z"></path>
                </svg>
              </a>
              {/** LinkedIn */}
              <a href="#" className="hover:text-white duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
                </svg>
              </a>
              {/** Instagram */}
              <a href="#" className="hover:text-white duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z"></path>
                </svg>
              </a>
              {/** Pinterest */}
              <a href="#" className="hover:text-white duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M232,128.7c-.38,56.49-46.46,102.73-102.94,103.29a104.16,104.16,0,0,1-25.94-3,4,4,0,0,1-2.91-4.86l8.64-34.55A60.57,60.57,0,0,0,136,196c37,0,66.7-33.45,63.81-73.36A72,72,0,1,0,61.24,155,8,8,0,0,0,72,159.29a8.19,8.19,0,0,0,4-10.49,56,56,0,1,1,107.86-24.93C186,154.4,163.73,180,136,180a44.87,44.87,0,0,1-23.14-6.44l14.9-59.62a8,8,0,0,0-15.52-3.88L85.38,217.51a4,4,0,0,1-5.71,2.59A104,104,0,0,1,24,126.88C24.6,70.52,70.67,24.52,127,24A104,104,0,0,1,232,128.7Z"></path>
                </svg>
              </a>
              {/** Youtube */}
              <a href="#" className="hover:text-white duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-72.11,61.81-48,32A4,4,0,0,1,108,160V96a4,4,0,0,1,6.22-3.33l48,32a4,4,0,0,1,0,6.66Z"></path>
                </svg>
              </a>
              {/** Skype */}
              {/* <a href="#" className="hover:text-white duration-300"></a> */}
              {/** Feed */}
              <a href="#" className="hover:text-white duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M208,208H48V48A160,160,0,0,1,208,208Z"
                    opacity="0.2"
                  ></path>
                  <path d="M98.91,157.09A71.53,71.53,0,0,1,120,208a8,8,0,0,1-16,0,56,56,0,0,0-56-56,8,8,0,0,1,0-16A71.53,71.53,0,0,1,98.91,157.09ZM48,88a8,8,0,0,0,0,16A104,104,0,0,1,152,208a8,8,0,0,0,16,0A120,120,0,0,0,48,88Zm118.79,1.21A166.89,166.89,0,0,0,48,40a8,8,0,0,0,0,16,151,151,0,0,1,107.48,44.52A151,151,0,0,1,200,208a8,8,0,0,0,16,0A166.9,166.9,0,0,0,166.79,89.21ZM52,192a12,12,0,1,0,12,12A12,12,0,0,0,52,192Z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap mt-10 gap-y-10">
            <div className="basis-[100%] sm:basis-1/2 lg:basis-1/3 space-y-3">
              <h2 className="font-medium text-white">Quick Links</h2>
              <ul className="flex flex-wrap text-white/60 gap-y-3">
                <li className="basis-1/2 flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                  </svg>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li className="basis-1/2 flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                  </svg>
                  <a href="#" className="hover:text-white">
                    List Layout
                  </a>
                </li>
                <li className="basis-1/2 flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                  </svg>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li className="basis-1/2 flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                  </svg>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="basis-[100%] sm:basis-1/2 lg:basis-1/3 space-y-3">
              <h2 className="font-medium text-white">Contact Us</h2>
              <ul className="text-white/60 space-y-6">
                <li className="flex items-start">
                  <span></span>
                  <p className="max-w-[60%]">
                    3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345
                  </p>
                </li>
                <li className="flex items-start">
                  <span></span>
                  <a href="#" className="hover:text-white duration-200">
                    +123-456-789
                  </a>
                </li>
                <li className="flex items-start">
                  <span></span>
                  <a
                    href="mailto:sales@example.com"
                    className="hover:text-white duration-200"
                  >
                    sales@example.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="basis-[100%] lg:basis-1/3 space-y-3">
              <h2 className="font-medium text-white">Remain Updated</h2>
              <form>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 bg-white w-full outline-none"
                />
                <button className="bg-secondary mt-4 text-white px-4 py-3 font-medium text-sm">
                  Sign Up
                </button>
              </form>
            </div>
          </div>

          <div className="flex justify-between items-center text-white/60 mt-10">
            <p>&copy; 2023. All rights reserved.</p>
            <p>
              Designed by{" "}
              <a
                target="_blank"
                href="https://www.inspirythemes.com/"
                className="hover:text-white duration-200"
              >
                Inspiry Themes
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
