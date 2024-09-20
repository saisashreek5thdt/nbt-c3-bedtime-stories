import { useNavigate } from "react-router-dom";
import FooterPage from "../../../Components/FooterPage";
import moon from "../../../assets/images/Page1/moonBG.gif";
import bed from "../../../assets/images/Page1/bed.png";
import page1Audio from "../../../assets/audio/Page1.mp3";

export default function TeluguPage1() {
  const navigate = useNavigate();

  const urlPathHandler = () => {
    navigate("/");
  };

  const prevPageHandler = () => {
    navigate("/");
  };

  const nextPageHandler = () => {
    navigate("/");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] page1 bg-cover select-none">
        <div className="flex gap-10">
          <p className="p-12 leading-loose text-justify text-xl font-AMS select-none">
            పదేళ్ల వీర్ చాలా తెలివైన మరియు ఆసక్తిగల అబ్బాయి. అతను మరియు అతని
            దాదాజీ గొప్ప స్నేహితులు. ఒకే గదిలో పడుకుంటారు. నిద్రవేళలో నిద్రపోయే
            ముందు, దాదాజీ ఏదైనా ఆసక్తికరమైన కథలను తయారుచేస్తాడు చిన్న వీర్
            గురించి తెలుసుకోవాలని అతను భావిస్తున్నాడు. వీర్ ఇష్టపడతాడు ఈ కథలు
            వినండి.
          </p>
          <div className="h-full w-full relative select-none">
            <img
              src={moon}
              alt="moon earth space"
              className="w-full bg-cover"
            />
          </div>
        </div>
        <div className="flex absolute xl:top-[29rem]">
          <img
            src={bed}
            alt="moon earth space"
            className="relative 2xl:h-[75vh] 2xl:bottom-[22rem] bg-cover select-none"
          />
          <div className="flex flex-col gap-5 relative xl:right-64 xl:-mt-[8rem] 2xl:right-64 xl:bottom-28 2xl:bottom-16">
            <p className="leading-loose text-justify text-xl font-AMS select-none">
              వీర్ పాఠశాల త్వరలో స్పేస్‌పై వర్క్‌షాప్ నిర్వహించనుంది. వీర్ ఈ
              వర్క్‌షాప్‌లో చురుకుగా పాల్గొనాలన్నారు. అతను చాలా ఉన్నాడు భారతదేశ
              అంతరిక్ష పరిశోధన గురించి తెలుసుకోవాలనే ఆసక్తి ఉంది కార్యక్రమం.
              టాపిక్ నిరంతరం అతని మనస్సులో ప్లే చేయబడింది. ఒక రాత్రి, తన
              హోంవర్క్ పూర్తి చేసిన తర్వాత, స్కూల్ కోసం తన బ్యాగ్ ప్యాక్ చేయడం
              మరియు తన యూనిఫాం రెడీ చేసుకొని, వీర్ బెడ్‌పైకి దూకి, హత్తుకున్నాడు
              దాదాజీకి వ్యతిరేకంగా.
            </p>
            <p className="text-justify text-xl font-AMS select-none">
              వీర్ - దాదాజీ, నాకు అంతరిక్షం, చంద్రుడు మరియు వ్యోమగాముల గురించి
              ఒక కథ చెప్పండి.
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
