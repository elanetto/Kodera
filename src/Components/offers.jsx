import { FaCheckCircle } from "react-icons/fa";

export default function Offers() {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl gap-4">
      
      
      <div className="flex flex-col justify-center items-center">
        <div className="flex w-2/3 justify-center py-2 bg-[#ee4c7c] rounded-t-lg">
          <h2 className="text-lg text-white  font-semibold">Enkel nettside</h2>
        </div>
        
        
        <div className="flex flex-col shadow rounded-lg bg-white w-64 h-full">
          <div className="flex flex-col items-start justify-start">
            <div className="flex items-center flex-col text-center  pl-4 pr-4 pt-5 pb-2">
              <div className="flex flex-row items-center">
                <FaCheckCircle className="w-4 h-4 shrink-0 text-[#ee4c7c] mr-3" />

                <p className="text-sm text-[#2e3944] text-left">
                  1-3 sider. For eksempel forside, kontakt og/eller prosjekter.
                </p>
              </div>
            </div>
            <div className="flex items-center flex-col text-center  pl-4 pr-4 pt-2 pb-2">
              <div className="flex flex-row items-center">
                <FaCheckCircle className="w-4 h-4 shrink-0 text-[#ee4c7c] mr-3" />

                <p className="text-sm text-[#2e3944] ">2 dagers levering</p>
              </div>
            </div>

            <div className="flex items-center flex-col text-center pl-4 pr-4 pt-2 pb-2">
              <div className="flex flex-row text-left items-center">
                <FaCheckCircle className="w-4 h-4 shrink-0 text-[#ee4c7c] mr-3" />

                <p className="text-sm text-[#2e3944] ">
                  Sømløs brukeropplevelse og skalering for alle skjermstørrelser
                </p>
              </div>
            </div>

            <div className="flex items-center flex-col text-left pl-4 pr-4 pt-2 pb-2">
              <div className="flex flex-row items-center">
                <FaCheckCircle className="w-4 h-4 shrink-0 text-[#ee4c7c] mr-3" />

                <p className="text-sm text-[#2e3944] ">
                  Mulighet for å ekspandere nettsiden
                </p>
              </div>
            </div>

            <div className="flex items-center flex-col text-center pl-4 pr-4 pt-2 pb-1">
              <div className="flex flex-row items-center">
                <FaCheckCircle className="w-4 h-4 shrink-0 text-[#ee4c7c] mr-3" />

                <p className="text-sm text-[#2e3944] ">
                  30 dagers "bug-fri" garanti
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center p-4   ">
            <p className="text-xl text-[#ee4c7c] font-semibold">kr 11 990</p>
            <p className="text-sm text-gray-400 line-through">Veil. pris: kr 20 000</p>
          </div>
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
