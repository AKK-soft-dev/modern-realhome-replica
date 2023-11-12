import { useEffect, useState, useRef } from "react";

const ScrollToTopButton = () => {
  const [hidden, setHidden] = useState(window.scrollY <= 300);
  const prev = useRef(hidden);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const shouldHidden = window.scrollY <= 300;
      if (prev.current !== shouldHidden) {
        setHidden(shouldHidden);
        prev.current = shouldHidden;
      }
    });
  }, []);
  return (
    <div
      className={`fixed bottom-10 z-[9999] right-4 transition-all duration-300 ${
        hidden
          ? "opacity-0 translate-y-10 pointer-events-none"
          : "opacity-100 translate-y-0"
      }`}
    >
      <button
        className="relative flex group/scroll overflow-hidden"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <span
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          className="text-xl relative flex justify-center font-bold items-center text-white bg-primary w-11 h-11"
        >
          <span className="z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>
            </svg>
          </span>
          <span className="absolute inset-0 bg-primary-dark translate-y-[100%] group-hover/scroll:translate-y-0 duration-300"></span>
        </span>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
