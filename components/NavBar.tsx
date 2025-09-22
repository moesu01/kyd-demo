import {
  imgLogo,
  imgDashboardIcon,
  imgWalletIcon,
} from "../imports/svg-t6i4s";
import { Download } from "lucide-react";

function Logo() {
  return (
    <div
    id="logo"
      className="relative shrink-0 size-[60px]"
      data-name="logo"
    >
      <div className="absolute inset-[-3.33%_-5%_-6.67%_-5%]">
        <img
          className="block max-w-none size-full"
          src={imgLogo}
        />
      </div>
    </div>
  );
}

function DashboardIcon() {
  return (
    <div
      className="relative shrink-0 size-4"
      data-name="dashboard icon"
    >
      <div className="absolute bottom-[-2.44%] left-0 right-0 top-0">
        <img
          className="block max-w-none size-full"
          src={imgDashboardIcon}
        />
      </div>
    </div>
  );
}

function Dashboard({ onNavigateToDashboard }: { onNavigateToDashboard: () => void }) {
  return (
    <div
      className="content-stretch flex gap-2 items-center justify-start relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      data-name="dashboard"
      onClick={onNavigateToDashboard}
    >
      <DashboardIcon />
      <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-neutral-100 text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.2] whitespace-pre">
          Dashboard
        </p>
      </div>
    </div>
  );
}

function WalletIcon() {
  return (
    <div
      className="h-[18px] relative shrink-0 w-[19px]"
      data-name="Wallet icon"
    >
      <img
        className="block max-w-none size-full"
        src={imgWalletIcon}
      />
    </div>
  );
}

function SignIn() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start px-0 py-2.5 relative rounded-[2px] shrink-0"
      data-name="sign in"
    >
      <WalletIcon />
      <div className="[text-shadow:#000000_0px_-1px_2px] flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.48px]">
        <p className="leading-[1.2] whitespace-pre">
          Connect Wallet
        </p>
      </div>
    </div>
  );
}

function DownloadProject() {
  const downloadProject = async () => {
    try {
      // Show download notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 max-w-sm';
      notification.innerHTML = `
        <div class="flex items-center gap-2">
          <div class="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
          <span>Preparing project download...</span>
        </div>
      `;
      document.body.appendChild(notification);

      // Create project structure information
      const projectInfo = {
        name: "KYD Labs Lending Pool",
        version: "1.0.0",
        description: "Complete React + Three.js lending pool application",
        generated: new Date().toISOString(),
        
        setup: {
          requirements: [
            "Node.js 18+ (download from nodejs.org)",
            "Code editor (VS Code recommended)",
            "Terminal/Command line access"
          ],
          
          steps: [
            "1. Create new folder: 'kyd-lending-pool'",
            "2. Copy all source files from Figma Make",
            "3. Run: npm install",
            "4. Run: npm run dev",
            "5. Open: http://localhost:5173"
          ]
        },

        structure: {
          "App.tsx": "Main application component with routing",
          "main.tsx": "React application entry point", 
          "index.html": "HTML template",
          "package.json": "Dependencies and scripts",
          "vite.config.ts": "Build configuration",
          "tsconfig.json": "TypeScript configuration",
          "tailwind.config.js": "Tailwind CSS configuration",
          "styles/globals.css": "Global CSS with design tokens",
          "components/": "React components directory",
          "components/ui/": "shadcn/ui component library",
          "imports/": "Figma assets and SVG imports",
          "guidelines/": "Development guidelines"
        },

        dependencies: {
          react: "^18.3.1",
          "react-dom": "^18.3.1", 
          three: "^0.170.0",
          "@types/three": "^0.170.0",
          "lucide-react": "^0.462.0",
          "motion": "^11.11.17",
          typescript: "~5.6.2",
          vite: "^5.4.10",
          tailwindcss: "^4.0.0-alpha.32"
        },

        instructions: `# KYD Labs Lending Pool - Complete Setup Guide

## Quick Start
1. Create project folder: 'kyd-lending-pool'
2. Install Node.js from https://nodejs.org (LTS version)
3. Copy all files from Figma Make to your project folder
4. Open terminal in project folder
5. Run: npm install
6. Run: npm run dev
7. Open: http://localhost:5173

## Key Features
- Three.js floating image background with WebGL
- Interactive lending pool dashboard
- Responsive design with Tailwind v4
- TypeScript for type safety
- shadcn/ui component library
- Motion animations
- Production-ready build system

## File Structure
All files visible in Figma Make need to be copied locally.

## Support
Check README.md for detailed instructions and troubleshooting.

Generated: ${new Date().toISOString()}`
      };

      // Create downloadable content
      const downloadContent = JSON.stringify(projectInfo, null, 2);
      
      const blob = new Blob([downloadContent], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `kyd-labs-setup-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      // Update notification
      notification.innerHTML = `
        <div class="flex items-center gap-2">
          <div class="w-4 h-4 bg-white rounded-full flex items-center justify-center">
            <div class="w-2 h-2 bg-green-600 rounded-full"></div>
          </div>
          <div>
            <div class="font-medium">Setup guide downloaded!</div>
            <div class="text-sm opacity-90">Check downloads folder</div>
          </div>
        </div>
      `;
      
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 4000);

    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  };

  return (
    <div
      className="content-stretch flex gap-2 items-center justify-start relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      data-name="download-project"
      onClick={downloadProject}
      title="Download project setup guide and instructions"
    >
      <Download className="w-4 h-4 text-neutral-100" />
      <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-neutral-100 text-nowrap tracking-[-0.48px]">
        <p className="leading-[1.2] whitespace-pre">
          Download
        </p>
      </div>
    </div>
  );
}

function Buttons({ onNavigateToDashboard }: { onNavigateToDashboard: () => void }) {
  return (
    <div
      className="content-stretch flex gap-8 items-center justify-center relative shrink-0"
      data-name="buttons"
    >
      <DownloadProject />
      <Dashboard onNavigateToDashboard={onNavigateToDashboard} />
      <SignIn />
    </div>
  );
}

export function NavBar({ onNavigateToDashboard }: { onNavigateToDashboard: () => void }) {
  return (
    <div
      className="absolute box-border content-stretch flex items-center justify-between left-1/2 px-6 py-4 rounded-[14px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.07)] top-3 translate-x-[-50%] w-[min(1336px,calc(100vw-32px))] backdrop-blur-sm bg-black/10 border border-white/10 z-20"
      data-name="Nav bar"
    >
      <Logo />
      <Buttons onNavigateToDashboard={onNavigateToDashboard} />
    </div>
  );
}