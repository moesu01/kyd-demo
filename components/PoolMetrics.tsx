import { imgLine246 } from "../imports/svg-w4ktt";

function MetricCard({
  label,
  value,
  unit,
  flexBasis = "flex-1",
}: {
  label: string;
  value: string;
  unit?: string;
  flexBasis?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 md:gap-3 items-center justify-start px-2 md:px-4 py-4 md:py-6 ${flexBasis}`}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] inset-0 pointer-events-none" />
      
      {/* Label */}
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col font-geist-mono justify-center font-regular text-[#555555] text-sm md:text-base text-nowrap tracking-[0%]">
          <p className="leading-[1.2] whitespace-pre">{label}</p>
        </div>
      </div>
      
      {/* Value */}
      <div className="flex font-geist-mono font-light gap-1 items-end justify-center">
        <div className="flex flex-col justify-flex-end text-[#222222] text-lg md:text-xl lg:text-[24px] text-nowrap tracking-[1%]">
          <p className="leading-[1.2] whitespace-pre">{value}</p>
        </div>
        {unit && (
          <div className="flex flex-col h-4 md:h-5 justify-flex-end text-sm md:text-base text-[#222222] tracking-[0.16px] w-8 md:w-11">
            <p className="leading-[1.15]">{unit}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function MetricDivider() {
  return (
    <div className="flex h-16 md:h-[103px] items-center justify-center w-0">
      <div className="flex-none rotate-[90deg]">
        <div className="h-0 w-16 md:w-[103px]">
          <div className="absolute inset-0 top-[-1px]">
            <img className="size-full" src={imgLine246} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PoolMetrics() {
  return (
    <div className="bg-transparent flex items-center justify-start rounded-[32px] w-full max-w-[680px] border border-[#dadada]">
      <div aria-hidden="true" className="absolute border border-[#dadada] inset-0 pointer-events-none rounded-[32px]" />
      
      <MetricCard label="AUM" value="19.52M" unit="USDC" flexBasis="flex-[2] md:flex-1" />
      <MetricDivider />
      <MetricCard label="Funded" value="13.51M" unit="USDC" flexBasis="flex-[2] md:flex-1" />
      <MetricDivider />
      <MetricCard label="APR" value="12%" flexBasis="flex-[1] md:flex-1" />
    </div>
  );
}