import CountrySelector from "./CountrySelector";

const ContactForm = () => {
  return (
    <div className="xl:w-[450px] group/contact xl:absolute xl:top-[30%] xl:right-24 min-h-[200px] p-7 bg-paper w-full">
      <form>
        <h2 className="text-2xl font-bold">Let Us Call You!</h2>
        <p className="text-black/70 text-sm">
          To help you choose your property
        </p>
        <div className="flex flex-col gap-4 mt-3 w-full">
          <div className="flex gap-4 w-full">
            <input
              type="text"
              className="flex-1 outline-none w-full px-[10px] py-2 border border-black/10 placeholder:text-black/50"
              placeholder="Your Name"
            />
            <div className="flex-1 flex relative">
              <CountrySelector />
              <input
                type="number"
                placeholder="Your Number"
                className="flex-1 outline-none w-full px-[10px] py-2 border border-black/10 no-spin-buttons placeholder:text-black/50"
              />
            </div>
          </div>
          <input
            type="email"
            className="outline-none w-full px-[10px] py-2 border border-black/10 placeholder:text-black/50"
            placeholder="Your Email"
          />
          <textarea
            className="outline-none w-full px-[10px] py-2 border border-black/10 placeholder:text-black/50"
            placeholder="Tell us about desired property"
            rows={3}
          />
          <div>
            <h4 className="font-medium text-sm">GDPR Agreement *</h4>
            <div className="flex items-start gap-3 mt-1">
              <input type="checkbox" className="translate-y-[3px]" />
              <p className="text-sm  text-black/70">
                I consent to having this website store my submitted information
                so they can respond to my inquiry.
              </p>
            </div>
          </div>
          <button className="self-start xl:w-full mt-2 px-4 py-3 xl:px-[10px] xl:py-2 bg-black/80 xl:bg-primary hover:bg-primary-dark duration-300 text-white">
            Submit
          </button>
        </div>
      </form>
      <div className="hidden xl:block xl:absolute right-full top-7 w-16 h-12 bg-secondary duration-300 group-hover/contact:bg-primary text-white contact-icon translate-x-4">
        <span className="w-[75%] h-full flex items-center justify-center duration-300 group-hover/contact:rotate-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M152.27,37.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.94,70.35,70.35,0,0,0-50.33-50.33A8,8,0,0,1,152.27,37.93Zm-2.33,41.8c13.79,3.68,22.65,12.54,26.33,26.33A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm81.94,95.35A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L104,87.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,48,80,128.14,128.14,0,0,0,176,208,40.21,40.21,0,0,0,216,173.07Z"></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ContactForm;
