import { useState, useRef, useEffect } from "react";
import {
  imgLogo,
  imgHandCoins,
  imgStack,
  imgWallet,
  imgLine129,
  imgVector,
} from "../imports/svg-w4ktt";

function Logo() {
  return (
    <div className="relative shrink-0 size-10" data-name="logo">
      <div className="absolute inset-[-5%_-7.5%_-10%_-7.5%]">
        <img
          className="block max-w-none size-full"
          src={imgLogo}
        />
      </div>
    </div>
  );
}

function HandCoins() {
  return (
    <div
      className="relative shrink-0 size-6"
      data-name="HandCoins"
    >
      <img
        className="block max-w-none size-full"
        src={imgHandCoins}
      />
    </div>
  );
}

function Lend() {
  return (
    <div
      className="bg-[#333333] box-border content-stretch flex gap-2 items-center justify-start px-3 py-2.5 relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#444444] transition-colors"
      data-name="Lend"
    >
      <HandCoins />
      <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.48px]">
        <p className="leading-[1.2] whitespace-pre">Lend</p>
      </div>
    </div>
  );
}

function Stack() {
  return (
    <div className="relative shrink-0 size-6" data-name="Stack">
      <img
        className="block max-w-none size-full"
        src={imgStack}
      />
    </div>
  );
}

function Stake() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start px-3 py-2.5 relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
      data-name="Stake"
    >
      <Stack />
      <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[16px] text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.2] whitespace-pre">Stake</p>
      </div>
    </div>
  );
}

function Wallet() {
  return (
    <div
      className="h-[18px] relative shrink-0 w-[19px]"
      data-name="Wallet"
    >
      <img
        className="block max-w-none size-full"
        src={imgWallet}
      />
    </div>
  );
}

function ConnectWallet() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDisconnect = () => {
    setIsOpen(false);
    console.log("Disconnect wallet clicked");
    // Add disconnect wallet logic here
  };

  const handleEdit = () => {
    setIsOpen(false);
    console.log("Edit wallet clicked");
    // Add edit wallet logic here
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="bg-gradient-to-t box-border content-stretch flex from-[#f0f1f100] gap-2 items-center justify-start px-3 py-2.5 relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08),0px_-1px_4px_0px_#a5fd00,0px_0px_10px_0px_rgba(211,242,39,0.71)] shrink-0 to-[#ffffff24] cursor-pointer hover:shadow-[0px_2px_5px_0px_rgba(0,0,0,0.12),0px_-2px_6px_0px_#a5fd00,0px_0px_15px_0px_rgba(211,242,39,0.8)] transition-all"
        data-name="connect wallet"
        onClick={handleToggle}
      >
        <Wallet />
        <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.48px]">
          <p className="leading-[1.2] whitespace-pre">Wallet</p>
        </div>
        <div className="flex flex-row items-center self-stretch">
          <div
            className="flex h-full items-center justify-center relative shrink-0"
            style={
              {
                "--transform-inner-width": "19",
                "--transform-inner-height": "19.1875",
                width:
                  "calc(1px * ((var(--transform-inner-height) * 1) + (var(--transform-inner-width) * 0)))",
              } as React.CSSProperties
            }
          ></div>
        </div>
        <div
          className="h-[6.175px] relative shrink-0 w-2.5"
          data-name="Vector"
        >
          <img
            className={`block max-w-none size-full transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            src={imgVector}
            alt="Dropdown arrow"
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-[#e2e2e2] rounded-[8px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] z-50 overflow-hidden">
          <div
            className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors border-b border-[#f0f0f0]"
            onClick={handleEdit}
          >
            <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[14px] text-nowrap">
              <p className="leading-[1.2] whitespace-pre">Edit</p>
            </div>
          </div>
          <div
            className="flex items-center px-4 py-3 cursor-pointer hover:bg-red-50 transition-colors text-red-600"
            onClick={handleDisconnect}
          >
            <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap">
              <p className="leading-[1.2] whitespace-pre">Disconnect Wallet</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function NavButtons() {
  return (
    <div
      className="content-stretch flex gap-12 items-center justify-start relative shrink-0"
      data-name="nav buttons"
    >
      <Lend />
      <Stake />
      <ConnectWallet />
    </div>
  );
}

interface DashboardNavBarProps {
  onNavigateToLanding?: () => void;
}

export function DashboardNavBar({
  onNavigateToLanding,
}: DashboardNavBarProps) {
  return (
    <div
      className="box-border content-stretch flex items-center justify-between p-[24px] relative w-full max-w-[1336px] mx-auto"
      data-name="Nav bar"
    >
      {onNavigateToLanding ? (
        <div
          className="cursor-pointer hover:opacity-80 transition-opacity"
          onClick={onNavigateToLanding}
        >
          <Logo />
        </div>
      ) : (
        <Logo />
      )}
      <NavButtons />
    </div>
  );
}