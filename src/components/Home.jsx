import img from "/src/assets/myteam.svg";
import rct from "/src/assets/Rectangle.png";
import iconExp from "/src/assets/icon-experience.svg";
import iconImp from "/src/assets/icon-implementation.svg";
import iconProd from "/src/assets/icon-productivity.svg";
import kady from "/src/assets/kady.jpg"
import aisha from "/src/assets/aisha.jpg"
import arthur from "/src/assets/arthur.jpg"
import ctaImg from "/src/assets/cta-img.svg"
import facebook from "/src/assets/icon-facebook.svg"
import pinterest from "/src/assets/icon-pinterest.svg"
import twitter from "/src/assets/icon-twitter.svg"
import HomeSecondPageEls from "./HomeSecondPageEls";


export default function Home() {

  return (
    <> 
      {/* //HOME FIRST PAGE */}
      <section className="w-full h-[700px]  bg-[#014E56]  font-['Livvic']">
        <div className="container w-[1110px] ml-auto mr-auto">
          <header className="flex items-center justify-between pt-16 w-full ">
            <img src={img} alt="Img" className="w-40 h-10" />
            <div className="ml-[-500px] flex gap-[40px]">
              <a className="text-[18px] text-[#fff]">
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
          <div className="mt-32 flex justify-between pb-[140px]">
            <h1 className="text-[#fff] text-[90px] leading-[100px] font-bold w-[500px] ">
              Find the best talent
            </h1>
            <div className="flex flex-col justify-between w-[445px]">
              <img src={rct} className="w-[50px] h-1" alt="Rectangle" />
              <p className="text-[#fff] text-[18px] font-semibold mb-0">
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
        <div className="container w-[1110px] ml-auto mr-auto flex justify-between gap-[125px] pt-[140px] pb-[140px]">
            <h2 className="text-[48px] text-[#fff] w-[445px] font-bold">Build & manage distributed teams like no one else.</h2>
            <div className="flex flex-col gap-8">
              <HomeSecondPageEls img={iconExp} title={"Experienced Individuals"} text={"Our network is made up of highly experienced professionals who are passionate about what they do."}/>
              <HomeSecondPageEls img={iconImp} title={"Easy to Implement"} text={"Our processes have been refined over years of implementation meaning our teams always deliver."}/>
              <HomeSecondPageEls img={iconProd} title={"Enhanced Productivity"} text={"Our customized platform with in-built analytics helps you manage your distributed teams."}/>
            </div>

        </div>

      </section>

      {/* THIRD PAGE */}
      <section className="bg-[#004047] w-full pt-[140px] font-['Livvic']">
        <div className="container w-[1110px] ml-auto mr-auto">
          <h2 className="text-[#fff] text-center text-[48px] font-bold">Delivering real results for top companies. Some of our success stories.</h2>
          <div className="flex gap-[30px] pb-[140px]">
          <div className="w-[350px] flex flex-col mt-[56px]">
            <p className="text-[#fff] text-center pt-[36px] pb-6 text-[15px] font-semibold">“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
            <h4 className="text-[#fff] text-center pb-2 text-[#79C8C7] text-[18px] font-bold">Kady Baker</h4>
            <p className="text-[#fff] text-center pb-[32px] text-[13px] italic ">Product Manager at Bookmark</p>
            <img src={kady} className="w-[62px] h-[62px] rounded-full ml-auto mr-auto" alt="Img" />
          </div>
          <div className="w-[350px] flex flex-col mt-[56px]">
            <p className="text-[#fff] text-center pt-[36px] pb-6 text-[15px] font-semibold">“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
            <h4 className="text-[#fff] text-center pb-2 text-[#79C8C7] text-[18px] font-bold">Aiysha Reese</h4>
            <p className="text-[#fff] text-center pb-[32px] text-[13px] italic">Founder of Manage</p>
            <img src={aisha} className="w-[62px] h-[62px] rounded-full ml-auto mr-auto" alt="Img" />
          </div>
          <div className="w-[350px] flex flex-col mt-[56px]">
            <p className="text-[#fff] text-center pt-[36px] pb-6 text-[15px] font-semibold">“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
            <h4 className="text-[#fff] text-center pb-2 text-[#79C8C7] text-[18px] font-bold">Arthur Clarke</h4>
            <p className="text-[#fff] text-center pb-[32px] text-[13px] italic">Co-founder of MyPhysio</p>
            <img src={arthur} className="w-[62px] h-[62px] rounded-full ml-auto mr-auto" alt="Img" />
          </div>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#F67E7E] w-full font-['Livvic']">
        <div className="container w-[1110px] mr-auto ml-auto">
          <div className="flex justify-between items-center  pt-[76px] mb-[-76px]">
            <p className="text-[48px] text-[#012F34] font-bold pl-[80px]">Ready to get started?</p>
            <a className=" w-[153px] h-[48px] border-[2px] rounded-[24px] border-[#000] text-[18px] flex items-center justify-center mr-[80px]" href="#">contact us</a>
          </div>

        </div>
          <img className="relative bottom-0 left-0" src={ctaImg} alt="Img" />

      </section>
      

      {/* FOOTER */}
      <footer className="bg-[#002529] w-full font-['Livvic']">
        <div className="container w-[1110px] mr-auto ml-auto ">

          <div className="flex justify-between pt-[48px] pb-[48px]">

          
          
          
            <div className="flex flex-col gap-8 ">
              <img src={img} className="w-40 h-10" alt="Logo"/>
              <div className="flex gap-[40px]">
                <a className="text-[#fff] font-semibold text-[18px]" href="#">home</a>
                <a className="text-[#fff] font-semibold text-[18px]" href="#">about</a>
              </div>
            </div>
              
              <div className="ml-[-125px]">
                <div className="text-[#fff] flex flex-col text-[15px] opacity-[60%] font-semibold gap-1">
                  <a href="#">987  Hillcrest Lane</a>
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
                <p className="opacity-[60%]">Copyright 2020. All Rights Reserved</p>
              </div>

          </div>
          
          
        </div>


      </footer>
    </>
  );
}
