import imgImage7 from "figma:asset/a67ada0c6bbf505c907a33a524d2f57aa5258884.png";
import imgImage4 from "figma:asset/e27d61d504ff6d6692a73f2999e5443bae64ce57.png";
import imgImage3 from "figma:asset/62ebbf5e1a495f3f031540f684b0705e188686e0.png";
import imgImage1 from "figma:asset/ce9a224661ff9eeb6084a2e713602dee8ca814de.png";
import imgImage5 from "figma:asset/f589045e76f04fa70a64cc96b2b40c77ff7b0c0b.png";
import imgImage6 from "figma:asset/2737b4d0fca47861c901ec5edb40560b9426a319.png";
import imgImage2 from "figma:asset/20cd1c186c3895def4c3eff46055f17512ca3cbb.png";
import { imgLogo, imgDashboardIcon, imgWalletIcon, imgStar1 } from "./svg-t6i4s";

function RotatingGridCarousel() {
  return (
    <div className="absolute bg-black h-[1002px] left-0 overflow-clip top-0 w-[1440px]" data-name="rotating grid carousel">
      <div className="absolute bg-center bg-cover bg-no-repeat left-[1124px] rounded-[10px] size-[191px] top-[539px]" data-name="image 7" style={{ backgroundImage: `url('${imgImage7}')` }} />
      <div className="absolute bg-center bg-cover bg-no-repeat left-[1250px] size-[284px] top-[118px]" data-name="image 4" style={{ backgroundImage: `url('${imgImage4}')` }} />
      <div className="absolute bg-center bg-cover bg-no-repeat left-[321px] size-[202px] top-[497px]" data-name="image 3" style={{ backgroundImage: `url('${imgImage3}')` }} />
      <div className="absolute bg-center bg-cover bg-no-repeat h-[245px] left-[-37px] top-[414px] w-[243px]" data-name="image 1" style={{ backgroundImage: `url('${imgImage1}')` }} />
      <div className="absolute bg-center bg-cover bg-no-repeat left-[88px] size-[222px] top-32" data-name="image 5" style={{ backgroundImage: `url('${imgImage5}')` }} />
      <div className="absolute bg-center bg-cover bg-no-repeat left-[743px] size-[264px] top-[440px]" data-name="image 6" style={{ backgroundImage: `url('${imgImage6}')` }} />
      <div className="absolute bg-center bg-cover bg-no-repeat left-[523px] size-[212px] top-[37px]" data-name="image 2" style={{ backgroundImage: `url('${imgImage2}')` }} />
      <div className="absolute bg-center bg-cover bg-no-repeat blur-[8.75px] filter left-[107px] size-[99px] top-[789px]" data-name="image 8" style={{ backgroundImage: `url('${imgImage3}')` }} />
      <div className="absolute bg-center bg-cover bg-no-repeat left-[361px] size-[81px] top-[783px]" data-name="image 11" style={{ backgroundImage: `url('${imgImage3}')` }} />
      <div className="absolute bg-center bg-cover bg-no-repeat h-[89px] left-[899px] top-[786px] w-[88px]" data-name="image 9" style={{ backgroundImage: `url('${imgImage1}')` }} />
      <div className="absolute bg-center bg-cover bg-no-repeat h-[61px] left-[1162px] top-[786px] w-[60px]" data-name="image 12" style={{ backgroundImage: `url('${imgImage1}')` }} />
      <div className="absolute bg-center bg-cover bg-no-repeat left-[594px] size-[154px] top-[780px]" data-name="image 10" style={{ backgroundImage: `url('${imgImage2}')` }} />
      <div className="absolute backdrop-blur-[20px] backdrop-filter h-[1002px] left-1/2 top-0 translate-x-[-50%] w-[1440px]" data-name="blur overlay" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1440 1002\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(5.6479e-15 64.182 -92.237 -2.5768e-14 720 490.39)\\\'><stop stop-color=\\\'rgba(0,0,0,0.01)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(0,0,0,0.03)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
    </div>
  );
}

function Logo() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="logo">
      <div className="absolute inset-[-3.33%_-5%_-6.67%_-5%]">
        <img className="block max-w-none size-full" src={imgLogo} />
      </div>
    </div>
  );
}

function DashboardIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="dashboard icon">
      <div className="absolute bottom-[-2.44%] left-0 right-0 top-0">
        <img className="block max-w-none size-full" src={imgDashboardIcon} />
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="dashboard">
      <DashboardIcon />
      <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-neutral-100 text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.2] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function WalletIcon() {
  return (
    <div className="h-[18px] relative shrink-0 w-[19px]" data-name="Wallet icon">
      <img className="block max-w-none size-full" src={imgWalletIcon} />
    </div>
  );
}

function SignIn() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-start px-0 py-2.5 relative rounded-[2px] shrink-0" data-name="sign in">
      <WalletIcon />
      <div className="[text-shadow:#000000_0px_-1px_2px] flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.48px]">
        <p className="leading-[1.2] whitespace-pre">Connect Wallet</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-12 items-center justify-start relative shrink-0" data-name="buttons">
      <Dashboard />
      <SignIn />
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-between left-1/2 px-6 py-4 rounded-[14px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.07)] top-3 translate-x-[-50%] w-[1336px]" data-name="Nav bar">
      <Logo />
      <Buttons />
    </div>
  );
}

function ApyCallOut() {
  return (
    <div className="backdrop-blur-[10.45px] backdrop-filter bg-[rgba(0,0,0,0.21)] box-border content-stretch flex gap-3 items-center justify-start px-3 py-2 relative rounded-[8px] shrink-0" data-name="APY call out">
      <div aria-hidden="true" className="absolute border border-[#f0f1f1] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)]" />
      <div className="relative shrink-0 size-[18px]">
        <div className="absolute inset-[6.21%_8.21%_14.03%_8.21%]">
          <img className="block max-w-none size-full" src={imgStar1} />
        </div>
      </div>
      <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[19.2px] whitespace-pre">
          <span className="font-['ABC_Diatype_Mono_Unlicensed_Trial:Bold',_sans-serif]">17%</span>
          <span className="font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif]">{` APY`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[19.2px] whitespace-pre">Average</p>
      </div>
    </div>
  );
}

function HeadlineAndSubCopy() {
  return (
    <div className="content-stretch flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Light',_sans-serif] gap-8 items-center justify-start leading-[0] not-italic relative shrink-0 text-[#82afd1] text-center" data-name="headline and sub copy">
      <div className="[text-shadow:rgba(0,0,0,0.3)_0px_4px_10px] bg-clip-text bg-white capitalize flex flex-col justify-center relative shrink-0 text-[64px] tracking-[-1.92px] w-[677px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(rgba(240, 241, 241, 0) 25.487%, rgb(255, 255, 255) 105.53%), linear-gradient(90deg, rgb(240, 241, 241) 0%, rgb(240, 241, 241) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <p className="leading-none">Earn Yield from Music’s Biggest Moments</p>
      </div>
      <div className="[text-shadow:rgba(0,0,0,0.92)_0px_4px_21px] bg-clip-text bg-white flex flex-col justify-center relative shrink-0 text-[24px] text-nowrap" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(rgba(240, 241, 241, 0) 25.487%, rgb(255, 255, 255) 105.53%), linear-gradient(90deg, rgb(240, 241, 241) 0%, rgb(240, 241, 241) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        <p className="leading-[1.2] whitespace-pre">
          Back live music with your liquidity
          <br aria-hidden="true" />
          and unlock real, stable yield.
        </p>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-white box-border content-stretch flex from-[#f0f1f100] gap-3 items-center justify-center p-[24px] relative rounded-[16px] shadow-[0px_1px_22.1px_0px_rgba(211,242,39,0.48),0px_1px_3px_0px_rgba(0,0,0,0.08)] shrink-0 to-[#ffffff] w-[200px]" data-name="CTA">
      <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[18px] text-nowrap">
        <p className="leading-[19.2px] whitespace-pre">Start Earning</p>
      </div>
    </div>
  );
}

function HeadlineCta() {
  return (
    <div className="absolute content-stretch flex flex-col gap-16 items-center justify-start top-[183px] translate-x-[-50%] w-[677px]" data-name="headline + CTA" style={{ left: "calc(50% - 0.5px)" }}>
      <ApyCallOut />
      <HeadlineAndSubCopy />
      <Cta />
    </div>
  );
}

export default function TopPiece() {
  return (
    <div className="relative size-full" data-name="Top piece">
      <RotatingGridCarousel />
      <NavBar />
      <HeadlineCta />
    </div>
  );
}