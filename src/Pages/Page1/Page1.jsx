import { useNavigate } from "react-router-dom";
import FooterPage from "../../Components/FooterPage";
import speaker from "../../assets/images/icons/speaker.png";
import satellite from "../../assets/images/icons/satellite1.png"

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
      <section className="w-[100vw] h-[100vh] page1 bg-cover">
        <div className="grid md:grid-cols-8 grid-cols-10 gap-4">
          <div className="md:col-span-4 col-span-6">
            <p className="p-12 md:text-base text-lg font-medium md:font-semibold">
              Ten year old Veer is a very intelligent and curious boy. He and
              his Dadaji are great friends. They sleep in the same room. At
              bedtime before sleeping asleep, Dadaji makes up interesting
              stories on any topic that he feels little Veer should be aware of.{" "}
              Veer loves to hear these stories.
            </p>
          </div>
          <div className="md:col-span-2 col-span-4">
            <img src={satellite} alt="Satellite" className="w-40 h-40 pt-8 mx-96 animate-pulse" />
          </div>
        </div>
        <div className="md:m-20 m-64 grid grid-cols-10 gap-2">
          <div></div>
          <div className="py-36 mx-80 w-full col-span-8">
            <div className="flex gap-4">
              <div className="flex flex-col gap-6">
                <p className="md:text-base text-lg font-medium md:font-semibold">
                  Veer&apos;s school was soon to hold a workshop on Space. Veer
                  wanted to actively participate in this workshop. He was very
                  interested in learning about India&apos;s Space Research
                  Programme. The topic constantly played on his mind. One night,
                  after completing his homework, packing his bag for school, and
                  getting his uniform ready, Veer jumped into bed and snuggled
                  against Dadaji.
                </p>
                <p className="md:text-base text-lg font-medium md:font-semibold">
                  Veer - Dadaji, tell me a story about space, the moon, and
                  astronauts.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center">
                <img src={speaker} alt="Speaker Icon" className="w-32 cursor-pointer" />
                <img src={speaker} alt="Speaker Icon" className="w-32 cursor-pointer" />
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
