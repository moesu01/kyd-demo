import { imgLine246 } from "../imports/svg-w4ktt";

function MetricCard({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit?: string;
}) {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-3 grow items-center justify-start min-h-px min-w-px px-0 py-6 relative shrink-0">
      <div aria-hidden="true" className="absolute border-0 border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
      
      {/* Label */}
      <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0 w-full">
        <div className="flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[16px] text-nowrap tracking-[-0.8px]">
          <p className="leading-[1.2] whitespace-pre">{label}</p>
        </div>
      </div>
      
      {/* Value */}
      <div className="content-stretch flex font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] gap-1 items-end justify-center leading-[0] not-italic relative shrink-0 text-right">
        <div className="flex flex-col justify-center relative shrink-0 text-[#222222] text-[24px] text-nowrap tracking-[0.24px]">
          <p className="leading-[24px] whitespace-pre">{value}</p>
        </div>
        {unit && (
          <div className="flex flex-col h-5 justify-center relative shrink-0 text-[16px] text-[rgba(34,34,34,0.8)] tracking-[0.16px] w-11">
            <p className="leading-none">{unit}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function MetricDivider() {
  return (
    <div className="flex h-[103px] items-center justify-center relative shrink-0 w-[0px]">
      <div className="flex-none rotate-[90deg]">
        <div className="h-0 relative w-[103px]">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <img className="block max-w-none size-full" src={imgLine246} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PoolMetrics() {
  return (
    <div className="bg-neutral-50 content-stretch flex items-end justify-start relative rounded-[32px] w-full max-w-[680px]">
      <div aria-hidden="true" className="absolute border border-[#dadada] border-solid inset-0 pointer-events-none rounded-[32px]" />
      
      <MetricCard label="AUM" value="19.52M" unit="USDC" />
      <MetricDivider />
      <MetricCard label="Funded" value="13.51M" unit="USDC" />
      <MetricDivider />
      <MetricCard label="APR" value="12%" />
    </div>
  );
}