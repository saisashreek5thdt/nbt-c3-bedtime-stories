import FooterMain from "../Components/FooterMain";
import lang from "../assets/images/icons/lang.png";
import coverBG from "../assets/images/home/homePageBG1.png"

export default function Home() {
  return (
    <>
      <section className="w-[100vw] h-[135vh] bgHome overflow-hidden">
        <div className="flex items-end justify-end pr-5 py-10">
          <img
            src={lang}
            alt="Language Icon"
            className="w-14 h-14 animate-pulse cursor-pointer"
          />          
        </div>
        <div className="flex items-center justify-center lg:bottom-4 xl:p-0">
            <img src={coverBG} alt="Chandrayaan 3" className="md:w-[20rem] lg:w-[25rem] xl:w-[38rem] lg:bottom-8 xl:bottom-0" />
          </div>
      </section>
      <FooterMain />
    </>
  );
}
