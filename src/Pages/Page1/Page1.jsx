import { useNavigate } from "react-router-dom";
import FooterPage from "../../Components/FooterPage";
import moon from "../../assets/images/Page1/moonBG.gif";
import bed from "../../assets/images/Page1/bed.png";
import page1Audio from "../../assets/audio/Page1.mp3";

export default function Page1() {
  const navigate = useNavigate();

  const urlPathHandler = () => {
    navigate("/");
  };

  const prevPageHandler = () => {
    navigate("/about/author/");
  };

  const nextPageHandler = () => {
    navigate("/books/page2/");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] page1 bg-cover select-none">
        <div className="flex gap-5">
          <p className="p-16 text-justify text-xl font-medium select-none">
            Ten year old Veer is a very intelligent and curious boy. He and his
            Dadaji are great friends. They sleep in the same room. At bedtime
            before falling asleep, Dadaji makes up interesting stories on any
            topic that he feels little Veer should be aware of.
            <br />
            <br />
            Veer loves to hear these stories.
          </p>
          <div className="h-full w-full relative">
            <img
              src={moon}
              alt="moon earth space"
              className="w-full bg-cover"
            />
          </div>
        </div>
        <div className="flex absolute xl:top-[30rem]">
          <img
            src={bed}
            alt="moon earth space"
            className="relative 2xl:h-[75vh] 2xl:bottom-[22rem] bg-cover"
          />
          <div className="flex flex-col gap-5 relative xl:right-64 xl:-mt-[3rem] 2xl:right-64 xl:bottom-28 2xl:bottom-16">
            <p className="text-justify text-xl font-medium select-none">
              Veer&apos;s school was soon to hold a workshop on Space. Veer
              wanted to actively participate in this workshop. He was very
              interested in learning about India&apos;s Space Research
              Programme. The topic constantly played on his mind. One night,
              after completing his homework, packing his bag for school, and
              getting his uniform ready, Veer jumped into bed and snuggled
              against Dadaji.
            </p>
            <p className="text-justify text-xl font-medium select-none">
              Veer - Dadaji, tell me a story about space, the moon, and
              astronauts.
            </p>
          </div>
        </div>
      </section>
      <FooterPage
        pageNum1="02"
        pageNum2="03"
        onClick={urlPathHandler}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
        audioSRC={page1Audio}
      />
    </>
  );
}
