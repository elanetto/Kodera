import { FaCheckCircle } from "react-icons/fa";
import OfferCard from "./OfferCard"; // or wherever your OfferCard component is
import { packages, hourly } from "./offersData";
import { Link } from "react-router-dom";

export default function Offers() {
  return (
    <div className="flex flex-col items-center w-full">
      <h2
        className="text-2xl font-koulen text-center text-title p-4"
        id="tjenester"
      >
        Pakker
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-10 items-stretch">
        {packages.map((pkg, i) => (
          <Link
            key={pkg.id}
            to={`/tjenester/${pkg.id}`}
            className=""
          >
            <OfferCard key={i} {...pkg} />
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-koulen text-center text-title pt-10 pb-4">
        Timespriser
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-10 items-stretch">
        {hourly.map((pkg, i) => (
          <OfferCard key={i} {...pkg} />
        ))}
      </div>
    </div>
  );
}

// export default function Offers() {
//   return (
//     <div className="">
//       <h2
//         className="text-2xl font-koulen text-center text-title p-4"
//         id="tjenester"
//       >
//         Pakker
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl gap-10 items-start mt-4">
//         <div className="flex flex-col justify-center items-center">
//           {/* Rosa topp med kort-navnet */}
//           <div className="flex w-42 justify-center py-2 bg-darkpink rounded-t-lg ">
//             <h2 className="text-lg text-white  font-semibold">Simpel</h2>
//           </div>

//           <div className="flex flex-col shadow rounded-lg bg-white w-68 h-110 ">
//             {/* "Liten nettside" med bakgrunn - text */}
//             <div className="flex items-center flex-col bg-[#81CABF] justify-center text-center rounded-t-lg  pl-4 pr-4 pt-2 pb-2">
//               <div className="flex flex-row items-center">
//                 <p className="text-md text-title text-center">One pager</p>
//               </div>
//             </div>
//             {/* Punkter på kortet */}
//             <div className="flex flex-col items-start justify-start gap-2">
//               <div className="flex items-center flex-col text-center  pl-4 pr-4 pt-5 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] text-left">
//                     1 side. For eksempel portfolio, resturant-meny eller
//                     fest-info
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center flex-col text-center  pl-4 pr-4 pt-2 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     5 dagers leveringstid
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center flex-col text-center pl-4 pr-4 pt-2 pb-2">
//                 <div className="flex flex-row text-left items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     Sømløs brukeropplevelse og skalering for alle
//                     skjermstørrelser
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center flex-col text-left pl-4 pr-4 pt-2 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     Mulighet for å ekspandere nettsiden
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center flex-col text-left pl-4 pr-4 pt-2 pb-1">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     30 dagers oppfølging og vedlikehold
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className=" flex flex-col justify-center items-center p-4 mt-auto">
//               <p className="text-xl text-darkpink font-semibold">kr 5 990</p>
//               <p className="text-sm text-gray-400 line-through">
//                 Veil. pris: kr 10 000
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col justify-center items-center">
//           {/* Rosa topp med kort-navnet */}
//           <div className="flex w-42 justify-center py-2 bg-darkpink rounded-t-lg ">
//             <h2 className="text-lg text-white  font-semibold">Simpel</h2>
//           </div>

//           <div className="flex flex-col shadow rounded-lg bg-white w-68 h-110 ">
//             {/* "Liten nettside" med bakgrunn - text */}
//             <div className="flex items-center flex-col bg-[#81CABF] justify-center text-center rounded-t-lg  pl-4 pr-4 pt-2 pb-2">
//               <div className="flex flex-row items-center">
//                 <p className="text-md text-title text-center">Liten nettside</p>
//               </div>
//             </div>
//             {/* Punkter på kortet */}
//             <div className="flex flex-col items-start justify-start gap-2">
//               <div className="flex items-center flex-col text-center  pl-4 pr-4 pt-5 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] text-left">
//                     1-3 sider. For eksempel forside, kontakt, prosjekter
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center flex-col text-center  pl-4 pr-4 pt-2 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     7 dagers leveringstid
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center flex-col text-center pl-4 pr-4 pt-2 pb-2">
//                 <div className="flex flex-row text-left items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     Sømløs brukeropplevelse og skalering for alle
//                     skjermstørrelser
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center flex-col text-left pl-4 pr-4 pt-2 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     Mulighet for å ekspandere nettsiden
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center flex-col text-left pl-4 pr-4 pt-2 pb-1">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     30 dagers oppfølging og vedlikehold
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className=" flex flex-col justify-center items-center p-4 mt-auto">
//               <p className="text-xl text-darkpink font-semibold">kr 11 990</p>
//               <p className="text-sm text-gray-400 line-through">
//                 Veil. pris: kr 20 000
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Nytt kort. Kort nr 2 */}
//         <div className="flex flex-col justify-center items-center">
//           <div className="flex w-48 justify-center py-2 bg-darkpink rounded-t-lg">
//             <h2 className="text-lg text-white  font-semibold">Mega</h2>
//           </div>

//           <div className="flex flex-col shadow rounded-lg bg-white w-68 h-110">
//             {/* "Liten nettside" med bakgrunn - text */}
//             <div className="flex items-center flex-col bg-[#81CABF] justify-center text-center rounded-t-lg  pl-4 pr-4 pt-2 pb-2">
//               <div className="flex flex-row items-center">
//                 <p className="text-md text-title text-center">
//                   Mellomstor nettside
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col items-start justify-start">
//               <div className="flex items-center flex-col text-center  pl-4 pr-4 pt-5 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3 mb-9" />

//                   <p className="text-sm text-[#2e3944] text-left">
//                     4-7 sider. For eksempel forside, kontakt, om oss, produkter,
//                     produkt detaljer, kundeomtaler, cookie informasjon
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center flex-col text-center  pl-4 pr-4 pt-2 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     14 dagers leveringstid
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center flex-col text-center pl-4 pr-4 pt-2 pb-2">
//                 <div className="flex flex-row text-left items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     Sømløs brukeropplevelse og skalering for alle
//                     skjermstørrelser
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center flex-col text-left pl-4 pr-4 pt-2 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     Mulighet for å ekspandere nettsiden
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center flex-col text-left pl-4 pr-4 pt-2 pb-1">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     30 dagers oppfølging og vedlikehold
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className=" flex flex-col justify-center items-center p-4 mt-auto">
//               <p className="text-xl text-darkpink font-semibold">kr 19 990</p>
//               <p className="text-sm text-gray-400 line-through">
//                 Veil. pris: kr 40 000
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col justify-center items-center">
//           <div className="flex w-52 justify-center py-2 bg-darkpink rounded-t-lg">
//             <h2 className="text-lg text-white  font-semibold">UX Design</h2>
//           </div>

//           <div className="flex flex-col shadow rounded-lg bg-white w-68 h-110">
//             <div className="flex items-center flex-col bg-[#81CABF] justify-center text-center rounded-t-lg  pl-4 pr-4 pt-2 pb-2">
//               <div className="flex flex-row items-center">
//                 <p className="text-md text-title text-center">
//                   UX figma design for nettside/app
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col items-start justify-start gap-2">
//               <div className="flex items-center flex-col text-center  pl-4 pr-4 pt-5 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 mb-14 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] text-left">
//                     Basert på dine ønsker, designer vi hvordan nettsiden eller
//                     appen din kan se ut. Dette vil være en prototype (klikkbar
//                     demo) som kan vises for blant annet investorer
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center flex-col  pl-4 pr-4 pt-2 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     Opptil 12 sider. Både for mobil og PC skjermstørrelser.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center flex-col  pl-4 pr-4 pt-2 pb-1">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     1 revisjonsrunde inkludert. Vi går gjennom hva du vil endre
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center flex-col  pl-4 pr-4 pt-2 pb-1">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     Leveringstid 3 uker. Du mottar nedlastbar fil og lenke til
//                     designet
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className=" flex flex-col justify-center items-center p-4 mt-auto ">
//               <p className="text-xl text-darkpink font-semibold">kr 14 990</p>
//               <p className="text-sm text-gray-400 line-through">
//                 Veil. pris: kr 20 000
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col justify-center items-center">
//           <div className="flex w-48 justify-center py-2 bg-darkpink rounded-t-lg">
//             <h2 className="text-lg text-white  font-semibold">UX Analyse</h2>
//           </div>

//           <div className="flex flex-col shadow rounded-lg bg-white w-68 h-130">
//             {/* "Liten nettside" med bakgrunn - text */}
//             <div className="flex items-center flex-col bg-[#81CABF] justify-center text-center rounded-t-lg  pl-4 pr-4 pt-2 pb-2">
//               <div className="flex flex-row items-center">
//                 <p className="text-md text-title text-center">
//                   Vi analyserer brukeropplevelsen av din nettside
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col items-start justify-start">
//               <div className="flex items-center flex-col text-center  pl-4 pr-4 pt-5 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mt-4 mr-3 mb-9" />

//                   <p className="text-sm text-[#2e3944] text-left">
//                     For deg som allerede har en nettside og ønsker å vite
//                     hvordan brukerne dine opplever nettsiden
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center flex-col text-left pl-4 pr-4 pt-2 pb-1">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     24 timer leveringstid
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center flex-col text-left  pl-4 pr-4 pt-2 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     Vi sjekker blant annet fargekontraster, tilgjengelighet,
//                     navigering, ytelse og hastighet på nettsiden din
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center flex-col text-center pl-4 pr-4 pt-2 pb-2">
//                 <div className="flex flex-row text-left items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     Du motta en grundig tilbakemelding i form av dokumentfil og
//                     forslag til eventuelle forbedringer
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center flex-col text-left pl-4 pr-4 pt-2 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     Mulighet for å ekspandere nettsiden
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className=" flex flex-col justify-center items-center p-4 mt-auto">
//               <p className="text-xl text-darkpink font-semibold">Gratis</p>
//               <p className="text-sm text-gray-400 line-through">
//                 Veil. pris: kr 10 000
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ------Timespriser ny rekke med kort--------- */}
//       <h2
//         className="text-2xl font-koulen text-center text-title pt-8 pb-4"
//         id="tjenester"
//       >
//         Timespriser
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl gap-10 items-start mt-4">
//         <div className="flex flex-col justify-center items-center">
//           {/* Rosa topp med kort-navnet */}
//           <div className="flex w-42 justify-center py-2 bg-darkpink rounded-t-lg ">
//             <h2 className="text-lg text-white  font-semibold">UX design</h2>
//           </div>

//           <div className="flex flex-col shadow rounded-lg bg-white w-68 h-94 ">
//             <div className="flex items-center flex-col bg-[#81CABF] justify-center text-center rounded-t-lg  pl-4 pr-4 pt-2 pb-2">
//               <div className="flex flex-row items-center">
//                 <p className="text-md text-title text-center">
//                   Pris per time UX Figma design
//                 </p>
//               </div>
//             </div>
//             {/* Punkter på kortet */}
//             <div className="flex flex-col items-start justify-start gap-2">
//               <div className="flex items-center flex-col text-center  pl-4 pr-4 pt-5 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] text-left">
//                     For deg som allerede har et design, men ønsker å forbedre
//                     eller utvide deler av den
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center flex-col text-left pl-4 pr-4 pt-2 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3 " />

//                   <p className="text-sm text-[#2e3944] ">
//                     Passer godt dersom du ikke ønsker full UX pakke eller kun
//                     ønsker noen få sider
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center flex-col  pl-4 pr-4 pt-2 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     Vi gir en cirka estimert leveringstid ut ifra ønskene
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className=" flex flex-col justify-center items-center p-4 mt-auto">
//               <p className="text-xl text-darkpink font-semibold">890 kr/time</p>
//               <p className="text-sm text-gray-400 line-through">
//                 Veil. pris: 1300 kr/time
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col justify-center items-center">
//           <div className="flex w-52 justify-center py-2 bg-darkpink rounded-t-lg">
//             <h2 className="text-lg text-white  font-semibold">Kode</h2>
//           </div>

//           <div className="flex flex-col shadow rounded-lg bg-white w-68 h-94">
//             <div className="flex items-center flex-col bg-[#81CABF] justify-center text-center rounded-t-lg  pl-4 pr-4 pt-2 pb-2">
//               <div className="flex flex-row items-center">
//                 <p className="text-md text-title text-center">
//                   Pris per time med utvikling
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col items-start justify-start gap-2">
//               <div className="flex items-center flex-col text-center  pl-4 pr-4 pt-5 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 mb-14 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] text-left">
//                     Vi fikser din eksisterende nettside med det som ønskes. For
//                     eksempel dropdown-meny, søkefelt, endring av farger, en
//                     ekstra side
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center flex-col  pl-4 pr-4 pt-2 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     Vi gir en cirka estimert leveringstid ut ifra ønskene
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center flex-col  pl-4 pr-4 pt-2 pb-1">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     30 dagers oppfølging og vedlikehold
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className=" flex flex-col justify-center items-center p-4 mt-auto ">
//               <p className="text-xl text-darkpink font-semibold">990 kr/time</p>
//               <p className="text-sm text-gray-400 line-through">
//                 Veil. times-pris: 1500 kr/time
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col justify-center items-center">
//           <div className="flex w-52 justify-center py-2 bg-darkpink rounded-t-lg">
//             <h2 className="text-lg text-white  font-semibold">
//               Grafisk design
//             </h2>
//           </div>

//           <div className="flex flex-col shadow rounded-lg bg-white w-68 h-94">
//             <div className="flex items-center flex-col bg-[#81CABF] justify-center text-center rounded-t-lg  pl-4 pr-4 pt-2 pb-2">
//               <div className="flex flex-row items-center">
//                 <p className="text-md text-title text-center">
//                   Pris per time med grafisk design
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col items-start justify-start gap-2">
//               <div className="flex items-center flex-col text-center  pl-4 pr-4 pt-5 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 mb-14 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] text-left">
//                     ... dette får du
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center flex-col  pl-4 pr-4 pt-2 pb-2">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     Vi gir en cirka estimert leveringstid ut ifra ønskene
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center flex-col  pl-4 pr-4 pt-2 pb-1">
//                 <div className="flex flex-row items-center">
//                   <FaCheckCircle className="w-4 h-4 shrink-0 text-darkpink mr-3" />

//                   <p className="text-sm text-[#2e3944] ">
//                     30 dagers oppfølging og vedlikehold
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className=" flex flex-col justify-center items-center p-4 mt-auto ">
//               <p className="text-xl text-darkpink font-semibold">x kr/time</p>
//               <p className="text-sm text-gray-400 line-through">
//                 Veil. times-pris: x kr/time
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
