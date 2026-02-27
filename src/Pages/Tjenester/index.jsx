import Offers from "../../Components/Offers";
import Space from "../../Layout/Space";

// import { packages, hourly } from "../../data/offersData";

export default function Tjenester() {
  return (
    <div className="flex flex-col items-center w-full pt-4 bg-paperwhite">
      <Offers />
      <Space size="xl" type="pad" />
    </div>
  );
}
