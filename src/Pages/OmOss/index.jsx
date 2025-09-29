import usImage01 from "../../assets/carousel/main/Karusellbilde3.jpg";

function OmOss() {
  return (
    <div className="flex items-center flex-col">
      <div className="w-full">
        <img src={usImage01} alt="This is us" />
      </div>

      <h2 className="text-2xl font-koulen text-coal p-4">
        Dette er Om Oss-siden
      </h2>
    </div>
  );
}

export default OmOss;
