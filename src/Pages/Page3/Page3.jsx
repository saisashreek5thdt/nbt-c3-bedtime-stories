import { useNavigate } from "react-router-dom";
import FooterPage from "../../Components/FooterPage";

export default function Page3() {
  const navigate = useNavigate();

  const indexBTNHandler = () => {
    navigate("/");
  };

  const onPrevPageHandler = () => {
    navigate("/books/page2/");
  };

  const onNextPageHandler = () => {
    navigate("/books/page4/");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] page3 bg-cover overflow-hidden"></section> 
      <FooterPage
        onPrev={onPrevPageHandler}
        onClick={indexBTNHandler}
        onNext={onNextPageHandler}
        pageNum1="05"
        pageNum2="06"
      />
    </>
  );
}
