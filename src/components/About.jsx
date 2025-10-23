import img from "/src/assets/myteam.svg";
import rct from "/src/assets/Rectangle.png";
import ctaImg from "/src/assets/cta-img.svg";
import facebook from "/src/assets/icon-facebook.svg";
import pinterest from "/src/assets/icon-pinterest.svg";
import twitter from "/src/assets/icon-twitter.svg";
import MeetDirectors from "./MeetDirectors";
import nikita from "/src/assets/nikita.jpg";

import theVerge from "/src/assets/the-verge.png";
import theJakartaPost from "/src/assets/the-jakarta-post.png";
import theGuardian from "/src/assets/the-guardian.png";
import techradar from "/src/assets/techradar.png";
import gadgetsNow from "/src/assets/gadgets-now.png";



export default function About() {
  return (
    <>
      {/* //HOME FIRST PAGE */}
      <section className="w-full h-[700px]  bg-[#014E56]  font-['Livvic']">
        <div className="container w-[1110px] ml-auto mr-auto">
          <header className="flex items-center justify-between pt-16 w-full ">
            <img src={img} alt="Img" className="w-40 h-10" />
            <div className="ml-[-500px] flex gap-[40px]">
              <a href="#" className="text-[18px] text-[#fff]">
                home
              </a>
              <a href="#" className="text-[18px] text-[#fff]">
                about
              </a>
            </div>
            <a href="#" className="text-[18px] text-[#fff]">
              contact us
            </a>
          </header>
          {/* CONTENT */}
          <div className="mt-[180px] flex justify-between pb-[120px] gap-[100px]">
            <h1 className="text-[#fff] text-[90px] leading-[100px]  font-bold w-[350px]">
              About
            </h1>
            <div className="flex flex-col justify-between w-[730px] h-[156px]">
              <img src={rct} className="w-[50px] h-1" alt="Rectangle" />
              <p className="text-[#fff] text-[18px] font-semibold">
                We help companies build dynamic teams made up of top global
                talent. Using our network of passionate professionals we drive
                innovation and deliver incredible outcomes. Talented, diverse
                teams shape the best products and experiences. We’ll bring those
                teams to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND PAGE */}
      <section className="w-full bg-[#004047] font-['Livvic']">
        <div className="container w-[1110px] ml-auto mr-auto flex flex-col justify-between pt-[140px] pb-[140px]">
          <h1 className="text-[48px] text-[#fff] text-center mb-16 font-bold ">
            Meet the directors
          </h1>
          <div className="grid grid-cols-3 grid-rows-2 gap-y-[48px] gap-x-[30px]">
            <MeetDirectors img={nikita} title={"Nikita Marks"} job={"Founder & CEO"}/>
            <MeetDirectors img={nikita} title={"Nikita Marks"} job={"Founder & CEO"}/>
            <MeetDirectors img={nikita} title={"Nikita Marks"} job={"Founder & CEO"}/>
            <MeetDirectors img={nikita} title={"Nikita Marks"} job={"Founder & CEO"}/>
            <MeetDirectors img={nikita} title={"Nikita Marks"} job={"Founder & CEO"}/>
            <MeetDirectors img={nikita} title={"Nikita Marks"} job={"Founder & CEO"}/>
            
          </div>
        </div>
      </section>

      {/* THIRD PAGE */}
      <section className="bg-[#012F34] w-full pt-[140px] font-['Livvic']">
        <div className="container w-[1110px] ml-auto mr-auto pb-[140px] ">
          <h2 className="text-[#fff] text-center text-[48px] font-bold mb-16">
            Some of our clients
          </h2>
          <div className="flex justify-between items-center">
            <img className="w-[165px] h-[28px]" src={theVerge} alt="theVerge"/>
            <img className="w-[184px] h-[23px]" src={theJakartaPost} alt="theJakartaPost"/>
            <img className="w-[180px] h-[28px]" src={theGuardian} alt="theGuardian"/>
            <img className="w-[165px] h-[28px]" src={techradar} alt="techradar"/>
            <img className="w-[98px] h-[45px]" src={gadgetsNow} alt="gadgetsNow"/>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F67E7E] w-full font-['Livvic']">
        <div className="container w-[1110px] mr-auto ml-auto">
          <div className="flex justify-between items-center  pt-[76px] mb-[-76px]">
            <p className="text-[48px] text-[#012F34] font-bold pl-[80px]">
              Ready to get started?
            </p>
            <a
              className=" w-[153px] h-[48px] border-[2px] rounded-[24px] border-[#000] text-[18px] flex items-center justify-center mr-[80px]"
              href="#"
            >
              contact us
            </a>
          </div>
        </div>
        <img className="relative bottom-0 left-0" src={ctaImg} alt="Img" />
      </section>

      {/* FOOTER */}
      <footer className="bg-[#002529] w-full font-['Livvic']">
        <div className="container w-[1110px] mr-auto ml-auto ">
          <div className="flex justify-between pt-[48px] pb-[48px]">
            <div className="flex flex-col gap-8 ">
              <img src={img} className="w-40 h-10" alt="Logo" />
              <div className="flex gap-[40px]">
                <a className="text-[#fff] font-semibold text-[18px]" href="#">
                  home
                </a>
                <a className="text-[#fff] font-semibold text-[18px]" href="#">
                  about
                </a>
              </div>
            </div>

            <div className="ml-[-125px]">
              <div className="text-[#fff] flex flex-col text-[15px] opacity-[60%] font-semibold gap-1">
                <a href="#">987 Hillcrest Lane</a>
                <a href="#">Irvine, CA</a>
                <a href="#">California 92714</a>
                <a href="#">Call Us : 949-833-7432</a>
              </div>
            </div>

            <div className="text-[#fff] flex flex-col text-[15px] font-semibold gap-1 gap-[56px]">
              <div className="flex justify-end gap-4">
                <a href="#">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="#">
                  <img src={pinterest} alt="pinterest" />
                </a>
                <a href="#">
                  <img src={twitter} alt="twitter" />
                </a>
              </div>
              <p className="opacity-[60%]">
                Copyright 2020. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
