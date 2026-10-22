import {
  Building2,
  Hammer,
  Home,
  LayoutGrid,
  PaintRoller,
  Wrench,
  type LucideProps,
} from "lucide-react";
import type { Service } from "@/data/services";

const iconMap: Record<Service["icon"], React.ComponentType<LucideProps>> = {
  home: Home,
  house: Home,
  building2: Building2,
  hammer: Hammer,
  paintRoller: PaintRoller,
  layoutGrid: LayoutGrid,
  wrench: Wrench,
};

export default function ServiceIcon({
  icon,
  className,
}: {
  icon: Service["icon"];
  className?: string;
}) {
  const Icon = iconMap[icon];
  return <Icon className={className} strokeWidth={1.5} />;
}
