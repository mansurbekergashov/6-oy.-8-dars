import { Link } from "react-router-dom";
import img from "/src/assets/myteam.svg";
import bar from "/src/assets/bar.png";


export default function Header() {
  return (
    <div>
      <header className="flex items-center justify-between pt-16 w-full ">
        <Link to={"/"}><img src={img} alt="Img" className="w-40 h-10" /></Link> 
        <div className="lg:ml-[-500px] max-sm:hidden  md:ml-[-300px] max-md:-ml-1 flex gap-10">
          <Link to={"/"} className="text-[18px] text-white">home</Link>
          <Link to={"/about"} className="text-[18px] text-white">
            about
          </Link>
        </div>
        <Link to={"/contact"} className="text-[18px] text-white max-sm:hidden">
          contact us
        </Link>
        <img className="lg:hidden md:hidden max-md:hidden max-sm:block" src={bar} alt="Bar"/>
      </header>
    </div>
  );
}
