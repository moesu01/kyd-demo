import { useState } from 'react';
import { FloatingImageGrid } from './components/FloatingImageGrid';
import { NavBar2 } from './components/NavBar2';
import { HeadlineSection } from './components/HeadlineSection';
import { LendingPoolOptions2 } from './components/LendingPoolOptions2';
import DashboardPage from './DashboardPage';
import BackgroundEffectsTestPage from './BackgroundEffectsTestPage';
import { StakingPage } from './StakingPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'dashboard' | 'backgroundTest' | 'staking'>('landing');

  const navigateToDashboard = () => {
    setCurrentPage('dashboard');
  };

  const navigateToLanding = () => {
    setCurrentPage('landing');
  };

  const navigateToStaking = () => {
    setCurrentPage('staking');
  };


  if (currentPage === 'dashboard') {
    return <DashboardPage onNavigateToLanding={navigateToLanding} onNavigateToStaking={navigateToStaking} onNavigateToLending={navigateToDashboard} />;
  }

  if (currentPage === 'staking') {
    return <StakingPage onNavigateToLanding={navigateToLanding} onNavigateToLending={navigateToDashboard} onNavigateToStaking={navigateToStaking} />;
  }

  if (currentPage === 'backgroundTest') {
    return <BackgroundEffectsTestPage onNavigateToLanding={navigateToLanding} />;
  }

  return (
    <div className="relative w-full min-h-screen bg-white overflow-x-hidden  ">
      {/* Three.js Floating Image Grid Background */}
      <FloatingImageGrid
        opacity={1}
        imageScale={.8}
        gridCellSize={70}
        driftEnabled={true}
        driftIntensity={0.15}
        hoverScale={2}
        hoverDistance={0.35}
        ambientLightColor="#ffffff"
        ambientLightIntensity={2.0}
        directionalLightIntensity={0}
      />
      
      {/* Navigation */}
      <NavBar2 />
      
      {/* Main content sections - natural document flow */}
      <div className="relative z-20">
        {/* First Section: Headline */}
        <HeadlineSection onNavigateToDashboard={navigateToDashboard} />
        
        {/* Second Section: Lending Pool Options */}
        <LendingPoolOptions2 onNavigateToDashboard={navigateToDashboard} />
      </div>
    </div>
  );
}