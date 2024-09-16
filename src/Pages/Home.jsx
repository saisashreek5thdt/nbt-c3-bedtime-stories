import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import FooterMain from "../Components/FooterMain";
import lang from "../assets/images/icons/lang.png";
import coverBG from "../assets/images/home/homePageBG1.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();

  return (
    <>
      <section className="w-[100vw] h-[100vh] bgHome overflow-hidden">
        <div
          className="flex items-end justify-end pr-5 py-10"
          onClick={() => setOpen(true)}
        >
          <img
            src={lang}
            alt="Language Icon"
            className="w-14 h-14 animate-pulse cursor-pointer"
          />
        </div>
        <div className="xl:w-[30rem] xl:max-h-80 mx-auto top-12 flex items-center justify-center">
          <img
            src={coverBG}
            alt="Chandrayaan 3"
            className="2xl:w-[38rem] 2xl:bottom-48"
          />
        </div>
      </section>
      <FooterMain />
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Select Language
                    </DialogTitle>
                    <div className="mt-2">
                      <div className="grid grid-cols-8 gap-4">
                        <div className="flex gap-4">
                          <h2 className="p-2 bg-[#c4122f] text-white rounded-lg shadow-lg cursor-pointer" onClick={() => navigate('/books/page1')}>English</h2>
                          <h2 className="p-2 bg-[#e25a71] hover:bg-[#c4122f] text-white rounded-lg shadow-lg cursor-pointer">हिंदी</h2>
                          <h2 className="p-2 bg-[#e25a71] hover:bg-[#c4122f] text-white rounded-lg shadow-lg cursor-pointer">తెలుగు</h2>
                          <h2 className="p-2 bg-[#e25a71] hover:bg-[#c4122f] text-white rounded-lg shadow-lg cursor-pointer">தமிழ்</h2>
                          <h2 className="p-2 bg-[#e25a71] hover:bg-[#c4122f] text-white rounded-lg shadow-lg cursor-pointer">অসমীয়া</h2>
                        </div>                        
                      </div>
                      <div className="py-4 grid grid-cols-8 gap-4">
                        <div className="flex gap-4">
                          <h2 className="p-2 bg-[#e25a71] hover:bg-[#c4122f] text-white rounded-lg shadow-lg cursor-pointer">ગુજરાતી</h2>
                          <h2 className="p-2 bg-[#e25a71] hover:bg-[#c4122f] text-white rounded-lg shadow-lg cursor-pointer">ಕನ್ನಡ</h2>
                          <h2 className="p-2 bg-[#e25a71] hover:bg-[#c4122f] text-white rounded-lg shadow-lg cursor-pointer">മലയാളം</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    data-autofocus
                    onClick={() => setOpen(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
