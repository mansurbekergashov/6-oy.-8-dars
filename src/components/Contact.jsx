import img from "/src/assets/myteam.svg";
import facebook from "/src/assets/icon-facebook.svg";
import pinterest from "/src/assets/icon-pinterest.svg";
import twitter from "/src/assets/icon-twitter.svg";
import iconExp from "/src/assets/icon-experience.svg";
import iconImp from "/src/assets/icon-implementation.svg";
import iconProd from "/src/assets/icon-productivity.svg";
import Header from "./Header";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      {/* //HOME FIRST PAGE */}
      <section className="w-full  bg-[#014E56]  font-['Livvic']">
        <div className="container md:w-[1110px] sm:w-[300px] ml-auto mr-auto">

          <Header/>
         

          <div className="md:flex justify-between items-end pb-[120px] mt-[120px]">

          <div className="">
            <h2 className="text-[64px] font-bold text-white">Contact</h2>
            <p className="text-[#F67E7E] text-[32px] font-bold mt-4">Ask us about</p>

            <div className="flex flex-col gap-4 mt-8">
              <span className="flex gap-[23px] items-center text-white font-bold text-[18px]">
                <img src={iconExp} alt="Img" />
                <p>The quality of our talent network</p>
              </span>
              <span className="flex gap-[23px] items-center text-white font-bold text-[18px]">
                <img src={iconImp} alt="Img" />
                <p>Usage & implementation of our software</p>
              </span>
              <span className="flex gap-[23px] items-center text-white font-bold text-[18px]">
                <img src={iconProd} alt="Img" />
                <p>How we help drive innovation</p>
              </span>
            </div>
          </div>


          <div>
            <form className="flex flex-col gap-6 md:w-[540px] sm:w-[300px]">
              
              <input className="bg-transparent pl-2 border-b  focus:border-b focus:outline-none focus:ring-0 h-[42px] text-white" type="text" placeholder="Name"/> 
              <input className="bg-transparent pl-2 border-b  focus:border-b focus:outline-none focus:ring-0 h-[42px] text-white" type="email" placeholder="Email Address"/>
              <input className="bg-transparent pl-2 border-b  focus:border-b focus:outline-none focus:ring-0 h-[42px] text-white" type="text" placeholder="Company Name"/>
              <input className="bg-transparent pl-2 border-b  focus:border-b focus:outline-none focus:ring-0 h-[42px] text-white" type="text" placeholder="Title"/>
              <input className="bg-transparent pl-2 border-b  focus:border-b focus:outline-none focus:ring-0 h-[84px] text-white" type="textarea" placeholder="Message"/>
              <a className="flex bg-white w-[123px] h-12 text-[#004047] text-[18px] font-semibold rounded-3xl justify-center items-center mt-6" href="#">submit</a>
            </form>
          </div>

        </div>
        
        
        
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#002529] w-full font-['Livvic']">
        <div className="container md:w-[1110px] sm:w-[300px] mr-auto ml-auto ">
          <Footer/>
        </div>
      </footer>
    </>
  );
}
