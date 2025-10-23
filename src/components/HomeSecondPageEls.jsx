export default function HomeSecondPageEls({ title, text, img }) {
  return (
    <span className="flex items-center gap-6 w-[540px]">
      <img src={img} alt="Img" />
      <span>
        <h5 className="text-[#F67E7E] font-bold text-[18px]">
          {title}
        </h5>
        <p className="text-[#fff] font-semibold text-[15px] mt-4">
          {text}
        </p>
      </span>
    </span>
  );
}
