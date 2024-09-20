import { useNavigate } from "react-router-dom";
import FooterPage from "../../../Components/FooterPage";
import moon from "../../../assets/images/Page1/moonBG.gif";
import bed from "../../../assets/images/Page1/bed.png";
import page1Audio from "../../../assets/audio/Page1.mp3";

export default function HindiPage1() {
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
          <p className="p-16 leading-loose text-justify text-xl font-AMS select-none">
            दस वर्षीय वीर बहुत बुद्धिमान और जिज्ञासु लड़का है। वह और उसका दादाजी
            बहुत अच्छे दोस्त हैं. वे एक ही कमरे में सोते हैं. सोते समय सोने से
            पहले दादाजी कोई भी दिलचस्प किस्सा बना देते हैं वह विषय जिसके बारे
            में उन्हें लगता है कि वीर को बहुत कम जानकारी होनी चाहिए। वीर को पसंद
            है सुनिए ये कहानियाँ.
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
          <div className="flex flex-col gap-5 relative xl:right-64 xl:-mt-[4rem] 2xl:right-64 xl:bottom-28 2xl:bottom-16">
            <p className="leading-loose text-justify text-xl font-AMS select-none">
              वीर का स्कूल जल्द ही अंतरिक्ष पर एक कार्यशाला आयोजित करने वाला था।
              वीर इस कार्यशाला में सक्रिय रूप से भाग लेना चाहता था। वह बहुत था
              भारत के अंतरिक्ष अनुसंधान के बारे में जानने में रुचि है कार्यक्रम.
              यह विषय लगातार उसके दिमाग में चलता रहा। एक रात, अपना होमवर्क पूरा
              करने के बाद, स्कूल के लिए अपना बैग पैक करना, और अपनी वर्दी तैयार
              करके, वीर बिस्तर पर कूद गया और चिपक गया दादाजी के खिलाफ.
            </p>
            <p className="text-justify text-xl font-AMS select-none">
              वीर - दादाजी, मुझे अंतरिक्ष, चंद्रमा और के बारे में एक कहानी बताओ
              अंतरिक्ष यात्री.
            </p>
          </div>
        </div>
      </section>
      <FooterPage
        pageNum1="दो"
        pageNum2="तीन"
        onClick={urlPathHandler}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
        audioSRC={page1Audio}
      />
    </>
  );
}
