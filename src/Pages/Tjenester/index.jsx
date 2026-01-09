import Offers from "../../Components/Offers";
import { packages, hourly } from "../../Components/Offers/offersData";

export default function Tjenester() {
  return (
    <div className="flex flex-col items-center w-full pt-4">
      <Offers />
    </div>
  );
}
