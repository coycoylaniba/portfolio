import { IconType } from "@icons-pack/react-simple-icons";

import { cn } from "~/lib/utils";

interface SkillProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  icon: IconType;
  text: string;
}

function Skill({
  className,
  iconClassName,
  textClassName,
  icon: Icon,
  text,
}: SkillProps) {
  return (
    <div
      className={cn(
        "flex aspect-square flex-col items-center justify-center gap-4",
        className,
      )}
    >
      <Icon className={cn("size-6", iconClassName)} />

      <span className={cn("text-center text-xs", textClassName)}>{text}</span>
    </div>
  );
}

export { Skill };
