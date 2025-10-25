import rct from "/src/assets/Rectangle.png";
import iconExp from "/src/assets/icon-experience.svg";
import iconImp from "/src/assets/icon-implementation.svg";
import iconProd from "/src/assets/icon-productivity.svg";
import kady from "/src/assets/kady.jpg";
import aisha from "/src/assets/aisha.jpg";
import arthur from "/src/assets/arthur.jpg";
import ctaImg from "/src/assets/cta-img.svg";
import HomeSecondPageEls from "./HomeSecondPageEls";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import CTA from "./CTA";

export default function Home() {
  return (
    <>
      {/* //HOME FIRST PAGE */}
      <section className="w-full  bg-[#014E56]  font-['Livvic']">
        <div className="container lg:w-[1110px] max-sm:w-100 ml-auto mr-auto">
          <Header />
          {/* CONTENT */}
          <div className="mt-32 flex max-md:flex-col max-md:gap-6 max-md:text-center  justify-between max-md:w-[520px] max-sm:w-100 max-[375px]:w-[300px] pb-[250px] ml-auto mr-auto">
            <h1 className="text-white text-[90px] leading-[100px] font-bold w-[500px] max-md:w-[520px] max-sm:w-100 max-[375px]:w-[300px]">
              Find the best <span className="text-[#F67E7E]">talent</span>
            </h1>
            <div className="flex flex-col justify-between w-[445px] max-md:w-[520px] max-sm:w-100">
              <img src={rct} className="w-[50px] h-1 max-md:hidden" alt="Rectangle" />
              <p className="text-white text-[18px] font-semibold mb-0">
                Finding the right people and building high performing teams can
                be hard. Most companies aren’t tapping into the abundance of
                global talent. We’re about to change that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND PAGE */}
      <section className="w-full bg-[#012F34] font-['Livvic']">
        <div className="container lg:w-[1110px] max-md:w-[580px] max-sm:w-100 ml-auto mr-auto flex max-md:flex-col justify-between pt-[140px] pb-[140px]">
          <h2 className="text-[48px] text-white md:w-80 lg:w-[445px] font-bold max-md:mb-16" >
            Build & manage distributed teams like no one else.
          </h2>
          <div className="flex flex-col gap-8">
            <HomeSecondPageEls
              img={iconExp}
              title={"Experienced Individuals"}
              text={
                "Our network is made up of highly experienced professionals who are passionate about what they do."
              }
            />
            <HomeSecondPageEls
              img={iconImp}
              title={"Easy to Implement"}
              text={
                "Our processes have been refined over years of implementation meaning our teams always deliver."
              }
            />
            <HomeSecondPageEls
              img={iconProd}
              title={"Enhanced Productivity"}
              text={
                "Our customized platform with in-built analytics helps you manage your distributed teams."
              }
            />
          </div>
        </div>
      </section>

      {/* THIRD PAGE */}
      <section className="bg-[#004047] w-full pt-[140px] font-['Livvic']">
        <div className="container lg:w-[1110px] max-md:w-[580px] max-sm:w-100 ml-auto mr-auto">
          <h2 className="text-white text-center max-md:text-[32px] text-[48px] font-bold">
            Delivering real results for top companies. Some of our <br /> <span className="text-[#79C8C7]">success
            stories.</span>
          </h2>
          <div className="md:flex text-center gap-[30px] max-md:gap-12 pb-[140px]">
            <div className="md:w-[350px] flex flex-col mt-14">
              <p className="text-white text-center pt-9 pb-6 text-[15px] font-semibold">
                “The team perfectly fit the specialized skill set required. They
                focused on the most essential features helping us launch the
                platform eight months faster than planned.”
              </p>
              <h4 className=" text-center pb-2 text-[#79C8C7] text-[18px] font-bold">
                Kady Baker
              </h4>
              <p className="text-white text-center pb-8 text-[13px] italic ">
                Product Manager at Bookmark
              </p>
              <img
                src={kady}
                className="w-[62px] h-[62px] rounded-full ml-auto mr-auto"
                alt="Img"
              />
            </div>
            <div className="md:w-[350px] flex flex-col mt-14">
              <p className="text-white text-center pt-9 pb-6 text-[15px] font-semibold">
                “We needed to automate our entire onboarding process. The team
                came in and built out the whole journey. Since going live, user
                retention has gone through the roof!”
              </p>
              <h4 className=" text-center pb-2 text-[#79C8C7] text-[18px] font-bold">
                Aiysha Reese
              </h4>
              <p className="text-white text-center pb-8 text-[13px] italic">
                Founder of Manage
              </p>
              <img
                src={aisha}
                className="w-[62px] h-[62px] rounded-full ml-auto mr-auto"
                alt="Img"
              />
            </div>
            <div className="md:w-[350px] flex flex-col mt-14">
              <p className="text-white text-center pt-9 pb-6 text-[15px] font-semibold">
                “Amazing. Our team helped us build an app that delivered a new
                experience for hiring a physio. The launch was an instant
                success with 100k downloads in the first month.”
              </p>
              <h4 className=" text-center pb-2 text-[#79C8C7] text-[18px] font-bold">
                Arthur Clarke
              </h4>
              <p className="text-white text-center pb-8 text-[13px] italic">
                Co-founder of MyPhysio
              </p>
              <img
                src={arthur}
                className="w-[62px] h-[62px] rounded-full ml-auto mr-auto"
                alt="Img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F67E7E] w-full font-['Livvic']">
        <div className="container lg:w-[1110px] max-sm:100 mr-auto ml-auto">
          <CTA/>
        </div>
        <img className="lg:relative bottom-0 left-0 md:hidden sm:hidden lg:block" src={ctaImg} alt="Img" />
      </section>

      {/* FOOTER */}
      <footer className="bg-[#002529] w-full font-['Livvic']">
        <div className="container lg:w-[1110px] max-md:w-[580px] max-sm:w-100 mr-auto ml-auto ">
          <Footer />
        </div>
      </footer>
    </>
  );
}
