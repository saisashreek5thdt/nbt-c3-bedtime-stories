import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterPage from "../../Components/FooterPage";
import speaker from "../../assets/images/icons/speaker.png";
import moon from "../../assets/images/Page1/moonBG.gif";
import bed from "../../assets/images/Page1/bed.png";
import ReactAudioPlayer from "react-audio-player";
import page1Audio from "../../assets/audio/Page1.mp3"

export default function Page1() {
  const [isPlaying, setIsPlaying] = useState(false);
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

  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] page1 bg-cover select-none">
        <div className="flex gap-10">
          <p className="p-16 text-justify text-xl font-medium select-none">
            Ten year old Veer is a very intelligent and curious boy. He and his
            Dadaji are great friends. They sleep in the same room. At bedtime
            before falling sleeping asleep, Dadaji makes up interesting stories on any
            topic that he feels little Veer should be aware of. Veer loves to
            hear these stories.
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
          <img
            src={speaker}
            alt="Speaker Icon"
            className="h-14 cursor-pointer relative xl:-mt-[6rem] xl:right-36 2xl:right-28 xl:top-12 xl:bottom-8 2xl:bottom-5"
            onClick={handlePlayPause}
          />
        </div>
      </section>
      {isPlaying && <ReactAudioPlayer src={page1Audio} autoPlay />}
      <FooterPage
        pageNum1="02"
        pageNum2="03"
        onClick={urlPathHandler}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
