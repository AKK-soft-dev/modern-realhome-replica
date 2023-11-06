type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
  disabled?: boolean;
};

const Pagination = ({
  currentPage,
  totalPages,
  onChange,
  disabled,
}: PaginationProps) => {
  return (
    <ul
      className={`flex gap-3 items-center justify-center ${
        disabled ? "opacity-50 pointer-events-none" : "opacity-100"
      }`}
    >
      {new Array(totalPages).fill(undefined).map((_e, i) => {
        const page = i + 1;
        return (
          <li key={i}>
            <button
              disabled={disabled}
              onClick={() => onChange(page)}
              className={`w-10 h-10 flex justify-center items-center duration-300 hover:text-white hover:bg-primary shadow-md ${
                currentPage === page ? "bg-primary text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
