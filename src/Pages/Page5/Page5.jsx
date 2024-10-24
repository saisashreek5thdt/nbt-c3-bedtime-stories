import { useNavigate } from "react-router-dom";
import FooterPage from "../../Components/FooterPage";
import c3sat from "../../assets/images/Page5/c3Sat.png";
import roll from "../../assets/images/Page5/roller.png";

export default function Page5() {
  const navigate = useNavigate();

  const indexBTNHandler = () => {
    navigate("/");
  };

  const onPrevPageHandler = () => {
    navigate("/books/page4/");
  };

  const onNextPageHandler = () => {
    navigate("/books/page5/");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] page5 bg-cover overflow-hidden select-none">
        <div className="p-10 flex gap-16 text-white">
          <div className="flex flex-col gap-8">
            <p className="text-justify text-xl font-medium">
              Veer was getting impatient. This was not the story he wanted to
              listen tonight.
            </p>
            <p className="text-justify text-xl font-medium">
              Veer - What a silly princess. Who would believe this story?
            </p>
            <p className="text-justify text-xl font-medium">
              Dadaji - (Laughing) Veer, this is a story from the times when most
              folks knew nothing about the moon.
            </p>
            <p className="text-justify text-xl font-medium">
              You laughed at the princess because you know that many silly myths
              about the moon have been cleared.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-justify text-xl font-medium">
              Now I will tell you all that you want to know about that headline
            </p>
            <p className="text-justify text-xl font-medium">
              Veer - Wow! I can&apos;t wait to know more. Tell me all, Dadaji.
            </p>
            <p className="text-justify text-xl font-medium">
              All the news channels too were very proudly broadcasting
              India&apos;s moonlanding, and everyone was so happy.
            </p>
            <p className="text-justify text-xl font-medium">
              Why was it such a big news? After all, hasn&apos;t India learnt
              about space from other countries who have already been to space?
            </p>
            <p className="text-justify text-xl font-medium"></p>
          </div>
        </div>
        <div className="flex items-center justify-around gap-96 hover:kenburns-bottom">
          <img src={c3sat} alt="Chandrayan 3 Satellite" />
          <img src={roll} alt="Roller Chandrayan 3 Satellite" />
        </div>
      </section>
      <FooterPage
        onPrev={onPrevPageHandler}
        onClick={indexBTNHandler}
        onNext={onNextPageHandler}
        pageNum1="10"
        pageNum2="11"
      />
    </>
  );
}
