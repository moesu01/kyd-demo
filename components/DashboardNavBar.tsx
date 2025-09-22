import { useState, useRef, useEffect } from "react";
import {
  imgLogo,
  imgWallet,
  imgVector,
} from "../imports/svg-w4ktt";
// @ts-ignore
import HandCoinsIcon from "../imports/HandCoins.svg";
// @ts-ignore
import StackIcon from "../imports/Stack.svg";

const Logo = ({ onClick }: { onClick?: () => void }) => (
  <div 
    className={`relative w-10 h-10 ${onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
    onClick={onClick}
  >
    <img
      className="w-full h-full object-contain"
      src={imgLogo}
      alt="KYD Logo"
    />
  </div>
);

const NavButton = ({ 
  icon, 
  label, 
  onClick, 
  className = '',
  isActive = false
}: {
  icon: string;
  label: string;
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
}) => {
  const baseClasses = "flex items-center gap-2 px-3 py-2.5 rounded-lg cursor-pointer transition-colors";
  
  let variantClasses;
  if (isActive) {
    variantClasses = "bg-gray-800 text-white hover:bg-gray-700 shadow-md";
  } else {
    variantClasses = "text-gray-800 hover:bg-gray-100";
  }
  
  return (
    <div 
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      <img 
        src={icon} 
        alt="" 
        className={`w-6 h-6 ${isActive ? 'brightness-0 invert' : ''}`}
      />
      <span className="font-inter text-base font-medium">{label}</span>
    </div>
  );
};

const ConnectWallet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleToggle = () => setIsOpen(!isOpen);
  const handleDisconnect = () => {
    setIsOpen(false);
    console.log("Disconnect wallet clicked");
  };
  const handleEdit = () => {
    setIsOpen(false);
    console.log("Edit wallet clicked");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center gap-2 px-3 py-2.5 rounded-lg cursor-pointer bg-gradient-to-t from-transparent to-white/15 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08),0px_-1px_4px_0px_#a5fd00,0px_0px_10px_0px_rgba(211,242,39,0.71)] hover:shadow-[0px_2px_5px_0px_rgba(0,0,0,0.12),0px_-2px_6px_0px_#a5fd00,0px_0px_15px_0px_rgba(211,242,39,0.8)] transition-all"
        onClick={handleToggle}
      >
        <img src={imgWallet} alt="" className="w-5 h-5" />
        <span className="font-inter text-base font-medium text-black">Wallet</span>
        <img
          className={`w-2.5 h-2.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          src={imgVector}
          alt="Dropdown arrow"
        />
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
          <div
            className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100"
            onClick={handleEdit}
          >
            <span className="font-inter text-sm text-gray-800">Edit</span>
          </div>
          <div
            className="flex items-center px-4 py-3 cursor-pointer hover:bg-red-50 transition-colors text-red-600"
            onClick={handleDisconnect}
          >
            <span className="font-inter text-sm">Disconnect Wallet</span>
          </div>
        </div>
      )}
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose, onNavigateToStaking, onNavigateToLending, currentPage }: { isOpen: boolean; onClose: () => void; onNavigateToStaking?: () => void; onNavigateToLending?: () => void; currentPage?: 'lend' | 'stake' }) => (
  <div className={`fixed inset-0 z-50 sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
    <div className="fixed inset-0 bg-black/50" onClick={onClose} />
    <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <Logo />
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="p-6 space-y-4">
        <NavButton
          icon={HandCoinsIcon}
          label="Lend"
          className="w-full justify-start"
          onClick={onNavigateToLending}
          isActive={currentPage === 'lend'}
        />
            <NavButton
              icon={StackIcon}
              label="Stake"
              className="w-full justify-start"
              onClick={onNavigateToStaking}
              isActive={currentPage === 'stake'}
            />
        <div className="pt-4">
          <ConnectWallet />
        </div>
      </div>
    </div>
  </div>
);

interface DashboardNavBarProps {
  onNavigateToLanding?: () => void;
  onNavigateToStaking?: () => void;
  onNavigateToLending?: () => void;
  currentPage?: 'lend' | 'stake';
}

export const DashboardNavBar = ({ onNavigateToLanding, onNavigateToStaking, onNavigateToLending, currentPage }: DashboardNavBarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleMobileMenuClose = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="w-full max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Logo onClick={onNavigateToLanding} />
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-8">
            <NavButton
              icon={HandCoinsIcon}
              label="Lend"
              onClick={onNavigateToLending}
              isActive={currentPage === 'lend'}
            />
            <NavButton
              icon={StackIcon}
              label="Stake"
              onClick={onNavigateToStaking}
              isActive={currentPage === 'stake'}
            />
            <ConnectWallet />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMobileMenuToggle}
            className="sm:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} onNavigateToStaking={onNavigateToStaking} onNavigateToLending={onNavigateToLending} currentPage={currentPage} />
    </>
  );
};