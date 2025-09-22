import { useState } from "react";
import { Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Separator } from "./ui/separator";

interface FloatingImageGridControlsProps {
  opacity: number;
  onOpacityChange: (value: number) => void;
  imageScale: number;
  onImageScaleChange: (value: number) => void;
  gridCellSize: number;
  onGridCellSizeChange: (value: number) => void;
  driftEnabled: boolean;
  onDriftEnabledChange: (value: boolean) => void;
  driftIntensity: number;
  onDriftIntensityChange: (value: number) => void;
  hoverScale: number;
  onHoverScaleChange: (value: number) => void;
  hoverDistance: number;
  onHoverDistanceChange: (value: number) => void;
  // Lighting controls
  ambientLightColor: string;
  onAmbientLightColorChange: (value: string) => void;
  ambientLightIntensity: number;
  onAmbientLightIntensityChange: (value: number) => void;
  directionalLightIntensity: number;
  onDirectionalLightIntensityChange: (value: number) => void;
}

export function FloatingImageGridControls({
  opacity,
  onOpacityChange,
  imageScale,
  onImageScaleChange,
  gridCellSize,
  onGridCellSizeChange,
  driftEnabled,
  onDriftEnabledChange,
  driftIntensity,
  onDriftIntensityChange,
  hoverScale,
  onHoverScaleChange,
  hoverDistance,
  onHoverDistanceChange,
  ambientLightColor,
  onAmbientLightColorChange,
  ambientLightIntensity,
  onAmbientLightIntensityChange,
  directionalLightIntensity,
  onDirectionalLightIntensityChange,
}: FloatingImageGridControlsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const resetToDefaults = () => {
    onOpacityChange(0.8);
    onImageScaleChange(1.0);
    onGridCellSizeChange(120);
    onDriftEnabledChange(true);
    onDriftIntensityChange(0.5);
    onHoverScaleChange(2.0);
    onHoverDistanceChange(0.5);
    onAmbientLightColorChange("#ffffff");
    onAmbientLightIntensityChange(1.0);
    onDirectionalLightIntensityChange(0.6);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="fixed top-4 right-4 bg-black/20 border-white/20 text-white hover:bg-black/40 z-50"
        >
          <Settings className="w-4 h-4 mr-2" />
          Controls
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-80 max-h-[80vh] overflow-y-auto bg-black/90 border-white/20 text-white"
        align="end"
        side="bottom"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">
              Grid Controls
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={resetToDefaults}
              className="text-xs text-gray-400 hover:text-white"
            >
              Reset
            </Button>
          </div>

          <Separator className="bg-white/20" />

          {/* Opacity Control */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs text-gray-300">
                Image Opacity
              </Label>
              <span className="text-xs text-gray-400">
                {Math.round(opacity * 100)}%
              </span>
            </div>
            <Slider
              value={[opacity]}
              onValueChange={(value) =>
                onOpacityChange(value[0])
              }
              min={0.1}
              max={1.0}
              step={0.05}
              className="w-full"
            />
          </div>

          {/* Image Scale Control */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs text-gray-300">
                Image Size
              </Label>
              <span className="text-xs text-gray-400">
                {Math.round(imageScale * 100)}%
              </span>
            </div>
            <Slider
              value={[imageScale]}
              onValueChange={(value) =>
                onImageScaleChange(value[0])
              }
              min={0.3}
              max={1.5}
              step={0.05}
              className="w-full"
            />
          </div>

          {/* Grid Cell Size Control */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-xs text-gray-300">
                Grid Density
              </Label>
              <span className="text-xs text-gray-400">
                {gridCellSize}px
              </span>
            </div>
            <Slider
              value={[gridCellSize]}
              onValueChange={(value) =>
                onGridCellSizeChange(value[0])
              }
              min={80}
              max={200}
              step={10}
              className="w-full"
            />
          </div>

          <Separator className="bg-white/20" />

          {/* Drift Controls */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-xs text-gray-300">
                Enable Floating
              </Label>
              <Switch
                checked={driftEnabled}
                onCheckedChange={onDriftEnabledChange}
              />
            </div>

            {driftEnabled && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-xs text-gray-300">
                    Float Intensity
                  </Label>
                  <span className="text-xs text-gray-400">
                    {Math.round(driftIntensity * 100)}%
                  </span>
                </div>
                <Slider
                  value={[driftIntensity]}
                  onValueChange={(value) =>
                    onDriftIntensityChange(value[0])
                  }
                  min={0.0}
                  max={3.0}
                  step={0.1}
                  className="w-full"
                />
              </div>
            )}
          </div>

          <Separator className="bg-white/20" />

          {/* Hover Controls */}
          <div className="space-y-3">
            <h4 className="text-xs font-medium text-gray-300">
              Hover Effects
            </h4>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs text-gray-300">
                  Hover Scale
                </Label>
                <span className="text-xs text-gray-400">
                  {Math.round(hoverScale * 100)}%
                </span>
              </div>
              <Slider
                value={[hoverScale]}
                onValueChange={(value) =>
                  onHoverScaleChange(value[0])
                }
                min={1.0}
                max={4.0}
                step={0.1}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs text-gray-300">
                  Hover Range
                </Label>
                <span className="text-xs text-gray-400">
                  {Math.round(hoverDistance * 100)}%
                </span>
              </div>
              <Slider
                value={[hoverDistance]}
                onValueChange={(value) =>
                  onHoverDistanceChange(value[0])
                }
                min={0.1}
                max={1.0}
                step={0.05}
                className="w-full"
              />
            </div>
          </div>

          <Separator className="bg-white/20" />

          {/* Lighting Controls */}
          <div className="space-y-3">
            <h4 className="text-xs font-medium text-gray-300">
              Lighting Setup
            </h4>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs text-gray-300">
                  Ambient Light Color
                </Label>
                <input
                  type="color"
                  value={ambientLightColor}
                  onChange={(e) =>
                    onAmbientLightColorChange(e.target.value)
                  }
                  className="w-8 h-6 rounded border border-white/20 bg-transparent cursor-pointer"
                />
              </div>
              <div className="text-xs text-gray-500">
                Controls overall image brightness & color tone
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs text-gray-300">
                  Ambient Intensity
                </Label>
                <span className="text-xs text-gray-400">
                  {Math.round(ambientLightIntensity * 100)}%
                </span>
              </div>
              <Slider
                value={[ambientLightIntensity]}
                onValueChange={(value) =>
                  onAmbientLightIntensityChange(value[0])
                }
                min={0.0}
                max={2.0}
                step={0.05}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs text-gray-300">
                  Directional Light
                </Label>
                <span className="text-xs text-gray-400">
                  {Math.round(directionalLightIntensity * 100)}%
                </span>
              </div>
              <Slider
                value={[directionalLightIntensity]}
                onValueChange={(value) =>
                  onDirectionalLightIntensityChange(value[0])
                }
                min={0.0}
                max={2.0}
                step={0.05}
                className="w-full"
              />
            </div>
          </div>

          <Separator className="bg-white/20" />

          <div className="text-xs text-gray-500 space-y-1">
            <p>• Grid Density: Lower values = more images</p>
            <p>
              • Hover Range: Higher values = larger effect area
            </p>
            <p>• White ambient light = natural colors</p>
            <p>• All changes apply instantly</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}