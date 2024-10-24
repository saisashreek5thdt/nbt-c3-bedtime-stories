import { useNavigate } from "react-router-dom";
import FooterPage from "../../Components/FooterPage";
import saint from "../../assets/images/Page4/saint.png";
import bed from "../../assets/images/Page4/bed.png";

export default function Page4() {
  const navigate = useNavigate();

  const indexBTNHandler = () => {
    navigate("/");
  };

  const onPrevPageHandler = () => {
    navigate("/books/page3/");
  };

  const onNextPageHandler = () => {
    navigate("/books/page5/");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] page1 bg-cover overflow-hidden select-none">
        <div className="grid grid-cols-3 xl:grid-cols-3 gap-4">
          <div className="my-8 pl-4 w-full h-24 col-span-2">
            <div className="px-24 flex flex-col items-start justify-center gap-5">
              <p className="text-justify text-xl font-medium">
                Saint - Tell me, little one, how big is the moon?
              </p>
              <p className="text-justify text-xl font-medium">
                Princess - It is as wide as my index finger.
              </p>
              <p className="text-justify text-xl font-medium">
                When I lift it towards the moon, it completely covers it, <br /> and
                then I can&apos;t see the moon at all.
              </p>
              <p className="text-justify text-xl font-medium">
                Saint - Do you know how high it is?
              </p>
            </div>
          </div>
          <div className="w-full h-24">
            <img src={saint} alt="Moon Saint Princess" />
          </div>
          <div className="my-8 w-full h-64">
            <img src={bed} alt="Bedroom Grandfather Grandson" />
          </div>
          <div className="my-24 pr-10 w-full h-24 col-span-2">
            <div className="px-24 flex flex-col items-start justify-center gap-5">
              
              <p className="text-justify text-xl font-medium">
                Princess - It&apos;s visible just above that tree in the palace
                garden. I think it is just as high as that tree.
              </p>
              <p className="text-justify text-xl font-medium">
                Saint - What does the moon look like?
              </p>
              <p className="text-justify text-xl font-medium">
                Princess - It is white and bright like silver.
              </p>
              <p className="text-justify text-xl font-medium">
                Saint - How far away from you is it?
              </p>
              <p className="text-justify text-xl font-medium">
                Princess - (softly singing) Chanda mama door ke… Oh!!! The moon
                is far, far away.
              </p>
              <p className="text-justify text-xl font-medium">
                The king graciously awarded the saint for cheering up his
                daughter.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FooterPage
        onPrev={onPrevPageHandler}
        onClick={indexBTNHandler}
        onNext={onNextPageHandler}
        pageNum1="08"
        pageNum2="09"
      />
    </>
  );
}
