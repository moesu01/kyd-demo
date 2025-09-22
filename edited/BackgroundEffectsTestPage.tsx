import { useState } from "react";
import { Button } from "./components/ui/button";
import { ArrowLeft } from "lucide-react";
import { FloatingImageGrid } from "./components/FloatingImageGrid";
import { FloatingImageGridControls } from "./components/FloatingImageGridControls";

interface BackgroundEffectsTestPageProps {
  onNavigateToLanding: () => void;
}

export default function BackgroundEffectsTestPage({
  onNavigateToLanding,
}: BackgroundEffectsTestPageProps) {
  // State for FloatingImageGrid controls
  const [opacity, setOpacity] = useState(1);
  const [imageScale, setImageScale] = useState(0.7);
  const [gridCellSize, setGridCellSize] = useState(90);
  const [driftEnabled, setDriftEnabled] = useState(true);
  const [driftIntensity, setDriftIntensity] = useState(1.5);
  const [hoverScale, setHoverScale] = useState(2);
  const [hoverDistance, setHoverDistance] = useState(0.25);
  // Lighting controls
  const [ambientLightColor, setAmbientLightColor] =
    useState("#ffffff");
  const [ambientLightIntensity, setAmbientLightIntensity] =
    useState(2.0);
  const [
    directionalLightIntensity,
    setDirectionalLightIntensity,
  ] = useState(0.6);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Three.js Floating Image Grid Background with Controls */}
      <FloatingImageGrid
        opacity={opacity}
        imageScale={imageScale}
        gridCellSize={gridCellSize}
        driftEnabled={driftEnabled}
        driftIntensity={driftIntensity}
        hoverScale={hoverScale}
        hoverDistance={hoverDistance}
        ambientLightColor={ambientLightColor}
        ambientLightIntensity={ambientLightIntensity}
        directionalLightIntensity={directionalLightIntensity}
      />

      {/* Navigation Controls */}
      <div className="relative z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={onNavigateToLanding}
          className="fixed top-4 left-4 bg-black/20 border-white/20 text-white hover:bg-black/40"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Landing
        </Button>

        {/* Floating Image Grid Controls */}
        <FloatingImageGridControls
          opacity={opacity}
          onOpacityChange={setOpacity}
          imageScale={imageScale}
          onImageScaleChange={setImageScale}
          gridCellSize={gridCellSize}
          onGridCellSizeChange={setGridCellSize}
          driftEnabled={driftEnabled}
          onDriftEnabledChange={setDriftEnabled}
          driftIntensity={driftIntensity}
          onDriftIntensityChange={setDriftIntensity}
          hoverScale={hoverScale}
          onHoverScaleChange={setHoverScale}
          hoverDistance={hoverDistance}
          onHoverDistanceChange={setHoverDistance}
          ambientLightColor={ambientLightColor}
          onAmbientLightColorChange={setAmbientLightColor}
          ambientLightIntensity={ambientLightIntensity}
          onAmbientLightIntensityChange={
            setAmbientLightIntensity
          }
          directionalLightIntensity={directionalLightIntensity}
          onDirectionalLightIntensityChange={
            setDirectionalLightIntensity
          }
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-40 flex flex-col items-center justify-center min-h-screen border-[80px] border-white bg-transparent ">
        <div className="text-center flex items-center justify-center text-white space-y-6 p-[128px] bg-radial from-black from-40% to-transparent to-80%">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Institutional Yield <br /> From Live Events
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Back live events with your liquidity and unlock
            real, stable yield.
          </p>
          <div className="bg-white box-border content-stretch flex from-[#f0f1f100] gap-3 items-center justify-center p-[24px] relative rounded-[16px] shadow-[0px_1px_22.1px_0px_rgba(211,242,39,0.48),0px_1px_3px_0px_rgba(0,0,0,0.08)] shrink-0 to-[#ffffff] w-[200px] cursor-pointer hover:shadow-[0px_2px_30px_0px_rgba(211,242,39,0.6),0px_2px_5px_0px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105">
            <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[18px] text-nowrap">
              <p className="leading-[19.2px] whitespace-pre">
                Start Earning
              </p>
            </div>
          </div>
          {/* below are hidden */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400 max-w-2xl mx-auto mt-8 opacity-0">
            <div className="bg-black/30 p-4 rounded-lg">
              <h3 className="text-white mb-2">
                Mouse Interaction
              </h3>
              <p>
                Move cursor to influence image positions and
                scaling
              </p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <h3 className="text-white mb-2">Live Controls</h3>
              <p>
                Adjust opacity, scaling, and drift in real-time
              </p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <h3 className="text-white mb-2">WebGL Powered</h3>
              <p>
                Hardware-accelerated rendering with Three.js
              </p>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-500 opacity-0">
            <p>
              Click the "Controls" button in the top-right to
              customize the grid behavior
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}