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
      <section className="w-[100vw] h-[100vh] page3 bg-cover overflow-hidden select-none">
        <div className="px-[4rem] py-10 flex gap-[37rem]">
          <div></div>
          <div className="py-6 flex flex-col items-start justify-around gap-4">
            <p className="px-20 mx-12 text-lg text-justify font-medium self-end justify-items-end">
              Veer - Dadaji, this morning while cleaning my room, I saw the
              picture of a spacecraft on the moon on the front page of a
              newspaper. There were also pictures of people celebrating. I want
              to know why this news was so important that day.
            </p>
            <p className="px-20 mx-12 text-lg text-justify font-medium">
              Dadaji&apos;s eyes twinkle. He had been expecting this question
              from Veer for quite some time now. He knew about the forthcoming
              workshop in the boy&apos;s school, and had seen his excited
              preparations.
            </p>
            <p className="px-20 mx-12 text-lg text-justify font-medium">
              Dadaji - What is so special about the moon today?
            </p>
          </div>
        </div>
      </section>
      <FooterPage
        onPrev={onPrevPageHandler}
        onClick={indexBTNHandler}
        onNext={onNextPageHandler}
        pageNum1="04"
        pageNum2="05"
      />
    </>
  );
}
