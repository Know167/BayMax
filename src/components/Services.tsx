import Section from "./Section";
import Headings from "./Headings";
import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = (): React.ReactNode => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Headings
          title="Generative AI made for creators."
          text="BayMax unlocks the potential of AI-powered applications"
        />
        <div className="relative">
          <div className="relative z-1 flex items-center mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 h-[39rem] xl:h-[46rem] ">
            <div className="absolute top-0 left-0 h-full w-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                width={800}
                alt="Smartest AI"
                height={730}
                className="w-full h-full object-cover md:object-right "
              />
            </div>
            <div className="relative z-1 ml-auto max-w-[17rem] ">
              <h4 className="h4 mb-4 ">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3 ">
                BayMax unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6 ">
                    <img src={check} width={24} height={24} />
                    <p className="ml-4 ">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:bottom-3 lg:-translate-x-1/2" />
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative border border-n-1/10 min-h-[39rem] rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  alt="robot"
                  className="h-full w-full object-cover "
                  width={630}
                  height={750}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 ">
                  <h4 className="h-4 mb-4 ">Photo Editing</h4>
                  <p className="body-2 mb-[3rem] text-n-3 ">
                    Automatically enhance your photos using our AI app&apos;s
                    photo editing feature. Try it now!
                  </p>
                </div>
                <PhotoChatMessage />
              </div>
            </div>
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h-4 mb-4 ">Video generation</h4>
                <p className="body-2 mb-8 text-n-3 ">
                  The world&apos;s most powerful AI photo and video art
                  generation online. What will you create?
                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15 "
                      }`}>
                      <div
                        className={`${
                          index == 2
                            ? "flex items-center justify-center h-full w-full bg-n-7 rounded-[1rem]"
                            : ""
                        }`}>
                        <img src={item} alt={item} width={24} height={24} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem] ">
                <img
                  src={service3}
                  alt="service3"
                  className="w-full h-full object-cover "
                  height={400}
                  width={520}
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
