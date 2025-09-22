import { useState, useRef, useEffect } from "react";
import {
  img,
  imgUsdc,
  imgUsdCoinUsdcLogo1,
  imgVector,
  imgKydToken,
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
    <header className="relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between pb-0 pt-6 px-6 relative w-full">
          <h1 className="font-inter font-semibold text-[#333333] text-[32px] text-nowrap tracking-[-3%] leading-[1.2]">
            Deposit
          </h1>
          <SelectedCoin selectedCoin={selectedCoin} />
        </div>
      </div>
    </header>
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
        className="bg-white box-border flex gap-2 md:gap-3 items-center justify-center px-2 md:px-3 py-2 md:py-2.5 relative rounded-[10px] shrink-0 cursor-pointer hover:shadow-[0px_3px_8px_0px_rgba(0,0,0,0.08)] transition-all min-w-0"
        data-name="coin select"
        onClick={handleToggle}
      >
        <div
          aria-hidden="true"
          className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.05)]"
        />
        <div className="flex gap-1 md:gap-1.5 items-center justify-start relative shrink-0 min-w-0">
          <div className="relative shrink-0 size-5 md:size-6 flex items-center justify-center">
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
          <div className="flex flex-col font-inter justify-center leading-[0] relative shrink-0 text-[#1a202c] text-sm md:text-base text-nowrap tracking-[0.2px]">
            <p className="leading-[1.2] whitespace-pre">
              {selectedCoin.symbol}
            </p>
          </div>
        </div>

        <div className="h-[5px] md:h-[6.175px] relative shrink-0 w-2 md:w-2.5">
          <img
            className={`block max-w-none size-full transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            src={imgVector}
            alt="Dropdown arrow"
          />
        </div>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#e2e2e2] rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] z-50 overflow-hidden min-w-full">
          {COIN_OPTIONS.map((coin) => (
            <div
              key={coin.symbol}
              className="flex gap-1 md:gap-1.5 items-center px-2 md:px-3 py-2 md:py-2.5 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => handleOptionSelect(coin)}
            >
              <div className="relative shrink-0 size-5 md:size-6 flex items-center justify-center">
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
              <div className="flex flex-col font-inter justify-center leading-[0] relative shrink-0 text-[#1a202c] text-sm md:text-base text-nowrap tracking-[0.2px]">
                <p className="leading-[1.2] whitespace-pre">
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
      className="flex flex-col gap-1.5 md:gap-2.5 items-end justify-start relative shrink-0 min-w-0"
      data-name="coin select & max"
    >
      <CoinSelect
        selectedCoin={selectedCoin}
        onCoinChange={onCoinChange}
      />
      <div className="flex flex-col font-geist-mono font-regular justify-center leading-[0] tracking-[3%] relative shrink-0 mt-2 text-[#aaaaaa] text-xs md:text-sm text-nowrap">
        <p>
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
      className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.05)] border-[1px] border-[#e8e8e8] rounded-[16px] shrink-0 w-full cursor-text"
      data-name="deposit input and coin select"
      onClick={handleContainerClick}
    >

      <div className="flex items-center w-full h-full">
        <div className="flex items-center justify-between p-4 md:p-6 w-full">
          <input
            ref={inputRef}
            type="text"
            value={displayValue}
            onChange={handleInputChange}
            placeholder="Amount"
            className={`font-inter font-bold text-2xl md:text-3xl lg:text-4xl bg-transparent border-0 outline-0 ${placeholderClass} flex-1 min-w-0 mr-3 md:mr-4`}
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
  const baseClasses = [
    "box-border",
    "border-0",
    "flex",
    "flex-row md:flex-col",
    "gap-2",
    "items-center md:items-start",
    "justify-between md:justify-center",
    "px-4",
    "relative",
    "rounded-[16px]",
    "cursor-pointer",
    "transition-all",
    "duration-200",
    "min-h-[60px] md:min-h-[80px]",
    "flex-1",
  ].join(" ");

  const activeClasses = [
    "bg-[#ffffff]",
    "text-black",
    "border",
    "border-[1px]",
    "border-[#dddddd]",
    "shadow-[0_2px_8px_rgba(0,0,0,0.05)]",
    // "hover:bg-[#c9ee1f]",
    // "hover:border-[#aaaaaa]",
    "transition-all",
    "duration-150",
  ].join(" ");

  const inactiveClasses = [
    "bg-[rgba(255,255,255,.25)]",
    "border",
    "border-[1px]",
    "border-[#e8e8e8]",
    "text-[#888888]",
    "hover:bg-[rgba(255,255,255,.5)]",
    "hover:text-[rgba(51,51,51,1)]",
    "hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]",
    "transition-all",
    "duration-150",

  ].join(" ");

  return (
    <div
      className={`${baseClasses} ${isSelected ? activeClasses : inactiveClasses}`}
      onClick={onClick}
      data-name={`${option.years} years`}
    >
   

      <div className="flex flex-row md:flex-col font-geist-mono justify-center leading-[0] relative shrink-0 text-base md:text-base text-nowrap tracking-[-0.48px]">
        <p className={`leading-[1.2] whitespace-pre  ${isSelected ? 'font-regular text-[#333333]' : 'text-[#888888]'}`}>
          {option.years} Years
        </p>
      </div>
      <div className="flex flex-col font-inter justify-center leading-[0] relative shrink-0 text-lg md:text-xl text-nowrap">
        <p className={`leading-[1.2] whitespace-pre ${isSelected ? 'font-bold' : 'font-medium'}`}>
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
      className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full"
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

  return (
    <div
      className="bg-transparent rounded-[16px] w-full border border-[#e8e8e8]"
      data-name="Expected yield"
    >
      <div className="relative">
        <div className="grid grid-cols-2 gap-4 divide-x divide-[#e8e8e8] md:gap-6">
          {/* Expected KYD */}
          <div className="flex flex-col gap-3 md:gap-3 p-4 md:p-6">
            <div className="font-geist-mono text-[#888888] text-sm md:text-base tracking-[-3%]">
              <p className="leading-[1.2]">
                <span className="block md:inline">Expected </span>
                <span className="block md:inline">$KYD</span>
              </p>
            </div>
            <div className="flex gap-2 md:gap-2.5 items-center">
              <div className="size-5 md:size-7">
                <img className="size-full" src={imgKydToken} />
              </div>
              <div
                className={`font-inter font-medium text-lg md:text-2xl lg:text-[25px] ${hasValidData ? "text-[#333333]" : "text-[rgba(51,51,51,0.6)]"}`}
              >
                <p className="leading-[1.2]">{kydDisplay}</p>
              </div>
            </div>
          </div>

          {/* Estimated Yield */}
          <div className="flex flex-col gap-3 md:gap-3 p-4 md:p-6">
            <div className="font-geist-mono text-[#888888] text-sm md:text-base tracking-[-3%] text-right md:text-right">
              <p className="leading-[1.2]">Estimated total yield</p>
            </div>
            <div className="flex gap-2 md:gap-2.5 items-center justify-end md:justify-end">
              <div
                className={`font-inter font-medium text-lg md:text-2xl lg:text-[25px] ${hasValidData ? "text-[#333333]" : "text-[rgba(51,51,51,0.6)]"}`}
              >
                <p className="leading-[1.2]">{yieldDisplay}</p>
              </div>
              <div className="size-5 md:size-7">
                <img className="size-full" src={selectedCoin.icon} alt={selectedCoin.name} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        {/* <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-[#dddddd] transform -translate-x-1/2" /> */}
      </div>
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
    ? "bg-[#111] rounded-[16px] cursor-pointer border border-[rgba(0,0,0,0.3)] shadow-[0px_4px_12px_-5px_rgba(0,0,0,0.15)] hover:shadow-lg transition-all w-full"
    : "bg-[rgba(0,0,0,0.5)] opacity-20 rounded-[16px] cursor-not-allowed border border-[rgba(0,0,0,0.3)] shadow-[0px_4px_12px_-5px_rgba(0,0,0,0.1)] w-full";

  return (
    <div className="py-6 w-full">
      <div
        className={buttonClasses}
        onClick={isEnabled ? onClick : undefined}
      >
        <div className="flex items-center justify-center py-3 md:py-6 w-full">
          <div className="font-inter font-medium text-[20px] md:text-[24px] text-white">
            Review
          </div>
        </div>
      </div>
    </div>
  );
}

export function DepositSection() {
  const [depositAmount, setDepositAmount] =
    useState<string>("");
  const [selectedOption, setSelectedOption] =
    useState<CommitmentOption | null>(COMMITMENT_OPTIONS[1]); // Default to 3 years
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
      className="bg-transparent relative rounded-[32px] w-full max-w-[680px] border border-[#dadada]"
      data-name="deposit section"
    >
      <div className="flex flex-col gap-6 w-full">
        <DepositHeader selectedCoin={selectedCoin} />

        {/* Input and Options */}
        <div className="px-6 pb-0">
          <div className="flex flex-col gap-6 w-full">
            <DepositInputAndCoinSelect
              amount={depositAmount}
              onAmountChange={setDepositAmount}
              selectedCoin={selectedCoin}
              onCoinChange={setSelectedCoin}
            />

            <div className="flex flex-col gap-3 w-full">
              <h3 className="text-lg md:text-xl font-inter font-semibold text-[#333333] tracking-[0%]">
                Commitment
              </h3>
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
  );
}