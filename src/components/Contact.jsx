import img from "/src/assets/myteam.svg";
import facebook from "/src/assets/icon-facebook.svg"
import pinterest from "/src/assets/icon-pinterest.svg"
import twitter from "/src/assets/icon-twitter.svg"
import iconExp from "/src/assets/icon-experience.svg";
import iconImp from "/src/assets/icon-implementation.svg";
import iconProd from "/src/assets/icon-productivity.svg";


export default function Contact() {

  return (
    <> 
      {/* //HOME FIRST PAGE */}
      <section className="w-full h-[700px]  bg-[#014E56]  font-['Livvic']">
        <div className="container w-[1110px] ml-auto mr-auto">

          <div>
            <h2></h2>
            <p></p>
            <div>
              <span>
                <img src={iconExp} alt="Img" />
              </span>
            </div>
          </div>
          <div></div>
          
        </div>
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
