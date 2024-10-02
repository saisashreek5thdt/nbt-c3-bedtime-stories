/* eslint-disable react/prop-types */
import moon from "../assets/images/icons/moon-icon.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function FooterQuiz({
  onClick,
  onPrev,
  onNext,
  pageNum1,
  pageNum2,
}) {
  return (
    <>
      <div className="fixed bottom-0 right-0 w-full h-16 bg-[#c4122f] text-white flex items-center justify-between">
        <div className="pl-4 flex items-center justify-between gap-4 select-none">
          <h1 className="font-medium text-lg">{pageNum1}</h1>
          <div
            className="w-10 h-10 bg-white text-[#c4122f] flex items-center justify-center rounded-full cursor-pointer"
            onClick={onPrev}
          >
            <FiChevronLeft className="text-2xl" />
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-10 cursor-pointer"
          onClick={onClick}
        >
          <img
            src={moon}
            alt="Moon"
            className="w-14 h-14 absolute bottom-10 hover:animate-spin"
          />
          <h1 className="py-10 mt-5 select-none">Index</h1>
        </div>
        <div className="pr-4 flex items-center justify-between gap-4">
          <div
            className="w-10 h-10 bg-white text-[#c4122f] flex items-center justify-center rounded-full cursor-pointer"
            onClick={onNext}
          >
            <FiChevronRight className="text-2xl" />
          </div>
          <h1 className="font-medium text-lg select-none">{pageNum2}</h1>
        </div>
      </div>
    </>
  );
}
