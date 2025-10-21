import { FaCheckCircle } from "react-icons/fa";

export default function Offers() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl gap-10 items-start mt-4">
      <div className="flex flex-col justify-center items-center">
        <div className="flex w-42 justify-center py-2 bg-darkpink rounded-t-lg">
          <h2 className="text-lg text-white  font-semibold">Stjertmeis</h2>
        </div>

        <div className="flex flex-col shadow rounded-lg bg-white w-68 h-94">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="flex items-center flex-col text-center  pl-4 pr-4 pt-5 pb-2">
              <div className="flex flex-row items-center">
                <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

                <p className="text-sm text-[#2e3944] text-left">
                  1-3 sider. For eksempel forside, kontakt, prosjekter
                </p>
              </div>
            </div>
            <div className="flex items-center flex-col text-center  pl-4 pr-4 pt-2 pb-2">
              <div className="flex flex-row items-center">
                <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

                <p className="text-sm text-[#2e3944] ">1 uke</p>
              </div>
            </div>

            <div className="flex items-center flex-col text-center pl-4 pr-4 pt-2 pb-2">
              <div className="flex flex-row text-left items-center">
                <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

                <p className="text-sm text-[#2e3944] ">
                  Sømløs brukeropplevelse og skalering for alle skjermstørrelser
                </p>
              </div>
            </div>

            <div className="flex items-center flex-col text-left pl-4 pr-4 pt-2 pb-2">
              <div className="flex flex-row items-center">
                <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

                <p className="text-sm text-[#2e3944] ">
                  Mulighet for å ekspandere nettsiden
                </p>
              </div>
            </div>

            <div className="flex items-center flex-col text-center pl-4 pr-4 pt-2 pb-1">
              <div className="flex flex-row items-center">
                <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

                <p className="text-sm text-[#2e3944] ">
                  30 dagers støtte og vedlikehold
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center p-4 mt-auto">
            <p className="text-xl text-darkpink font-semibold">kr 11 990</p>
            <p className="text-sm text-gray-400 line-through">
              Veil. pris: kr 20 000
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex w-48 justify-center py-2 bg-darkpink rounded-t-lg">
          <h2 className="text-lg text-white  font-semibold">Svane</h2>
        </div>

        <div className="flex flex-col shadow rounded-lg bg-white w-68 h-94">
          <div className="flex flex-col items-start justify-start">
            <div className="flex items-center flex-col text-center  pl-4 pr-4 pt-5 pb-2">
              <div className="flex flex-row items-center">
                <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3 mb-9" />

                <p className="text-sm text-[#2e3944] text-left">
                  4-7 sider. For eksempel forside, kontakt, om oss, produkter,
                  produkt detaljer, kundeomtaler, cookie informasjon
                </p>
              </div>
            </div>
            <div className="flex items-center flex-col text-center  pl-4 pr-4 pt-2 pb-2">
              <div className="flex flex-row items-center">
                <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

                <p className="text-sm text-[#2e3944] ">2 uker</p>
              </div>
            </div>

            <div className="flex items-center flex-col text-center pl-4 pr-4 pt-2 pb-2">
              <div className="flex flex-row text-left items-center">
                <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

                <p className="text-sm text-[#2e3944] ">
                  Sømløs brukeropplevelse og skalering for alle skjermstørrelser
                </p>
              </div>
            </div>

            <div className="flex items-center flex-col text-left pl-4 pr-4 pt-2 pb-2">
              <div className="flex flex-row items-center">
                <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

                <p className="text-sm text-[#2e3944] ">
                  Mulighet for å ekspandere nettsiden
                </p>
              </div>
            </div>

            <div className="flex items-center flex-col text-center pl-4 pr-4 pt-2 pb-1">
              <div className="flex flex-row items-center">
                <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

                <p className="text-sm text-[#2e3944] ">
                  30 dagers støtte og vedlikehold
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center p-4 mt-auto">
            <p className="text-xl text-darkpink font-semibold">kr 19 990</p>
            <p className="text-sm text-gray-400 line-through">
              Veil. pris: kr 40 000
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex w-52 justify-center py-2 bg-darkpink rounded-t-lg">
          <h2 className="text-lg text-white  font-semibold">
            Hakkespett
          </h2>
        </div>

        <div className="flex flex-col shadow rounded-lg bg-white w-68 h-94">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="flex items-center flex-col text-center  pl-4 pr-4 pt-5 pb-2">
              <div className="flex flex-row items-center">
                <FaCheckCircle className="w-4 h-4 shrink-0 mb-14 text-darkpink mr-3" />

                <p className="text-sm text-[#2e3944] text-left">
                  Vi fikser på din eksisterende nettside med det som ønskes. For
                  eksempel dropdown-meny, søkefelt, endring av farger, en ekstra
                  side
                </p>
              </div>
            </div>
            <div className="flex items-center flex-col  pl-4 pr-4 pt-2 pb-2">
              <div className="flex flex-row items-center">
                <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

                <p className="text-sm text-[#2e3944] ">
                  Vi gir en cirka estimert leveringstid ut ifra ønskene
                </p>
              </div>
            </div>

            <div className="flex items-center flex-col  pl-4 pr-4 pt-2 pb-1">
              <div className="flex flex-row items-center">
                <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

                <p className="text-sm text-[#2e3944] ">
                  30 dagers støtte og vedlikehold
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center p-4 mt-auto ">
            <p className="text-xl text-darkpink font-semibold">990 kr/time</p>
            <p className="text-sm text-gray-400 line-through">
              Veil. times-pris: 1500 kr/time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
