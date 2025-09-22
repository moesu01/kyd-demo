import { imgStar1 } from "../imports/svg-t6i4s";

function ApyCallOut() {
  return (
    <div
      className="backdrop-blur-[10.45px] backdrop-filter bg-[rgba(0,0,0,0.21)] box-border content-stretch flex gap-3 items-center justify-start px-3 py-2 relative rounded-[8px] shrink-0"
      data-name="APY call out"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#f0f1f1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)]"
      />
      <div className="relative shrink-0 size-[18px]">
        <div className="absolute inset-[6.21%_8.21%_14.03%_8.21%]">
          <img
            className="block max-w-none size-full"
            src={imgStar1}
          />
        </div>
      </div>
      <div className="flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[19.2px] whitespace-pre">
          <span className="font-bold">
            12%
          </span>
          <span className="font-sans">{` APY`}</span>
        </p>
      </div>
    </div>
  );
}

function HeadlineAndSubCopy() {
  return (
    <div
      className="content-stretch flex flex-col font-light gap-8 items-center justify-start leading-[0] not-italic relative shrink-0 text-[#82afd1] text-center w-full"
      data-name="headline and sub copy"
    >
      <div className="text-black bg-clip-text bg-white capitalize flex flex-col justify-center relative shrink-0 text-[48px] md:text-[64px] tracking-[-1.92px] w-full max-w-[677px] min-h-[100px] md:min-h-[140px]">
        <p className="leading-[1.1] mx-[0px] my-[1px] m-[0px] break-words hyphens-auto text-black drop-shadow-none bg-none">
          Institutional yield from live events
        </p>
      </div>
      <div className="text-black bg-clip-text bg-white flex flex-col justify-center relative shrink-0 text-[20px] md:text-[24px] text-center">
        <p className="leading-[1.2] whitespace-pre">
          Back live music with your liquidity
          <br aria-hidden="true" />
          and unlock real, stable yield.
        </p>
      </div>
    </div>
  );
}

function Cta({
  onNavigateToDashboard,
}: {
  onNavigateToDashboard: () => void;
}) {
  return (
    <div
      className="bg-white box-border content-stretch flex from-[#f0f1f100] gap-3 items-center justify-center p-[24px] relative rounded-[16px] shadow-[0px_1px_22.1px_0px_rgba(211,242,39,0.48),0px_1px_3px_0px_rgba(0,0,0,0.08)] shrink-0 to-[#ffffff] w-[200px] cursor-pointer hover:shadow-[0px_2px_30px_0px_rgba(211,242,39,0.6),0px_2px_5px_0px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105"
      data-name="CTA"
      onClick={onNavigateToDashboard}
    >
      <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[18px] text-nowrap">
        <p className="leading-[19.2px] whitespace-pre">
          Start Earning
        </p>
      </div>
    </div>
  );
}

export function HeadlineSection({
  onNavigateToDashboard,
}: {
  onNavigateToDashboard: () => void;
}) {
  return (
    <div
      className="absolute content-stretch flex flex-col gap-12 md:gap-16 items-center justify-start top-[160px] md:top-[183px] translate-x-[-50%] w-[677px] max-w-[90vw] z-20 px-4 overflow-visible bg-white"
      data-name="headline + CTA"
      style={{ left: "calc(50% - 0.5px)" }}
    >
      <ApyCallOut />
      <HeadlineAndSubCopy />
      <Cta onNavigateToDashboard={onNavigateToDashboard} />
    </div>
  );
}