import { useNavigate } from "react-router-dom";
import FooterPage from "../../Components/FooterPage";

export default function Page2() {
  const navigate = useNavigate();

  const indexBTNHandler = () => {
    navigate("/");
  };

  const onPrevPageHandler = () => {
    navigate("/books/page1/");
  };

  const onNextPageHandler = () => {
    navigate("/books/page3/");
  };

  return (
    <>
      <section className="w-full h-full bg-slate-100 bg-contain overflow-hidden"></section>
      <FooterPage
        onPrev={onPrevPageHandler}
        onClick={indexBTNHandler}
        onNext={onNextPageHandler}
        pageNum1="03"
        pageNum2="04"
      />
    </>
  );
}
