import rct from "/src/assets/Rectangle.png";
import ctaImg from "/src/assets/cta-img.svg";
import MeetDirectors from "./MeetDirectors";

// PEOPLE
import nikita from "/src/assets/nikita.jpg";
import cristian from "/src/assets/cristian.jpg";
import cruz from "/src/assets/cruz.png";
import drake from "/src/assets/drake.jpg";
import griffin from "/src/assets/griffin.jpg";
import aden from "/src/assets/aden.jpg";

// LOGOS
import theVerge from "/src/assets/the-verge.png";
import theJakartaPost from "/src/assets/the-jakarta-post.png";
import theGuardian from "/src/assets/the-guardian.png";
import techradar from "/src/assets/techradar.png";
import gadgetsNow from "/src/assets/gadgets-now.png";

import Header from "./Header";
import Footer from "./Footer";


import { Link } from "react-router-dom";



export default function About() {
  return (
    <>
      {/* //HOME FIRST PAGE */}
      <section className="w-full   bg-[#014E56]  font-['Livvic']">
        <div className="container w-[1110px] ml-auto mr-auto">
          <Header/>
          {/* CONTENT */}
          <div className="mt-[120px] flex justify-between pb-[120px] gap-[100px]">
            <h1 className="text-[white] text-[90px] leading-[100px]  font-bold w-[350px]">
              About
            </h1>
            <div className="flex flex-col justify-between w-[730px] h-[156px]">
              <img src={rct} className="w-[50px] h-1" alt="Rectangle" />
              <p className="text-[white] text-[18px] font-semibold">
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
          <h1 className="text-[48px] text-white text-center mb-16 font-bold ">
            Meet the directors
          </h1>
          <div className="grid grid-cols-3 max-md:grid-cols-2 grid-rows-2 gap-y-12 max-md:gap-y-6 max-md:gap-x-4  gap-x-[30px]">
            <MeetDirectors img={nikita} title={"Nikita Marks"} job={"Founder & CEO"}/>
            <MeetDirectors img={cristian} title={"Cristian Duncan"} job={"Co-founder & COO"}/>
            <MeetDirectors img={cruz} title={"Cruz Hamer"} job={"Co-founder & CTO"}/>
            <MeetDirectors img={drake} title={"Drake Heaton"} job={"Business Development Lead"}/>
            <MeetDirectors img={griffin} title={"Griffin Wise"} job={"Lead Marketing"}/>
            <MeetDirectors img={aden} title={"Aden Allan"} job={"Account Manager"}/>
            
          </div>
        </div>
      </section>

      {/* THIRD PAGE */}
      <section className="bg-[#012F34] w-full pt-[140px] font-['Livvic']">
        <div className="container w-[1110px] ml-auto mr-auto pb-[140px] ">
          <h2 className="text-white text-center text-[48px] font-bold mb-16">
            Some of our clients
          </h2>
          <div className="flex justify-between items-center">
            <img className="w-[165px] h-7" src={theVerge} alt="theVerge"/>
            <img className="w-[184px] h-[23px]" src={theJakartaPost} alt="theJakartaPost"/>
            <img className="w-[180px] h-7" src={theGuardian} alt="theGuardian"/>
            <img className="w-[165px] h-7" src={techradar} alt="techradar"/>
            <img className="w-[98px] h-[45px]" src={gadgetsNow} alt="gadgetsNow"/>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F67E7E] w-full font-['Livvic']">
        <div className="container w-[1110px] mr-auto ml-auto">
          <div className="flex justify-between items-center  pt-[76px] mb-[-76px]">
            <p className="text-[48px] text-[#012F34] font-bold pl-20">
              Ready to get started?
            </p>
            <Link to={"/contact"} className=" w-[153px] h-12 border-2 rounded-3xl border-black text-[18px] flex items-center justify-center mr-20">contact us</Link>
          </div>
        </div>
        <img className="relative bottom-0 left-0" src={ctaImg} alt="Img" />
      </section>

      {/* FOOTER */}
      <footer className="bg-[#002529] w-full font-['Livvic']">
        <div className="container w-[1110px] mr-auto ml-auto ">
          <Footer/>
        </div>
      </footer>
    </>
  );
}
