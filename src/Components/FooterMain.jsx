import { Link, useNavigate } from "react-router-dom";
import moon from "../assets/images/icons/moon-icon.png";

export default function FooterMain() {
  let currentyear = new Date().getFullYear();

  const navigate = useNavigate();

  const urlPathHandler = () => {
    navigate('/books/page1/');
  };

  return (
    <>
      <div className="fixed bottom-0 right-0 w-full h-16 bg-[#c4122f] text-white flex items-center justify-between">
        <h1 className="pl-4 cursor-pointer">CopyRights © {currentyear} NBT</h1>
        <div className="flex flex-col items-center justify-center gap-10 cursor-pointer" onClick={urlPathHandler}>
          <img
            src={moon}
            alt="Moon"
            className="w-14 h-14 absolute bottom-10 hover:animate-spin"
          />
          <h1 className="py-10 mt-5">Index</h1>
        </div>
        <Link to="https://5thdt.com/" target="_blank">
          <h1 className="pr-4 cursor-pointer">Developed by 5THDT</h1>
        </Link>
      </div>
    </>
  );
}
