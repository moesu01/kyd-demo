import { imgDashboardIcon, imgWalletIcon } from "../imports/svg-t6i4s";

export function NavBar2() {
  const handleOpenApp = () => {
    // Handle open app navigation
    console.log("Opening app...");
  };

  const handleConnectWallet = () => {
    // Handle wallet connection
    console.log("Connecting wallet...");
  };

  // Unified styles for navbar buttons
  const navButtonStyles = "flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity";
  const iconStyles = "w-full h-full";
  const iconFilter = "brightness(0) saturate(100%) invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)";
  const textStyles = "font-['ABC_Diatype_Unlicensed_Trial:Regular',_'Helvetica',_sans-serif] text-[#333333] tracking-[-2%] text-[16px]";

  return (
    <div className="fixed top-4 right-4 z-50 bg-white py-3 px-6 rounded-lg">
      <div className="flex flex-col gap-2 items-end">
        {/* Dashboard Button */}
        <button 
          className={navButtonStyles}
          onClick={handleOpenApp}
        >
          <div className="w-3.5 h-3.5">
            <img 
              alt="Dashboard icon" 
              className={iconStyles}
              src={imgDashboardIcon}
              style={{ filter: iconFilter }}
            />
          </div>
          <span className={`${textStyles}`}>
            Open App
          </span>
        </button>

        {/* Connect Wallet Button */}
        <button 
          className={navButtonStyles}
          onClick={handleConnectWallet}
        >
          <div className="w-[19px] h-[16px]">
            <img 
              alt="Wallet icon" 
              className={iconStyles}
              src={imgWalletIcon}
              style={{ filter: iconFilter }}
            />
          </div>
          <span className={`${textStyles} font-bold`}>
            Connect Wallet
          </span>
        </button>
      </div>
    </div>
  );
}
