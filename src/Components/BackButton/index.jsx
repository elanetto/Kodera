import { useNavigate } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function BackButton({ fallbackTo = "/" }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate(fallbackTo);
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className=" gap-2 flex max-w-30 items-center cursor-pointer"
    >
      <IoIosArrowDropleftCircle className="text-4xl sm:text-3xl" />
      <span className="hidden sm:inline uppercase ">Tilbake</span>
    </button>
  );
}
