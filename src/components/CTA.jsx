import { Link } from "react-router-dom";


export default function CTA() {
  return (
    <div>
      <div className="sm:flex justify-between items-center  pt-[76px] lg:mb-[-76px] sm:pb-19 max-sm:flex max-sm:flex-col max-sm:items-center ">
        <p className="text-[48px] max-md:text-[32px] text-[#012F34] font-bold md:ml-20 max-md:ml-10 max-sm:w-100 max-sm:ml-0">
          Ready to get started?
        </p>
        <Link
          to={"/contact"}
          className=" w-[153px] h-12 border-2 rounded-3xl border-black text-[18px] flex items-center justify-center md:mr-20 max-md:mr-10 max-sm:mr-0"
        >
          contact us
        </Link>
      </div>
    </div>
  );
}
