import { useNavigate } from "react-router-dom";
import FooterPage from "../../Components/FooterPage";
import speaker from "../../assets/images/icons/speaker.png";
import moon from "../../assets/images/Page1/moon.png";
import bed from "../../assets/images/Page1/bed.png";

export default function Page1() {
  const navigate = useNavigate();

  const urlPathHandler = () => {
    navigate("/");
  };

  const prevPageHandler = () => {
    navigate("/");
  };

  const nextPageHandler = () => {
    navigate("/books/page2/");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] page1 bg-cover">
        <div className="flex gap-10">
          <p className="p-16 text-justify text-xl font-medium select-none">
            Ten year old Veer is a very intelligent and curious boy. He and his
            Dadaji are great friends. They sleep in the same room. At bedtime
            before sleeping asleep, Dadaji makes up interesting stories on any
            topic that he feels little Veer should be aware of. Veer loves to
            hear these stories.
          </p>
          <div className="h-full w-full">
            <img
              src={moon}
              alt="moon earth space"
              className="w-full bg-cover"
            />
          </div>
        </div>
        <div className="flex absolute">
          <img src={bed} alt="moon earth space" className="xl:h-[75vh] 2xl:h-[75vh] relative xl:bottom-[10rem] 2xl:bottom-[22rem] bg-cover" />
          <div className="flex flex-col gap-5 relative xl:right-64 xl:top-12 2xl:right-64 xl:bottom-16 2xl:bottom-16">
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
          <img
              src={speaker}
              alt="Speaker Icon"
              className="h-[25%] cursor-pointer relative xl:right-36 2xl:right-28 xl:top-28 xl:bottom-8 2xl:bottom-5"
            />
        </div>
      </section>
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
