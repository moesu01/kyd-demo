import { img, imgUsdc, imgUsdCoinUsdcLogo1, imgLine129, imgVector, imgKydToken, imgLine244 } from "./svg-p8nzy";

function Group() {
  return <img className="block max-w-none size-full" src={img} />;
}

function Layer1() {
  return (
    <div className="absolute contents inset-0" data-name="Layer 1">
      <Group />
    </div>
  );
}

function Tether() {
  return (
    <div className="overflow-clip relative shrink-0 size-9" data-name="tether">
      <Layer1 />
    </div>
  );
}

function Usdc() {
  return (
    <div className="relative shrink-0 size-9" data-name="usdc">
      <img className="block max-w-none size-full" src={imgUsdc} />
    </div>
  );
}

function SelectedCoin() {
  return (
    <div className="content-stretch flex gap-2.5 items-center justify-start relative shrink-0" data-name="selected coin">
      <Tether />
      <Usdc />
    </div>
  );
}

function DepositHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="deposit header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pb-0 pt-6 px-6 relative w-full">
          <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[32px] text-nowrap tracking-[-0.96px]">
            <p className="leading-[1.2] whitespace-pre">Deposit</p>
          </div>
          <SelectedCoin />
        </div>
      </div>
    </div>
  );
}

function UsdCoinUsdcLogo1() {
  return (
    <div className="relative shrink-0 size-6" data-name="usd-coin-usdc-logo 1">
      <img className="block max-w-none size-full" src={imgUsdCoinUsdcLogo1} />
    </div>
  );
}

function Frame221() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0">
      <UsdCoinUsdcLogo1 />
      <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a202c] text-[20px] text-nowrap tracking-[0.2px]">
        <p className="leading-[19.2px] whitespace-pre">USDC</p>
      </div>
    </div>
  );
}

function CoinSelect() {
  return (
    <div className="bg-white box-border content-stretch flex gap-3 items-center justify-center px-3 py-2.5 relative rounded-[10px] shrink-0" data-name="coin select">
      <div aria-hidden="true" className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.05)]" />
      <Frame221 />
      <div className="flex flex-row items-center self-stretch">
        <div className="flex h-full items-center justify-center relative shrink-0" style={{ "--transform-inner-width": "24", "--transform-inner-height": "24", width: "calc(1px * ((var(--transform-inner-height) * 1) + (var(--transform-inner-width) * 0)))" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-[90deg]">
            <div className="h-full relative w-6">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <img className="block max-w-none size-full" src={imgLine129} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[6.175px] relative shrink-0 w-2.5" data-name="Vector">
        <img className="block max-w-none size-full" src={imgVector} />
      </div>
    </div>
  );
}

function CoinSelectMax() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-end justify-start relative shrink-0" data-name="coin select & max">
      <CoinSelect />
      <div className="flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[16px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">4M USDC MAX</p>
      </div>
    </div>
  );
}

function DepositInputAndCoinSelect() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="deposit input and coin select">
      <div aria-hidden="true" className="absolute border border-[#d5d8dc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[24px] relative w-full">
          <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(51,51,51,0.56)] w-[162px]">
            <p className="leading-[1.2]">0</p>
          </div>
          <CoinSelectMax />
        </div>
      </div>
    </div>
  );
}

function Commit2Years() {
  return (
    <div className="bg-[rgba(211,242,39,0.5)] box-border content-stretch flex flex-col gap-2 h-[105px] items-start justify-start leading-[0] not-italic p-[24px] relative rounded-[16px] shrink-0 text-black text-nowrap w-[194.667px]" data-name="commit 2 years">
      <div className="flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] justify-center relative shrink-0 text-[16px] tracking-[-0.48px]">
        <p className="leading-[1.2] text-nowrap whitespace-pre">Commit 2 Years</p>
      </div>
      <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Medium',_sans-serif] justify-center relative shrink-0 text-[25px]">
        <p className="leading-[1.2] text-nowrap whitespace-pre">1x $KYD</p>
      </div>
    </div>
  );
}

function Commit3Years() {
  return (
    <div className="bg-[rgba(211,242,39,0.5)] box-border content-stretch flex flex-col gap-2 h-[105px] items-start justify-start leading-[0] not-italic p-[24px] relative rounded-[16px] shrink-0 text-black text-nowrap w-[194.667px]" data-name="commit 3 years">
      <div className="flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] justify-center relative shrink-0 text-[16px] tracking-[-0.48px]">
        <p className="leading-[1.2] text-nowrap whitespace-pre">Commit 3 Years</p>
      </div>
      <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Medium',_sans-serif] justify-center relative shrink-0 text-[25px]">
        <p className="leading-[1.2] text-nowrap whitespace-pre">1.5x $KYD</p>
      </div>
    </div>
  );
}

function Commit4Years() {
  return (
    <div className="bg-[rgba(211,242,39,0.5)] box-border content-stretch flex flex-col gap-2 h-[105px] items-start justify-start leading-[0] not-italic p-[24px] relative rounded-[16px] shrink-0 text-black text-nowrap w-[194.667px]" data-name="commit 4 years">
      <div className="flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] justify-center relative shrink-0 text-[16px] tracking-[-0.48px]">
        <p className="leading-[1.2] text-nowrap whitespace-pre">Commit 4 Years</p>
      </div>
      <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Medium',_sans-serif] justify-center relative shrink-0 text-[25px]">
        <p className="leading-[1.2] text-nowrap whitespace-pre">3x $KYD</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="content-stretch flex gap-6 items-center justify-start relative shrink-0" data-name="options">
      <Commit2Years />
      <Commit3Years />
      <Commit4Years />
    </div>
  );
}

function KydToken() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="kyd token">
      <img className="block max-w-none size-full" src={imgKydToken} />
    </div>
  );
}

function KydTokenAmount() {
  return (
    <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0" data-name="kyd token amount">
      <KydToken />
      <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[25px] text-[rgba(51,51,51,0.6)] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">–––</p>
      </div>
    </div>
  );
}

function ExpectedKydYield() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-3 grow items-start justify-start min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="expected KYD yield">
      <div className="flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[16px] text-nowrap tracking-[-0.8px]">
        <p className="leading-[1.2] whitespace-pre">Expected $KYD • – Years</p>
      </div>
      <KydTokenAmount />
    </div>
  );
}

function UsdcLogo() {
  return (
    <div className="relative shrink-0 size-6" data-name="usdc logo">
      <img className="block max-w-none size-full" src={imgUsdCoinUsdcLogo1} />
    </div>
  );
}

function UsdcAmount() {
  return (
    <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0" data-name="USDC amount">
      <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[25px] text-[rgba(51,51,51,0.6)] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">–––</p>
      </div>
      <UsdcLogo />
    </div>
  );
}

function EstimatedUsdcYield() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-3 grow items-end justify-start min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="estimated USDC yield">
      <div className="flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[16px] text-nowrap tracking-[-0.8px]">
        <p className="leading-[1.2] whitespace-pre">Estimated annual yield</p>
      </div>
      <UsdcAmount />
    </div>
  );
}

function ExpectedYield() {
  return (
    <div className="bg-white from-[#e7e9ef03] relative rounded-[16px] shrink-0 to-[#ffffff] w-full" data-name="Expected yield">
      <div aria-hidden="true" className="absolute border border-[#dddddd] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_12px_-5px_rgba(0,0,0,0.035)]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-3 items-center justify-start p-[24px] relative w-full">
          <ExpectedKydYield />
          <EstimatedUsdcYield />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_2px_0px_inset_rgba(255,255,255,0.75)]" />
    </div>
  );
}

function ReviewCta() {
  return (
    <div className="basis-0 bg-[rgba(79,129,201,0.24)] grow min-h-px min-w-px opacity-20 relative rounded-[10px] shrink-0" data-name="review cta">
      <div className="box-border content-stretch flex gap-1.5 items-center justify-center overflow-clip px-0 py-6 relative w-full">
        <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white">
          <p className="leading-[20px] whitespace-pre">Review</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_12px_-5px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function ReviewCtaContainer() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-start justify-start px-0 py-6 relative shrink-0 w-full" data-name="review CTA container">
      <ReviewCta />
    </div>
  );
}

function CommitmentOptions() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full" data-name="commitment options">
      <Options />
      <ExpectedYield />
      <ReviewCtaContainer />
    </div>
  );
}

function DepositInputOptions() {
  return (
    <div className="relative shrink-0 w-full" data-name="deposit input options">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start px-6 py-0 relative w-full">
          <DepositInputAndCoinSelect />
          <CommitmentOptions />
        </div>
      </div>
    </div>
  );
}

export default function DepositSection() {
  return (
    <div className="bg-neutral-50 relative rounded-[32px] size-full" data-name="deposit section">
      <div className="content-stretch flex flex-col gap-6 items-end justify-start overflow-clip relative size-full">
        <DepositHeader />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <img className="block max-w-none size-full" src={imgLine244} />
          </div>
        </div>
        <DepositInputOptions />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dadada] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}