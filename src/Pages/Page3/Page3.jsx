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
      <section className="w-[100vw] h-[100vh] page4 bg-cover overflow-hidden select-none">
        <div className="px-[4rem] py-10 flex gap-[37rem]">
          <div></div>
          <div className="py-12 flex flex-col items-start justify-around lg:gap-1 gap-4">
            <p className="lg:px-1 px-2 pr-60 text-lg text-justify font-medium text-white">
              Dadaji - Veer, it was a very great day in the history of space
              research, as well as of India. Modiji has rightly named 23 August
              as National Space Day. But first let me tell you a small story
              about the moon which I heard from my grandmother when I was your
              age.
            </p>
            <p className="lg:px-8 px-20 mx-12 text-lg text-justify font-medium text-white">
              Veer - Wow! Tell me quickly, Dadaji.
            </p>
            <p className="lg:px-8 px-20 mx-12 text-lg text-justify font-medium text-white">
              Dadaji - Once upon a time, a young princess wanted to go to the
              moon. The king didn&apos;t know how to fulfil his daughter&apos;s
              foolish wish. He promised a huge reward for anyone who would
              please his daughter. Many courtiers came forward with various
              ideas but none could please the princess.
            </p>
            <p className="lg:px-8 px-20 mx-12 text-lg text-justify font-medium text-white">
              One day, a saint came and took the challenge. He asked the king to
              bring his daughter before him.
            </p>
            <p className="lg:px-8 px-20 mx-12 text-lg text-justify font-medium text-white">
              Saint- Tell me, little one, how big is the moon?
            </p>
          </div>
        </div>
      </section>
      <FooterPage
        onPrev={onPrevPageHandler}
        onClick={indexBTNHandler}
        onNext={onNextPageHandler}
        pageNum1="06"
        pageNum2="07"
      />
    </>
  );
}
