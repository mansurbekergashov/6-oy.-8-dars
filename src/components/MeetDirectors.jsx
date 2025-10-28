import add from "/src/assets/add.png";
import remove from "/src/assets/remove.png";


export default function MeetDirectors({ img, title, job }) {
  return (
      <div className="bg-[#012F34] lg:w-[350px]  lg:h-[250px] md:w-[200px] md:h-[280px] text-white text-center block ">
        <img
          className="rounded-full ml-auto mr-auto pt-8 mb-4"
          src={img}
          alt="Img"
        />
        <h5 className="text-[18px] font-bold text-[#79C8C7] ">{title} </h5>
        <p className="italic text-[15px]"> {job}
        </p>
        <button className="lg:mt-6 md:mt-14 sm:m-8">
            <img  src={add} alt="img" />
        </button>
      </div>

  );
}


