import img from "/src/assets/myteam.svg";
import facebook from "/src/assets/icon-facebook.svg";
import pinterest from "/src/assets/icon-pinterest.svg";
import twitter from "/src/assets/icon-twitter.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      
      <div className="grid grid-cols-3 max-sm:grid-cols-1  grid-rows-1 max-md:grid-cols-2 gap-10 pt-12 pb-12">
        
        
        <div className="flex flex-col gap-8 max-sm:items-center">
          <img src={img} className="w-40 h-10" alt="Logo" />
          <div className="flex gap-10">
            <Link to={"/"} className="text-white font-semibold text-[18px]">
              home
            </Link>
            <Link
              to={"/about"}
              className="text-white font-semibold text-[18px]"
            >
              about
            </Link>
          </div>
        </div>

        <div className="">
          <div className="text-white flex flex-col text-[15px] opacity-60 font-semibold gap-1 max-sm:items-center">
            <a href="#">987 Hillcrest Lane</a>
            <a href="#">Irvine, CA</a>
            <a href="#">California 92714</a>
            <a href="#">Call Us : 949-833-7432</a>
          </div>
        </div>

        <div className="text-white flex flex-col text-[15px] font-semibold gap-14">
          <div className="flex md:justify-end gap-4 max-sm:justify-center">
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
          <p className="opacity-60 flex md:justify-end max-sm:justify-center">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
