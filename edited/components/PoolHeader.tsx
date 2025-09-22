import { imgFrame71 } from "../imports/svg-w4ktt";

function LogoIcon() {
  return (
    <div className="relative shrink-0 size-[26px]">
      <img className="block max-w-none size-full" src={imgFrame71} />
    </div>
  );
}

function CompanyName() {
  return (
    <div className="content-stretch flex gap-9 items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#393939] text-[20px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[1.2] whitespace-pre">KYD Labs</p>
      </div>
    </div>
  );
}

function LogoAndName() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
      <LogoIcon />
      <CompanyName />
    </div>
  );
}

export function PoolHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-center justify-start relative shrink-0 w-full max-w-[491px]">
      <LogoAndName />
      <div
        className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#393939] text-[36px] text-center tracking-[-0.36px]"
        style={{ width: "min-content" }}
      >
        <p className="leading-[1.2]">KYD Labs General Venue Pool</p>
      </div>
    </div>
  );
}