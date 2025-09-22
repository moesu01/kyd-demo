import { useState, useRef, useEffect } from "react";
import {
  img,
  imgUsdc,
  imgUsdCoinUsdcLogo1,
  imgLine129,
  imgVector,
  imgKydToken,
  imgLine244,
} from "../imports/svg-p8nzy";

interface CommitmentOption {
  years: number;
  multiplier: number;
  label: string;
}

const COMMITMENT_OPTIONS: CommitmentOption[] = [
  { years: 2, multiplier: 1, label: "1x $KYD" },
  { years: 3, multiplier: 1.5, label: "1.5x $KYD" },
  { years: 4, multiplier: 3, label: "3x $KYD" },
];

// Configuration - easily adjustable for future changes
const CONFIG = {
  APR: 0.1, // 10% annual percentage rate
  MAX_DEPOSIT: 4000000, // 4M USDC max
  KYD_CONVERSION_RATE: 20, // USDC to KYD conversion rate (deposit ÷ 20)
} as const;

// Supported coins configuration
interface CoinOption {
  symbol: string;
  name: string;
  icon: string;
  maxAmount: string;
}

const COIN_OPTIONS: CoinOption[] = [
  {
    symbol: "USDC",
    name: "USD Coin",
    icon: imgUsdCoinUsdcLogo1,
    maxAmount: "4M USDC MAX",
  },
  {
    symbol: "USDT",
    name: "Tether",
    icon: img,
    maxAmount: "4M USDT MAX",
  },
];

interface TetherIconProps {
  isSelected?: boolean;
}

function TetherIcon({ isSelected = false }: TetherIconProps) {
  return (
    <div
      className={`relative shrink-0 size-9 rounded-full transition-all duration-300 ${isSelected ? "size-11 border-3 border-blue-200 shadow-md" : ""}`}
      data-name="tether"
    >
      <div className="absolute contents inset-0">
        <img className="block max-w-none size-full" src={img} />
      </div>
    </div>
  );
}

interface UsdcIconProps {
  isSelected?: boolean;
}

function UsdcIcon({ isSelected = false }: UsdcIconProps) {
  return (
    <div
      className={`relative shrink-0 size-9 rounded-full transition-all duration-300 ${isSelected ? "size-11 border-3 border-blue-200 shadow-md" : ""}`}
      data-name="usdc"
    >
      <img
        className="block max-w-none size-full"
        src={imgUsdc}
      />
    </div>
  );
}

interface SelectedCoinProps {
  selectedCoin: CoinOption;
}

function SelectedCoin({ selectedCoin }: SelectedCoinProps) {
  return (
    <div
      className="content-normal flex gap-2.5 items-center justify-start relative shrink-0 min-h-[44px]"
      data-name="selected coin"
    >
      <TetherIcon isSelected={selectedCoin.symbol === "USDT"} />
      <UsdcIcon isSelected={selectedCoin.symbol === "USDC"} />
    </div>
  );
}

interface DepositHeaderProps {
  selectedCoin: CoinOption;
}

function DepositHeader({ selectedCoin }: DepositHeaderProps) {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="deposit header"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pb-0 pt-6 px-6 relative w-full">
          <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[32px] text-nowrap tracking-[-0.96px]">
            <p className="leading-[1.2] whitespace-pre">
              Deposit
            </p>
          </div>
          <SelectedCoin selectedCoin={selectedCoin} />
        </div>
      </div>
    </div>
  );
}

interface CoinSelectProps {
  selectedCoin: CoinOption;
  onCoinChange: (coin: CoinOption) => void;
}

function CoinSelect({
  selectedCoin,
  onCoinChange,
}: CoinSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (coin: CoinOption) => {
    onCoinChange(coin);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="bg-white box-border content-stretch flex gap-3 items-center justify-center px-3 py-2.5 relative rounded-[10px] shrink-0 cursor-pointer hover:shadow-[0px_3px_8px_0px_rgba(0,0,0,0.08)] transition-all"
        data-name="coin select"
        onClick={handleToggle}
      >
        <div
          aria-hidden="true"
          className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.05)]"
        />
        <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0">
          <div className="relative shrink-0 size-6 flex items-center justify-center">
            {selectedCoin.symbol === "USDT" ? (
              <div className="scale-[0.67]">
                <TetherIcon />
              </div>
            ) : (
              <div className="scale-[0.67]">
                <UsdcIcon />
              </div>
            )}
          </div>
          <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a202c] text-[20px] text-nowrap tracking-[0.2px]">
            <p className="leading-[19.2px] whitespace-pre">
              {selectedCoin.symbol}
            </p>
          </div>
        </div>

        <div className="h-[6.175px] relative shrink-0 w-2.5">
          <img
            className={`block max-w-none size-full transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            src={imgVector}
            alt="Dropdown arrow"
          />
        </div>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e2e2e2] rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] z-50 overflow-hidden">
          {COIN_OPTIONS.map((coin) => (
            <div
              key={coin.symbol}
              className="flex gap-1.5 items-center px-3 py-2.5 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => handleOptionSelect(coin)}
            >
              <div className="relative shrink-0 size-6 flex items-center justify-center">
                {coin.symbol === "USDT" ? (
                  <div className="scale-[0.67]">
                    <TetherIcon isSelected={false} />
                  </div>
                ) : (
                  <div className="scale-[0.67]">
                    <UsdcIcon isSelected={false} />
                  </div>
                )}
              </div>
              <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a202c] text-[20px] text-nowrap tracking-[0.2px]">
                <p className="leading-[19.2px] whitespace-pre">
                  {coin.symbol}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface CoinSelectMaxProps {
  selectedCoin: CoinOption;
  onCoinChange: (coin: CoinOption) => void;
}

function CoinSelectMax({
  selectedCoin,
  onCoinChange,
}: CoinSelectMaxProps) {
  return (
    <div
      className="content-stretch flex flex-col gap-2.5 items-end justify-start relative shrink-0"
      data-name="coin select & max"
    >
      <CoinSelect
        selectedCoin={selectedCoin}
        onCoinChange={onCoinChange}
      />
      <div className="flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[16px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">
          {selectedCoin.maxAmount}
        </p>
      </div>
    </div>
  );
}

interface DepositInputProps {
  amount: string;
  onAmountChange: (value: string) => void;
  selectedCoin: CoinOption;
  onCoinChange: (coin: CoinOption) => void;
}

function DepositInputAndCoinSelect({
  amount,
  onAmountChange,
  selectedCoin,
  onCoinChange,
}: DepositInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const coinSelectRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    // Remove commas and non-numeric characters except decimal point
    const value = e.target.value.replace(/[^0-9.]/g, "");
    const numValue = parseFloat(value) || 0;

    if (numValue <= CONFIG.MAX_DEPOSIT) {
      onAmountChange(value);
    }
  };

  // Handle container click to focus input (excluding dropdown area)
  const handleContainerClick = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    // Don't focus input if clicking on the coin select dropdown
    if (
      coinSelectRef.current &&
      coinSelectRef.current.contains(e.target as Node)
    ) {
      return;
    }

    // Focus the input
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Format the display value with commas for thousands separators
  const formatWithCommas = (value: string) => {
    if (!value || value === "0") return "";
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return "";
    return numValue.toLocaleString("en-US", {
      maximumFractionDigits: 2,
      useGrouping: true,
    });
  };

  const displayValue = formatWithCommas(amount);
  const placeholderClass = !displayValue
    ? "text-[rgba(51,51,51,0.56)]"
    : "text-[#333333]";

  return (
    <div
      className="bg-white relative rounded-[16px] shrink-0 w-full cursor-text"
      data-name="deposit input and coin select"
      onClick={handleContainerClick}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d5d8dc] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[24px] relative w-full">
          <input
            ref={inputRef}
            type="text"
            value={displayValue}
            onChange={handleInputChange}
            placeholder="0"
            className={`flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-nowrap bg-transparent border-0 outline-0 ${placeholderClass} w-[162px]`}
          />
          <div ref={coinSelectRef}>
            <CoinSelectMax
              selectedCoin={selectedCoin}
              onCoinChange={onCoinChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface CommitmentButtonProps {
  option: CommitmentOption;
  isSelected: boolean;
  onClick: () => void;
}

function CommitmentButton({
  option,
  isSelected,
  onClick,
}: CommitmentButtonProps) {
  const baseClasses =
    "box-border text-[rgba(51,51,51,1)] border-0 content-stretch flex flex-col gap-2 h-[105px] items-start justify-start p-[24px] relative rounded-[16px] shrink-0 w-[194.667px] cursor-pointer transition-all duration-200";
  const activeClasses =
    "bg-[#d3f227] text-black border border-[#c0dc26] shadow-lg hover:bg-[#c9ee1f] transition-all duration-200";
  const inactiveClasses =
    "bg-[rgba(211,242,39,0.5)] text-[rgba(51,51,51,0.61)] hover:bg-[rgba(211,242,39,0.7)] hover:text-[rgba(51,51,51,1)] hover:shadow-md";

  return (
    <div
      className={`${baseClasses} ${isSelected ? activeClasses : inactiveClasses}`}
      onClick={onClick}
      data-name={`commit ${option.years} years`}
    >
      {isSelected && (
        <div
          aria-hidden="true"
          className="absolute border border-[#c0dc26] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_2px_10px_-5px_rgba(0,0,0,0.07)]"
        />
      )}
      <div className="flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.2] whitespace-pre">
          Commit {option.years} Years
        </p>
      </div>
      <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[25px] text-nowrap">
        <p className="leading-[1.2] whitespace-pre">
          {option.label}
        </p>
      </div>
    </div>
  );
}

interface CommitmentOptionsProps {
  selectedOption: CommitmentOption | null;
  onOptionSelect: (option: CommitmentOption) => void;
}

function CommitmentOptionsRow({
  selectedOption,
  onOptionSelect,
}: CommitmentOptionsProps) {
  return (
    <div
      className="content-stretch flex gap-6 items-center justify-start relative shrink-0"
      data-name="options"
    >
      {COMMITMENT_OPTIONS.map((option) => (
        <CommitmentButton
          key={option.years}
          option={option}
          isSelected={selectedOption?.years === option.years}
          onClick={() => onOptionSelect(option)}
        />
      ))}
    </div>
  );
}

interface ExpectedYieldProps {
  depositAmount: number;
  selectedOption: CommitmentOption | null;
  selectedCoin: CoinOption;
}

function ExpectedYield({
  depositAmount,
  selectedOption,
  selectedCoin,
}: ExpectedYieldProps) {
  const hasValidData = depositAmount > 0 && selectedOption;

  // Calculate KYD yield based on deposit amount and multiplier
  const expectedKyd = hasValidData
    ? Math.floor(
        (depositAmount / CONFIG.KYD_CONVERSION_RATE) *
          selectedOption.multiplier,
      )
    : 0;

  // Calculate total USDC yield over commitment period using compound interest
  // Formula: P * (1 + r)^t - P = total yield over t years
  const totalYield = hasValidData
    ? Math.floor(
        depositAmount *
          (Math.pow(1 + CONFIG.APR, selectedOption.years) - 1),
      )
    : 0;

  const kydDisplay = hasValidData
    ? expectedKyd.toLocaleString()
    : "–––";
  const yieldDisplay = hasValidData
    ? totalYield.toLocaleString()
    : "–––";
  const yearsDisplay = hasValidData
    ? selectedOption.years
    : "–";

  return (
    <div
      className="bg-white from-[#e7e9ef03] relative rounded-[16px] shrink-0 to-[#ffffff] w-full"
      data-name="Expected yield"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#dddddd] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_12px_-5px_rgba(0,0,0,0.035)]"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-3 items-center justify-start p-[24px] relative w-full">
          {/* Expected KYD */}
          <div className="basis-0 content-stretch flex flex-col gap-3 grow items-start justify-start min-h-px min-w-px relative rounded-[8px] shrink-0">
            <div className="flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[16px] text-nowrap tracking-[-0.8px]">
              <p className="leading-[1.2] whitespace-pre">
                Expected $KYD • {yearsDisplay} Years
              </p>
            </div>
            <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0">
              <div className="relative shrink-0 size-[26px]">
                <img
                  className="block max-w-none size-full"
                  src={imgKydToken}
                />
              </div>
              <div
                className={`flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[25px] text-nowrap ${hasValidData ? "text-[#333333]" : "text-[rgba(51,51,51,0.6)]"}`}
              >
                <p className="leading-[1.2] whitespace-pre">
                  {kydDisplay}
                </p>
              </div>
            </div>
          </div>

          {/* Estimated Yield */}
          <div className="basis-0 content-stretch flex flex-col gap-3 grow items-end justify-start min-h-px min-w-px relative rounded-[8px] shrink-0">
            <div className="flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[16px] text-nowrap tracking-[-0.8px]">
              <p className="leading-[1.2] whitespace-pre">
                Estimated total yield • {yearsDisplay} Years
              </p>
            </div>
            <div className="content-stretch flex gap-2.5 items-center justify-center relative shrink-0">
              <div
                className={`flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[25px] text-nowrap ${hasValidData ? "text-[#333333]" : "text-[rgba(51,51,51,0.6)]"}`}
              >
                <p className="leading-[1.2] whitespace-pre">
                  {yieldDisplay}
                </p>
              </div>
              <div className="relative shrink-0 size-6">
                <img
                  className="block max-w-none size-full"
                  src={selectedCoin.icon}
                  alt={selectedCoin.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_2px_0px_inset_rgba(255,255,255,0.75)]" />
    </div>
  );
}

interface ReviewButtonProps {
  isEnabled: boolean;
  onClick: () => void;
}

function ReviewButton({
  isEnabled,
  onClick,
}: ReviewButtonProps) {
  const buttonClasses = isEnabled
    ? "basis-0 bg-[#111] grow min-h-px min-w-px relative rounded-[10px] shrink-0 cursor-pointer shadow-sm hover:shadow-lg transition-all"
    : "basis-0 bg-[rgba(0,0,0,0.5)] grow min-h-px min-w-px opacity-20 relative rounded-[10px] shrink-0 cursor-not-allowed";

  const borderClasses = isEnabled
    ? "absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_12px_-5px_rgba(0,0,0,0.15)]"
    : "absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_12px_-5px_rgba(0,0,0,0.1)]";

  return (
    <div className="box-border content-stretch flex gap-2.5 items-start justify-start px-0 py-6 relative shrink-0 w-full">
      <div
        className={buttonClasses}
        onClick={isEnabled ? onClick : undefined}
      >
        <div className="box-border content-stretch flex gap-1.5 items-center justify-center overflow-clip px-0 py-6 relative w-full">
          <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white">
            <p className="leading-[20px] whitespace-pre">
              Review
            </p>
          </div>
        </div>
        <div aria-hidden="true" className={borderClasses} />
      </div>
    </div>
  );
}

export function DepositSection() {
  const [depositAmount, setDepositAmount] =
    useState<string>("");
  const [selectedOption, setSelectedOption] =
    useState<CommitmentOption | null>(null);
  const [selectedCoin, setSelectedCoin] = useState<CoinOption>(
    COIN_OPTIONS[0],
  ); // Default to USDC

  const numericAmount = parseFloat(depositAmount) || 0;
  const isReviewEnabled =
    numericAmount > 0 && selectedOption !== null;

  const handleReview = () => {
    if (isReviewEnabled) {
      console.log("Review deposit:", {
        amount: numericAmount,
        coin: selectedCoin.symbol,
        commitment: selectedOption,
        expectedKyd: Math.floor(
          (numericAmount / CONFIG.KYD_CONVERSION_RATE) *
            selectedOption.multiplier,
        ),
        totalYield: Math.floor(
          numericAmount *
            (Math.pow(1 + CONFIG.APR, selectedOption.years) -
              1),
        ),
      });
      // Handle review logic here
    }
  };

  return (
    <div
      className="bg-neutral-50 relative rounded-[32px] w-full max-w-[680px]"
      data-name="deposit section"
    >
      <div className="content-stretch flex flex-col gap-6 items-end justify-start overflow-clip relative w-full">
        <DepositHeader selectedCoin={selectedCoin} />

        {/* Divider line */}
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <img
              className="block max-w-none size-full"
              src={imgLine244}
            />
          </div>
        </div>

        {/* Input and Options */}
        <div className="relative shrink-0 w-full">
          <div className="relative size-full">
            <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start px-6 py-0 relative w-full">
              <DepositInputAndCoinSelect
                amount={depositAmount}
                onAmountChange={setDepositAmount}
                selectedCoin={selectedCoin}
                onCoinChange={setSelectedCoin}
              />

              <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
                <CommitmentOptionsRow
                  selectedOption={selectedOption}
                  onOptionSelect={setSelectedOption}
                />
                <ExpectedYield
                  depositAmount={numericAmount}
                  selectedOption={selectedOption}
                  selectedCoin={selectedCoin}
                />
                <ReviewButton
                  isEnabled={isReviewEnabled}
                  onClick={handleReview}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#dadada] border-solid inset-0 pointer-events-none rounded-[32px]"
      />
    </div>
  );
}