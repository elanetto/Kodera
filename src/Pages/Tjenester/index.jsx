import Offers from "../../Components/Offers";
import Space from "../../Layout/Space";

export default function Tjenester() {
  return (
    <div className="flex flex-col items-center w-full pt-4 bg-lightgray">
      <Offers />
      <Space size="xl" type="pad" />
    </div>
  );
}
