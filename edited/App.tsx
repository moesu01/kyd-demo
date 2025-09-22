import { useState } from 'react';
import { FloatingImageGrid } from './components/FloatingImageGrid';
import { NavBar } from './components/NavBar';
import { HeadlineSection } from './components/HeadlineSection';
import { LendingPoolOptions } from './components/LendingPoolOptions';
import DashboardPage from './DashboardPage';
import BackgroundEffectsTestPage from './BackgroundEffectsTestPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'dashboard' | 'backgroundTest'>('landing');

  const navigateToDashboard = () => {
    setCurrentPage('dashboard');
  };

  const navigateToLanding = () => {
    setCurrentPage('landing');
  };

  const navigateToBackgroundTest = () => {
    setCurrentPage('backgroundTest');
  };

  if (currentPage === 'dashboard') {
    return <DashboardPage onNavigateToLanding={navigateToLanding} />;
  }

  if (currentPage === 'backgroundTest') {
    return <BackgroundEffectsTestPage onNavigateToLanding={navigateToLanding} />;
  }

  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* Three.js Floating Image Grid Background */}
      <FloatingImageGrid
        opacity={1}
        imageScale={0.7}
        gridCellSize={90}
        driftEnabled={true}
        driftIntensity={1.5}
        hoverScale={2}
        hoverDistance={0.25}
        ambientLightColor="#ffffff"
        ambientLightIntensity={2.0}
        directionalLightIntensity={0.6}
      />
      
      {/* Navigation */}
      <div className="relative z-30">
        <NavBar onNavigateToDashboard={navigateToDashboard} />
      </div>
      
      {/* Main Content - First Section */}
      <div className="relative z-20">
        <HeadlineSection onNavigateToDashboard={navigateToDashboard} />
      </div>
      
      {/* Lending Pool Options - positioned below headline */}
      <div className="relative z-10 pt-[550px] md:pt-[600px] lg:pt-[650px] pb-[100px]">
        <LendingPoolOptions onNavigateToDashboard={navigateToDashboard} />
      </div>
    </div>
  );
}