import nikita from "/src/assets/nikita.jpg";
import add from "/src/assets/add.png";
import remove from "/src/assets/remove.png";


export default function MeetDirectors({ img, title, job }) {
  return (
      <div className="bg-[#012F34] w-[350px] h-[250px] text-[#fff] text-center block">
        <img
          className="rounded-full ml-auto mr-auto pt-8 mb-4"
          src={img}
          alt="Img"
        />
        <h5 className="text-[18px] font-bold text-[#79C8C7] ">{title} </h5>
        <p className="italic text-[15px]"> {job}
        </p>
        <button>
            <img className="mt-[24px]" src={add} alt="img" />
        </button>
      </div>

  );
}


