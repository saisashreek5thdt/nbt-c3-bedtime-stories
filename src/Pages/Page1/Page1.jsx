import { useNavigate } from "react-router-dom";
import FooterPage from "../../Components/FooterPage";

export default function Page1() {
  const navigate = useNavigate();

  const urlPathHandler = () => {
    navigate("/");
  };

  const prevPageHandler = () => {
    navigate("/");
  };

  const nextPageHandler = () => {
    navigate("/books/page1/");
  };

  return (
    <>
      <h1>Page 1 Content</h1>
      <FooterPage
        pageNum1="01"
        pageNum2="02"
        onClick={urlPathHandler}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
