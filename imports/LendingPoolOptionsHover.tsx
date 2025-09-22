import imgRectangle52 from "figma:asset/2d479e1fc96321033fb95347f2b3b604b4d0179a.png";
import imgRectangle53 from "figma:asset/9c5909aa7d380d35410094c93e5deff28f368440.png";
import imgRectangle54 from "figma:asset/5936c381171449d6833b99668fb51e36d3029e96.png";

function HeadlineSubhead() {
  return (
    <div className="content-stretch flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Light',_sans-serif] gap-3 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#82afd1] text-nowrap" data-name="headline + subhead">
      <div className="[text-shadow:rgba(0,0,0,0.3)_0px_4px_10px] bg-clip-text bg-white capitalize flex flex-col justify-center relative shrink-0 text-[48px] tracking-[-1.44px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(rgba(240, 241, 241, 0) 25.487%, rgb(255, 255, 255) 105.53%), linear-gradient(90deg, rgb(240, 241, 241) 0%, rgb(240, 241, 241) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <p className="leading-none text-nowrap whitespace-pre">Opportunities Across Every Stage</p>
      </div>
      <div className="[text-shadow:rgba(0,0,0,0.92)_0px_4px_21px] bg-clip-text bg-white flex flex-col justify-center relative shrink-0 text-[20px] text-center" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(rgba(240, 241, 241, 0) 25.487%, rgb(255, 255, 255) 105.53%), linear-gradient(90deg, rgb(240, 241, 241) 0%, rgb(240, 241, 241) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <p className="leading-[1.2] text-nowrap whitespace-pre">Choose from venue and genre based pools, built to deliver stable returns.</p>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-white box-border content-stretch flex from-[#f0f1f100] gap-3 items-center justify-start p-[24px] relative rounded-[16px] shadow-[0px_1px_22.1px_0px_rgba(211,242,39,0.48),0px_1px_3px_0px_rgba(0,0,0,0.08)] shrink-0 to-[#ffffff]" data-name="CTA">
      <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[18px] text-nowrap">
        <p className="leading-[19.2px] whitespace-pre">Start Earning $KYD</p>
      </div>
    </div>
  );
}

function HeaderCtaGroup() {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-0 py-6 relative shrink-0 w-full" data-name="header + cta group">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-solid border-white inset-0 pointer-events-none" />
      <HeadlineSubhead />
      <Cta />
    </div>
  );
}

function Frame72() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-3 items-start justify-start ml-0 mt-0 px-0 py-3 relative w-[360px]">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none" />
      <div className="[text-shadow:rgba(0,0,0,0.3)_0px_4px_10px] flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.48px]">
        <p className="leading-[1.2] whitespace-pre">Earn on your savings with USDC</p>
      </div>
    </div>
  );
}

function Frame2370() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-3 items-start justify-start ml-0 mt-[43px] px-0 py-3 relative w-[360px]">
      <div aria-hidden="true" className="absolute border-[1px_0px] border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none" />
      <div className="[text-shadow:rgba(0,0,0,0.3)_0px_4px_10px] basis-0 flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white tracking-[-0.48px]">
        <p className="leading-[1.2]">
          Earn $KYD Rewards from ALL venues
          <br aria-hidden="true" />
          in our network, across genres
        </p>
      </div>
    </div>
  );
}

function Points() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full" data-name="points">
      <Frame72 />
      <Frame2370 />
    </div>
  );
}

function HeadlinePoints() {
  return (
    <div className="content-stretch flex flex-col gap-8 items-start justify-start leading-[0] relative shrink-0 w-full" data-name="headline + points">
      <div className="[text-shadow:rgba(0,0,0,0.3)_0px_4px_10px] capitalize flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[36px] text-white tracking-[-1.08px] w-full">
        <p className="leading-[1.2]">
          <span>
            {`Electronic Music `}
            <br aria-hidden="true" />
          </span>
          <span className="text-[rgba(255,255,255,0.7)]">Genre Venue Pool</span>
        </p>
      </div>
      <Points />
    </div>
  );
}

function Group2372() {
  return (
    <div className="[grid-area:1_/_1] backdrop-blur-[19.85px] backdrop-filter bg-[rgba(61,61,61,0.76)] box-border content-stretch flex flex-col h-[745px] items-start justify-between ml-0 mt-0 overflow-clip px-[30px] py-[33px] relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)] w-[420px]">
      <div className="[text-shadow:rgba(0,0,0,0.3)_0px_4px_10px] font-['ABC_Diatype_Mono_Unlicensed_Trial:Bold',_sans-serif] h-[26px] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] text-justify tracking-[-0.36px] uppercase w-full">
        <p className="leading-[1.2]">
          MADISON SQUARE GARDEN _ Coachella _ Rolling Loud _ Redding festival _ Another festival name
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
      </div>
      <div className="bg-center bg-cover bg-no-repeat h-[360px] relative rounded-[2px] shrink-0 w-full" style={{ backgroundImage: `url('${imgRectangle52}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[6px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
      <HeadlinePoints />
    </div>
  );
}

function Frame73() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-3 items-start justify-start ml-0 mt-0 px-0 py-3 relative w-[360px]">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none" />
      <div className="[text-shadow:rgba(0,0,0,0.3)_0px_4px_10px] flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.48px]">
        <p className="leading-[1.2] whitespace-pre">Earn on your savings with USDC</p>
      </div>
    </div>
  );
}

function Frame2371() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-3 items-start justify-start ml-0 mt-[43px] px-0 py-3 relative w-[360px]">
      <div aria-hidden="true" className="absolute border-[1px_0px] border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none" />
      <div className="[text-shadow:rgba(0,0,0,0.3)_0px_4px_10px] basis-0 flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white tracking-[-0.48px]">
        <p className="leading-[1.2]">
          Earn $KYD Rewards from ALL venues
          <br aria-hidden="true" />
          in our network, across genres
        </p>
      </div>
    </div>
  );
}

function Points1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full" data-name="points">
      <Frame73 />
      <Frame2371 />
    </div>
  );
}

function HeadlinePoints1() {
  return (
    <div className="content-stretch flex flex-col gap-8 items-start justify-start leading-[0] relative shrink-0 w-full" data-name="headline + points">
      <div className="[text-shadow:rgba(0,0,0,0.3)_0px_4px_10px] capitalize flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[36px] text-white tracking-[-1.08px] w-full">
        <p className="leading-[1.2]">
          <span>
            {`Rock & Roll`}
            <br aria-hidden="true" />
          </span>
          <span className="text-[rgba(255,255,255,0.7)]">General Venue Pool</span>
        </p>
      </div>
      <Points1 />
    </div>
  );
}

function Group2373() {
  return (
    <div className="[grid-area:1_/_1] backdrop-blur-[19.85px] backdrop-filter bg-[rgba(61,61,61,0.76)] box-border content-stretch flex flex-col h-[745px] items-start justify-between ml-[930px] mt-0 overflow-clip px-[30px] py-[33px] relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)] w-[420px]">
      <div className="[text-shadow:rgba(0,0,0,0.3)_0px_4px_10px] flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[-0.36px] w-full">
        <p className="leading-[1.2]">$KYD - POOL 1</p>
      </div>
      <div className="bg-center bg-cover bg-no-repeat h-[360px] relative rounded-[2px] shrink-0 w-full" style={{ backgroundImage: `url('${imgRectangle53}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[6px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
      <HeadlinePoints1 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-3 items-start justify-start ml-0 mt-0 px-0 py-3 relative w-[360px]">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none" />
      <div className="[text-shadow:rgba(0,0,0,0.3)_0px_4px_10px] flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.48px]">
        <p className="leading-[1.2] whitespace-pre">Earn on your savings with USDC</p>
      </div>
    </div>
  );
}

function Frame2372() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-3 items-start justify-start ml-0 mt-[43px] px-0 py-3 relative w-[360px]">
      <div aria-hidden="true" className="absolute border-[1px_0px] border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none" />
      <div className="[text-shadow:rgba(0,0,0,0.3)_0px_4px_10px] basis-0 flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white tracking-[-0.48px]">
        <p className="leading-[1.2]">
          Earn $KYD Rewards from ALL venues
          <br aria-hidden="true" />
          in our network, across genres
        </p>
      </div>
    </div>
  );
}

function Points2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full" data-name="points">
      <Frame74 />
      <Frame2372 />
    </div>
  );
}

function HeadlinePoints2() {
  return (
    <div className="content-stretch flex flex-col gap-8 items-start justify-start leading-[0] relative shrink-0 w-full" data-name="headline + points">
      <div className="[text-shadow:rgba(0,0,0,0.3)_0px_4px_10px] capitalize flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[36px] text-white tracking-[-1.08px] w-full">
        <p className="leading-[1.2]">
          <span>
            {`KYD General `}
            <br aria-hidden="true" />
          </span>
          <span className="text-[rgba(255,255,255,0.7)]">All Venue Pool</span>
        </p>
      </div>
      <Points2 />
    </div>
  );
}

function Group2374() {
  return (
    <div className="[grid-area:1_/_1] backdrop-blur-[19.85px] backdrop-filter bg-[rgba(61,61,61,0.76)] box-border content-stretch flex flex-col h-[745px] items-start justify-between ml-[465px] mt-0 overflow-clip px-[30px] py-[33px] relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)] w-[420px]">
      <div className="[text-shadow:rgba(0,0,0,0.3)_0px_4px_10px] font-['ABC_Diatype_Mono_Unlicensed_Trial:Bold',_sans-serif] h-[26px] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] text-justify tracking-[-0.36px] uppercase w-full">
        <p className="leading-[1.2]">
          MADISON SQUARE GARDEN _ Coachella _ Rolling Loud _ Redding festival _ Another festival name
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
      </div>
      <div className="bg-[96.23%_0%] bg-no-repeat bg-size-[120.97%_100%] h-[360px] relative rounded-[2px] shrink-0 w-full" style={{ backgroundImage: `url('${imgRectangle54}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[6px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
      <HeadlinePoints2 />
    </div>
  );
}

function Group2380() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group2372 />
      <Group2373 />
      <Group2374 />
    </div>
  );
}

export default function LendingPoolOptionsHover() {
  return (
    <div className="bg-[rgba(0,0,0,0.01)] content-stretch flex flex-col gap-12 items-center justify-start relative size-full" data-name="lending pool options:hover">
      <HeaderCtaGroup />
      <Group2380 />
    </div>
  );
}