export default function PortfolioSort({ sortBy, setSortBy }) {
  const options = [
    { value: "newest", label: "Nyeste" },
    { value: "oldest", label: "Eldste" },
  ];

  return (
    <div className="flex justify-center px-4 pt-5 mb-2 ">
      <div className="inline-flex rounded-full bg-paperwhite p-1 shadow-sm border  border-coal/10">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setSortBy(option.value)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all cursor-pointer duration-200 ${
              sortBy === option.value
                ? "bg-coal text-paperwhite shadow"
                : "text-coal/70 hover:text-coal"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
