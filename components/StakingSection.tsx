import { useState } from "react";
import { imgKydToken } from "../imports/svg-p8nzy";
import { KYDRewardsChart } from "./KYDRewardsChart";
import { TransactionHistory } from "./TransactionHistory";

interface StakingInfoProps {
  label: string;
  value: string;
  hasInfo?: boolean;
}

function StakingInfoRow({ label, value, hasInfo = false }: StakingInfoProps) {
  return (
    <div className="flex items-start justify-between px-0 py-3 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d5d8dc] border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-geist-mono font-light justify-center leading-[0] relative shrink-0 text-[#333333] text-sm md:text-base text-nowrap tracking-[-3%]">
        <p className="leading-[1.2] whitespace-pre">
          {label} {hasInfo && "ⓘ"}
        </p>
      </div>
      <div className="flex flex-col font-geist-mono justify-center leading-[0] font-regular relative shrink-0 text-[#333333] text-lg md:text-xl text-nowrap tracking-[0]">
        <p className="leading-[1.2] whitespace-pre">{value}</p>
      </div>
    </div>
  );
}

interface StakingBalanceCardProps {
  balance: string;
}

function StakingBalanceCard({ balance }: StakingBalanceCardProps) {
  return (
    <div className="bg-white box-border border border-[#e8e8e8] inset-0 flex flex-col gap-3 items-start justify-start p-4 relative rounded-[16px] shrink-0 shadow-[0px_2px_8px_rgba(0,0,0,0.05)]">
      <div className="flex gap-2.5 items-center justify-end relative shrink-0 w-full">
        <div className="flex flex-col font-geist-mono justify-center leading-[0] relative shrink-0 text-[#333333] text-sm md:text-base text-nowrap tracking-[-0.8px]">
          <p className="leading-[1.2] whitespace-pre">Staking Balance</p>
        </div>
      </div>
      <div className="flex font-geist-mono gap-1 h-6 items-end justify-center leading-[0] relative shrink-0 text-right">
        <div className="flex flex-col justify-center relative shrink-0 text-[#222222] text-lg md:text-xl lg:text-[24px] text-nowrap tracking-[0.24px]">
          <p className="leading-[1.2] whitespace-pre">{balance}</p>
        </div>
        <div className="flex flex-col h-4 md:h-5 justify-center relative shrink-0 text-sm md:text-base text-[rgba(34,34,34,0.8)] tracking-[0.16px] w-8 md:w-11">
          <p className="leading-[1.15]">$KYD</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_2px_0px_inset_rgba(255,255,255,0.75)]" />
    </div>
  );
}

interface StakingHeaderProps {
  balance: string;
}

function StakingHeader({ balance }: StakingHeaderProps) {
  return (
    <header className="relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border flex items-end justify-between pb-0 pt-6 px-6 relative w-full">
          <div className="flex flex-col gap-2.5 items-start justify-center relative shrink-0">
            <div className="relative shrink-0 size-9">
              <img className="size-full" src={imgKydToken} alt="KYD Token" />
            </div>
            <div className="flex flex-col font-inter justify-center leading-[0] font-semibold relative shrink-0 text-[#444444] text-xl md:text-2xl text-nowrap tracking-[0]">
              <p className="leading-[1.2] whitespace-pre">
                <span className="block md:inline">$KYD </span>
                <span className="block md:inline">Rewards</span>
              </p>
            </div>
          </div>
          <StakingBalanceCard balance={balance} />
        </div>
      </div>
    </header>
  );
}

interface StakeButtonProps {
  onClick: () => void;
}

function StakeButton({ onClick }: StakeButtonProps) {
  return (
    <div className="flex gap-2.5 items-start justify-start pb-6 pt-0 px-6 relative shrink-0 w-full">
      <div className="basis-0 bg-[#111] grow min-h-px min-w-px relative rounded-[16px] shrink-0 cursor-pointer hover:shadow-lg transition-all border border-[rgba(0,0,0,0.3)] shadow-[0px_4px_12px_-5px_rgba(0,0,0,0.15)]" onClick={onClick}>
        <div className="box-border flex gap-1.5 items-center justify-center overflow-clip px-0 py-4 relative w-full">
          <div className="flex flex-col font-inter justify-center leading-[0] font-medium text-[20px] text-white relative shrink-0 text-nowrap">
            <p className="leading-[1.2] whitespace-pre">Stake your $KYD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StakingSection() {
  const [stakingBalance] = useState("1,214,397.42");
  const [lifetimeEarned] = useState("528,746");
  const [availableToWithdraw] = useState("237,184");

  const handleStakeClick = () => {
    console.log("Stake KYD clicked");
    // Handle staking logic here
  };

  return (
    <div
      className="bg-transparent relative rounded-[32px] w-full max-w-[680px] border border-[#dadada]"
      data-name="staking section"
    >
      <div className="flex flex-col gap-6 w-full">
        <StakingHeader balance={stakingBalance} />

        {/* Staking Info */}
        <div className="px-6 pb-0">
          <div className="flex flex-col w-full">
            <StakingInfoRow 
              label="Lifetime $KYD Earned" 
              value={lifetimeEarned} 
              hasInfo={true}
            />
            <StakingInfoRow 
              label="$KYD available to withdraw" 
              value={availableToWithdraw} 
              hasInfo={true}
            />
          </div>
        </div>

        <StakeButton onClick={handleStakeClick} />
      </div>
    </div>
  );
}

function ClaimButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex gap-2.5 items-start justify-start pb-6 pt-4 px-0 relative shrink-0 w-full">
      <div className="basis-0 bg-[#fff] grow min-h-px min-w-px relative rounded-[16px] shrink-0 cursor-pointer hover:shadow-lg transition-all border-[1px] border-[#e8e8e8] shadow-[0_2px_8px_rgba(0,0,0,0.05)]" onClick={onClick}>
        <div className="box-border flex gap-1.5 items-center justify-center overflow-clip px-0 py-4 relative w-full">
          <div className="flex flex-col font-inter justify-center leading-[0] font-medium text-[18px] text-[#444444] relative shrink-0 text-nowrap">
            <p className="leading-[1.2] whitespace-pre">Claim your $KYD</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.04)] inset-0 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  );
}

export function KYDRewardsContainer() {
  const handleClaimClick = () => {
    console.log("Claiming KYD rewards...");
    // In a real app, this would trigger the claim transaction
  };

  return (
    <div
      className="bg-transparent relative rounded-[32px] w-full max-w-[680px] border border-[#dadada]"
      data-name="kyd rewards container"
    >
      <div className="flex flex-col gap-0 w-full">
        {/* KYD Rewards Chart */}
        <div className="px-6 pt-6 pb-0">
          <KYDRewardsChart />
        </div>
        
        {/* Claim Button */}
        <div className="px-6">
          <ClaimButton onClick={handleClaimClick} />
        </div>
        
        {/* Transaction History */}
        <div className="px-6 pb-6">
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
}
