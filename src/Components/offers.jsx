export default function Offers() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 max-w-7xl">
      <div className="flex flex-col items-center p-4 shadow rounded-lg bg-white w-64 h-full">
        <div className="flex items-center flex-col text-center">
          <h2 className="text-lg text-[#2e3944] font-semibold p-2">
            Enkel nettside
          </h2>
          <p className="text-sm text-[#2e3944] p-2">
            1-3 sider. For eksempel forside, kontakt og/eller prosjekter.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center p-4 shadow rounded-lg bg-white w-64  h-full">
        <div className="flex items-center flex-col text-center">
          <h2 className="text-lg text-[#2e3944] font-semibold p-2">
            Medium nettside
          </h2>
          <p className="text-sm text-[#2e3944] p-2">
            5 sider. Hvilke sider er opp til dere.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-center p-4 shadow rounded-lg bg-white w-64  h-full">
        <div className="flex items-center flex-col text-center">
          <h2 className="text-lg text-[#2e3944] font-semibold p-2">
            Eksisterende nettside
          </h2>
          <p className="text-sm text-[#2e3944] p-2">
            Etter en UX analyse, forbedrer vi deres eksisterende nettside.
          </p>
        </div>
      </div>
    </div>
  );
}
