import { useState, useEffect, useRef } from "react";
import { CountryType, countries } from "../../lib/data";
import clsx from "clsx";

const CountrySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryType>(
    countries[0]
  );
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const selectCountry = (country: CountryType) => {
    setSelectedCountry(country);
    toggleOpen();
  };

  // Click away listener
  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", close);

    return () => {
      window.removeEventListener("click", close);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="w-12 h-full bg-slate-200">
      <button
        type="button"
        id="selectedDisplay"
        className="flex items-center justify-center gap-1 h-full w-full text-black/70"
        onClick={toggleOpen}
      >
        <img
          loading="lazy"
          width="20"
          srcSet={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png 2x`}
          src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`}
          alt=""
        />
        <span className={open ? "rotate-180" : "rotate-0"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>
          </svg>
        </span>
      </button>
      <ul
        className={`${
          open ? "block" : "hidden"
        } absolute top-full left-0 right-0 max-h-[200px] bg-paper shadow-md space-y-2 overflow-y-scroll`}
      >
        {countries.map((country) => (
          <li key={country.code}>
            <button
              onClick={() => selectCountry(country)}
              type="button"
              className={clsx(
                "w-full px-2 py-2 flex items-center gap-2 text-xs",
                {
                  "bg-default": selectedCountry.code === country.code,
                }
              )}
            >
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                alt=""
              />
              <span className="text-start">{country.label}</span>
              <span>+{country.phone}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountrySelector;
