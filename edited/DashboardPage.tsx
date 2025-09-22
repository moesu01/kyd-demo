import { DashboardNavBar } from './components/DashboardNavBar';
import { PoolHeader } from './components/PoolHeader';
import { PoolMetrics } from './components/PoolMetrics';
import { DepositSection } from './components/DepositSection';

interface DashboardPageProps {
  onNavigateToLanding?: () => void;
}

export default function DashboardPage({ onNavigateToLanding }: DashboardPageProps) {
  return (
    <div className="bg-neutral-50 relative w-full min-h-screen" data-name="Dashboard Lending">
      {/* Navigation Bar */}
      <div className="relative z-30">
        <DashboardNavBar onNavigateToLanding={onNavigateToLanding} />
      </div>
      
      {/* Main Content */}
      <div className="absolute content-stretch flex flex-col gap-6 items-center justify-start left-1/2 top-[99px] translate-x-[-50%] w-full max-w-[1287px] px-4">
        <PoolHeader />
        <PoolMetrics />
        <DepositSection />
      </div>
    </div>
  );
}