import { imgFrame71 } from "../imports/svg-w4ktt";

function LogoIcon() {
  return (
    <div className="size-[26px]">
      <img className="size-full" src={imgFrame71} />
    </div>
  );
}

function CompanyName() {
  return (
    <div className="flex items-center">
      <div className="font-medium text-[#393939] text-[20px] tracking-[-0.6px]">
        <p className="leading-[1.2]">$KYD Protocol</p>
      </div>
    </div>
  );
}

function LogoAndName() {
  return (
    <div className="flex gap-3 items-center">
      <LogoIcon />
      <CompanyName />
    </div>
  );
}

export function StakingHeader() {
  return (
    <div className="flex flex-col gap-2 items-center w-full max-w-[491px]">
      <LogoAndName />
      <div className="font-medium text-[#393939] text-[28px] md:text-[36px] text-center tracking-[-0.36px]">
        <p className="leading-[1.2]">Protocol Staking</p>
      </div>
    </div>
  );
}
