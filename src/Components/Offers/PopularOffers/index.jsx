import { TiArrowRightThick } from "react-icons/ti";
import { Link } from "react-router-dom";
import OfferCard from "../offerCard";
import { packages } from "../offersData";

const popular = packages.slice(0, 3); // first 3 packages, or pick manually

export default function PopularOffers() {
  return (
    <div>
      <h2 className="text-2xl font-koulen text-center text-title py-4 pt-8">
        Populære pakker
      </h2>

      <div
        className="flex flex-wrap justify-center gap-10 mt-4 
                      lg:grid lg:grid-cols-3 lg:justify-items-center
                      max-w-7xl mx-auto"
      >
        {popular.map((pkg, i) => (
          <Link key={pkg.id} to={`/tjenester/${pkg.id}`}>
            <OfferCard key={i} {...pkg} />
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center text-center mt-10 mb-6">
        <Link
          to="/tjenester"
          className="flex items-center gap-2 text-lg text-darkpink font-semibold hover:text-darkpinkhover transition"
        >
          Se flere pakker og tjenester <TiArrowRightThick />
        </Link>
      </div>
    </div>
  );
}

// export default function PopularOffers() {
//   return (
//     <div className="">
//       <h2
//         className="text-2xl font-koulen text-center text-title py-4 pt-8"
//         id="tjenester"
//       >
//         Populære pakker
//       </h2>
//       <div
//         className=" flex flex-wrap justify-center gap-10 mt-4
//     lg:grid lg:grid-cols-3 lg:justify-items-center
//     max-w-7xl mx-auto"
//       >
//         <div className="flex flex-col justify-center items-center">
//           {/* Rosa topp med kort-navnet */}
//           <div className="flex w-42 justify-center py-2 bg-darkpink rounded-t-lg ">
//             <h2 className="text-lg text-white  font-semibold">Simpel</h2>
//           </div>

//           <div className="flex flex-col shadow rounded-lg bg-white w-68 h-114 ">
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

//           <div className="flex flex-col shadow rounded-lg bg-white w-68 h-114">
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

//           <div className="flex flex-col shadow rounded-lg bg-white w-68 h-114">
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
//       </div>
//       <div className="flex justify-center items-center text-center mt-10 mb-6 ">
//         <Link
//           to="/tjenester"
//           className="flex items-center gap-2 text-lg  text-darkpink font-semibold hover:text-darkpinkhover transition"
//         >
//           Se flere pakker og tjenester
//           <FaArrowRight className="w-5 h-5 shrink-0" />
//         </Link>
//       </div>
//     </div>
//   );
// }
