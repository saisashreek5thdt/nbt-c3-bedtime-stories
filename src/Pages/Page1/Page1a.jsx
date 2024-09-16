import { useNavigate } from "react-router-dom";
import FooterPage from "../../Components/FooterPage";
import speaker from "../../assets/images/icons/speaker.png";
import satellite from "../../assets/images/icons/satellite1.png";
import moon from "../../assets/images/Page1/moon.png";
import bed from "../../assets/images/Page1/bed.png"

export default function Page1a() {
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
      <section className="w-full h-full page1 bg-cover overflow-hidden">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-6">
            <p className="py-[80px] mx-[25px] text-lg font-medium">
              Ten year old Veer is a very intelligent and curious boy. He and
              his Dadaji are great friends. They sleep in the same room. At
              bedtime before sleeping asleep, Dadaji makes up interesting
              stories on any topic that he feels little Veer should be aware of.{" "}
              Veer loves to hear these stories.
            </p>
          </div>
          <div className="col-span-4 flex items-end justify-end">
            <div className="absolute">
              <img src={moon} alt="moon earth space" className="w-96 bg-cover" />
            </div>
            <div className="relative">
              <img src={satellite} alt="Satellite" className="w-40 h-40 pt-8 mx-96 animate-pulse" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-2">
          <div className="col-span-4">
            <img src={bed} alt="moon earth space" className="bg-cover" />
          </div>
          <div className="w-full col-span-6">
            <div className="flex gap-4">
              <div className="flex flex-col gap-6">
                <p className="text-lg font-medium">
                  Veer&apos;s school was soon to hold a workshop on Space. Veer
                  wanted to actively participate in this workshop. He was very
                  interested in learning about India&apos;s Space Research
                  Programme. The topic constantly played on his mind. One night,
                  after completing his homework, packing his bag for school, and
                  getting his uniform ready, Veer jumped into bed and snuggled
                  against Dadaji.
                </p>
                <p className="text-lg font-medium">
                  Veer - Dadaji, tell me a story about space, the moon, and
                  astronauts.
                </p>
              </div>
              <div className="flex gap-4 items-end justify-end">
                <img src={speaker} alt="Speaker Icon" className="cursor-pointer flex items-end justify-end" />
              </div>
            </div>
          </div>
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
