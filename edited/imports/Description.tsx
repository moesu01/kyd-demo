import { imgStar1 } from "./svg-62ovv";

function DescriptionHeader() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 rounded-[8px] top-0 w-[360px]" data-name="description header">
      <div className="relative shrink-0 size-[22px]">
        <div className="absolute inset-[5.08%_7.16%_13.22%_7.16%]">
          <img className="block max-w-none size-full" src={imgStar1} />
        </div>
      </div>
      <div className="flex flex-col font-['Arial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white">
        <p className="leading-[19.2px] whitespace-pre">EARN FROM ACTS LIKE</p>
      </div>
      <div className="relative shrink-0 size-[22px]">
        <div className="absolute inset-[5.08%_7.16%_13.22%_7.16%]">
          <img className="block max-w-none size-full" src={imgStar1} />
        </div>
      </div>
    </div>
  );
}

export default function Description() {
  return (
    <div className="relative size-full" data-name="description">
      <div className="absolute font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] h-[17px] leading-[0] left-0 not-italic text-[18px] text-justify text-white top-[34px] uppercase w-[360px]">
        <p className="leading-[1.2] whitespace-pre-wrap">
          {`DRAKE • TAYLOR SWIFT •  BAD BUNNY`}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
      </div>
      <DescriptionHeader />
    </div>
  );
}