import { formatMessage } from "@/i18n/formatMessage";
import { PortfolioMessages, StationId, StationMessage } from "@/i18n/types";
import { cn } from "@/lib/utils";
import { BriefcaseBusiness, House, Mail, Route, UserRound } from "lucide-react";
import Link from "next/link";

interface RenderStation extends StationMessage {
  activeStation: StationId;
  messages: PortfolioMessages;
  navigateToStation: (targetId: StationId) => void;
}

const stationIcons = {
  home: House,
  projects: BriefcaseBusiness,
  experience: Route,
  about: UserRound,
  contact: Mail,
} satisfies Record<StationId, typeof House>;

export default function RenderStation({
  id,
  activeStation,
  index,
  label,
  shortLabel,
  messages,
  navigateToStation,
}: RenderStation) {
  const Icon = stationIcons[id];
  const isActive = id === activeStation;

  return (
    <Link
      key={id}
      href={`#${id}`}
      className={cn(
        "relative flex min-h-[4.45rem] items-center gap-[0.8rem] rounded-xl p-[0.35rem] text-textMuted transition-colors hover:bg-[rgba(17,17,23,0.64)] hover:text-foreground max-[1099px]:min-h-[3.85rem] max-[1099px]:min-w-0 max-[1099px]:flex-1 max-[1099px]:flex-col max-[1099px]:justify-center max-[1099px]:gap-1 max-[1099px]:p-[0.2rem] max-[1099px]:text-center",
        isActive && "text-goldLight",
      )}
      aria-current={isActive ? "location" : undefined}
      aria-label={formatMessage(messages.common.stationLabel, {
        index: index,
        label: label,
      })}
      onClick={function handleStationClick(event) {
        event.preventDefault();
        navigateToStation(id);
      }}
    >
      <span
        className={cn(
          "relative z-1 grid h-9 w-9 flex-none place-items-center rounded-full border border-[rgba(170,164,154,0.32)] bg-[#09090c] shadow-[0_0_0_0.32rem_rgba(5,5,6,0.92)] transition-[border-color,color,box-shadow,transform] [&>svg]:h-[0.95rem] [&>svg]:w-[0.95rem] max-[1099px]:h-8 max-[1099px]:w-8 max-[600px]:h-[1.85rem] max-[600px]:w-[1.85rem] max-[600px]:[&>svg]:w-[0.82rem]",
          isActive &&
            "scale-105 border-goldLight text-goldLight shadow-[0_0_0_0.32rem_rgba(5,5,6,0.94),0_0_0_0.42rem_rgba(214,169,95,0.18),0_0_1.5rem_rgba(214,169,95,0.4)]",
        )}
        aria-hidden="true"
      >
        <Icon />
      </span>
      <span className="grid gap-[0.12rem] max-[1099px]:gap-0">
        <span className="font-display text-[0.8rem] rtl:font-persian max-[1099px]:hidden">
          {index}
        </span>
        <span className="text-[0.66rem] font-bold uppercase tracking-[0.08em] rtl:tracking-normal max-[1099px]:hidden">
          {label}
        </span>
        <span className="hidden text-[0.57rem] font-bold uppercase tracking-[0.08em] rtl:tracking-normal max-[1099px]:block max-[600px]:text-[0.53rem] max-[600px]:tracking-[0.035em]">
          {shortLabel}
        </span>
      </span>
    </Link>
  );
}
