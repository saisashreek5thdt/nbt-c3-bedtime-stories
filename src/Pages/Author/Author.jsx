import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/FooterQuiz";
import author from "../../assets/images/author/author.jpg";

export default function Author() {
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
      <section className="w-[100vw] h-[100vh] bg-cover select-none">
        <div className="mx-auto md:p-3 lg:p-1 xl:p-16 grid grid-cols-2 gap-4">
          <div className="md:py-2 lg:py-1 xl:py-0 flex flex-col md:gap-2 lg:gap-2">
            <h2 className="text-start text-2xl font-medium">About Author</h2>
            <p className="text-justify text-base leading-8 font-normal text-slate-800">
              Yuvraj Malik is presently the Director, National Book Trust, India
              (under the Ministry of Education, Government of India) since 2020.
              Before joining National Book Trust, India, he has served with
              Ministry of Defence, Ministry of Home Affairs, Raj Bhawan, Jammu &
              Kashmir, United Nations Missions in Africa and several operational
              areas in administrative and operational assignments.
            </p>
            <p className="text-justify text-base leading-8 font-normal text-slate-800">
              He is also the Fair director / CEO of New Delhi World Book fair
              which is the biggest B2C book fair in the world. He has also been
              Chairman of Commission for Scientific & Technical Terminology
              (CSTT), Ministry of Education, Government of India.
            </p>
            <p className="text-justify text-base leading-8 font-normal text-slate-800">
              Under his leadership, National Book Trust, India is implementing
              the prestigious PM-YUVA Mentorship Scheme for Young Authors in 22
              official languages of India and English launched by Ministry of
              Education, Government of India as part of Azadi Ka Amrit Mahotsav
              events.
            </p>
            <Link to="mailto:yuvrajmalik117@gmail.com">
              <p className="text-justify text-lg leading-8 font-bold text-slate-800">
                yuvrajmalik117@gmail.com
              </p>
            </Link>
          </div>
          <div className="mx-auto md:my-1 lg:my-3 xl:my-0 flex items-center justify-center">
            <img
              src={author}
              alt="Yuvraj Malik"
              className="md:h-[55vh] lg:h-[60vh] xl:h-[70vh] shadow-lg"
            />
          </div>
        </div>
      </section>
      <Footer
        pageNum1="00"
        pageNum2="00"
        onClick={urlPathHandler}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
      <h1>Author Page</h1>
    </>
  );
}
