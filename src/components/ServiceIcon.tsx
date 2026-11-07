import {
  Bath,
  Blocks,
  Building,
  Building2,
  ChefHat,
  DoorOpen,
  Droplet,
  Droplets,
  Fence,
  Flame,
  Grid3x3,
  Hammer,
  Home,
  HousePlus,
  Landmark,
  LayoutGrid,
  Layers,
  ParkingSquare,
  PaintRoller,
  PencilRuler,
  RotateCcw,
  Shovel,
  Sprout,
  Sun,
  Thermometer,
  ThermometerSnowflake,
  Trash2,
  Warehouse,
  Wrench,
  Zap,
  type LucideProps,
} from "lucide-react";
import type { ServiceIconName } from "@/data/services";

const iconMap: Record<ServiceIconName, React.ComponentType<LucideProps>> = {
  home: Home,
  doorOpen: DoorOpen,
  sun: Sun,
  fence: Fence,
  parkingSquare: ParkingSquare,
  droplets: Droplets,
  flame: Flame,
  sprout: Sprout,
  housePlus: HousePlus,
  building2: Building2,
  warehouse: Warehouse,
  building: Building,
  blocks: Blocks,
  shovel: Shovel,
  trash2: Trash2,
  landmark: Landmark,
  pencilRuler: PencilRuler,
  chefHat: ChefHat,
  bath: Bath,
  paintRoller: PaintRoller,
  hammer: Hammer,
  layoutGrid: LayoutGrid,
  grid3x3: Grid3x3,
  layers: Layers,
  thermometerSnowflake: ThermometerSnowflake,
  rotateCcw: RotateCcw,
  droplet: Droplet,
  zap: Zap,
  thermometer: Thermometer,
  wrench: Wrench,
};

export default function ServiceIcon({
  icon,
  className,
}: {
  icon: ServiceIconName;
  className?: string;
}) {
  const Icon = iconMap[icon];
  return <Icon className={className} strokeWidth={1.5} />;
}
