import { useEffect, useRef, useState } from "react";
import { currencies } from "../../../lib/data";

type CurrencyType = (typeof currencies)[number];

const CurrencyDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>(
    currencies[0]
  );

  const dropdownRef = useRef<HTMLButtonElement>(null);

  const selectCurrency = (currency: CurrencyType) => {
    setSelectedCurrency(currency);
  };

  const toggle = () => {
    setOpen((prev) => !prev);
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
    <button
      ref={dropdownRef}
      onClick={toggle}
      className={`hidden md:flex fixed top-40 right-0 items-center z-[9999] px-3 py-3 gap-3 ${
        !open
          ? "translate-x-[calc(100%-46px)] bg-black text-white"
          : "bg-white text-black"
      } hover:translate-x-0 duration-300`}
    >
      <img
        src={selectedCurrency.icon}
        alt={`${selectedCurrency.code} icon`}
        className="w-6 h-4"
      />
      <div className="relative">
        <div className="space-x-1 flex items-center text-sm">
          <span className="uppercase">{selectedCurrency.code}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
          </svg>
        </div>
      </div>
      {open && (
        <ul className="absolute top-full left-0 right-0 w-full bg-white text-black/60 text-sm font-medium">
          {currencies.map((currency) => {
            if (currency.id === selectedCurrency.id) return;
            return (
              <li key={currency.id}>
                <button
                  onClick={() => selectCurrency(currency)}
                  className="flex items-center space-x-3 px-3 py-3 hover:bg-default duration-200 w-full"
                >
                  <img
                    src={currency.icon}
                    alt={`${currency.code} icon`}
                    className="w-6 h-4"
                  />
                  <span className="uppercase">{currency.code}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </button>
  );
};

export default CurrencyDropdown;
