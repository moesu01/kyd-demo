import { imgStar1, imgStar2, StarIcon } from "../imports/svg-t6i4s";

const kydLogo = "/imports/kyd_logo_1.svg";

const Logo = () => {
  return (
    <div className="h-[50px] w-[88px] relative">
      <img 
        alt="KYD Logo" 
        className="block max-w-none size-full" 
        src={kydLogo} 
      />
    </div>
  );
}

function ApyCallOut() {
  return (
    <div className="box-border flex gap-2 items-center justify-start px-4 py-2 relative rounded-[8px] shrink-0">
      {/* Border and shadow overlay */}
      <div
        aria-hidden="true"
        className="absolute  bg-white/50  border border-[#aaaaaa] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)] backdrop-blur-0"
      />
      {/* Star Icon */}
      <div className="relative shrink-0 w-[18px] h-[18px]">
        <div className="absolute">
          <StarIcon 
            fill="rgba(255,255,255,.1)"
            stroke="rgba(0,0,0,.6)"
            strokeWidth={1.5}
          />
        </div>
      </div>
      {/* APR Text */}
      <div className="flex flex-col font-['Geist_Mono:Regular',_'Helvetica',_sans-serif] font-normal items-centerjustify-center leading-[0] relative shrink-0 text-[#111111] text-[16px] whitespace-nowrap">
        <p className="whitespace-pre">12% APR</p>
      </div>
    </div>
  );
}

function HeadlineAndSubCopy() {
  return (
    <div className="flex flex-col gap-3 lg:gap-4 items-center justify-start relative shrink-0 text-center w-full">
      <div className="capitalize flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Medium',_'Helvetica',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[32px] lg:text-[48px] text-center tracking-[-1px] lg:tracking-[-1.62px]">
        <p className="leading-none text-shadow-[0px_0px_30px_rgba(255,255,255,0.7)]">
          Institutional yield <br /> from live events
        </p>
      </div>
      <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Regular',_'Helvetica',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[20px] text-[#888888] text-center">
        <p className="leading-[1.2] font-normal text-shadow-[0px_0px_30px_rgba(255,255,255,0.7)]">
          Back live events with your liquidity
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
    <button
      className="bg-[#111111] box-border flex gap-3 items-center justify-center px-6 py-4 relative rounded-[8px] shadow-[0px_1px_22.1px_0px_rgba(211,242,39,0.48),0px_1px_3px_0px_rgba(0,0,0,0.08),0px_4px_40px_0px_rgba(0,89,7,0.48)] shrink-0 cursor-pointer hover:shadow-[0px_2px_30px_0px_rgba(211,242,39,0.6),0px_2px_5px_0px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105"
      onClick={onNavigateToDashboard}
    >
      <div className="[text-shadow:rgba(0,89,7,0.48)_0px_4px_40px,rgba(0,0,0,0.08)_0px_1px_3px,rgba(211,242,39,0.48)_0px_1px_22.1px] flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Medium',_'Helvetica',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[19px] text-center text-nowrap text-white">
        <p className="leading-[1.2] whitespace-pre">Start Earning</p>
      </div>
    </button>
  );
}

export function HeadlineSection({
  onNavigateToDashboard,
}: {
  onNavigateToDashboard: () => void;
}) {
  return (
    <div className="relative h-screen w-full">
      {/* Fixed overlay div with transparent background and white border */}
      <div 
        className="fixed inset-0 bg-transparent border-[0px] border-white z-50 pointer-events-none"
        data-name="overlay-layer"
      />
      
      {/* Tree background */}
      {/* <div 
        className="absolute inset-0 z-10 "
        style={{
          backgroundImage: 'url(/imports/tree.svg)',
          backgroundSize: '43%',
          backgroundRepeat: 'no-repeat',
          // Centered on X, Y is 120% plus 40px offset (example: adjust as needed)
          backgroundPosition: 'center center',
        }}
      /> */}
      
      {/* Main content container */}
      {/* Vertical flexbox container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        {/* Empty white div above - auto height */}
        <div className="w-[120px] lg:w-[160px]  flex-1 bg-white"></div>
        
        {/* Main content container */}
        <div
          className="
            flex flex-col gap-8 lg:gap-12
            items-center justify-center
            px-8 lg:px-[68px] py-12 lg:py-[42px]
            rounded-[44px] lg:rounded-[88px]
            overflow-visible
            bg-[rgba(255,255,255,1)]
            flex-shrink-0
            mx-4 lg:mx-0
            max-w-4xl
          "
        >
          <div className="w-[80px] h-[40px] lg:w-[160px] lg:h-[80px] flex items-center justify-center">
            <Logo />
          </div>
          <div className="flex flex-col gap-8 items-center justify-start relative shrink-0">
            {/* <ApyCallOut /> */}
            <HeadlineAndSubCopy />
          </div>
          <Cta onNavigateToDashboard={onNavigateToDashboard} />
        </div>
        
        {/* Empty white div below with scroll text - auto height */}
        <div className="w-[120px] lg:w-[160px] flex-1 bg-white flex items-center justify-center">
          <p className="text-gray-600 text-center text-md leading-[1.2]">↓ <br/>lending pool <br/>options</p>
        </div>
      </div>
    </div>
  );
}