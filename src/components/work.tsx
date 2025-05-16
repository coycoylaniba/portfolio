import { cva, VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const workVariants = cva(
  "group relative flex aspect-square flex-col items-center justify-center transition-all hover:scale-105",
  {
    variants: {
      theme: {
        light: "bg-primary-light text-primary-dark",
        dark: "bg-primary-dark text-primary-light",
      },
    },
    defaultVariants: {
      theme: "light",
    },
  },
);

interface WorkProps extends VariantProps<typeof workVariants> {
  className?: string;
  name: string;
  description: string;
  href?: string;
}

function Work({ className, name, description, href, theme }: WorkProps) {
  const isLink = typeof href === "string" && href.length > 0;
  const Comp = isLink ? "a" : "div";

  return (
    <Comp
      href={href}
      target="_blank"
      className={cn(
        workVariants({ theme, className }),
        isLink && "cursor-pointer",
      )}
    >
      <div className="relative flex w-full flex-col items-center justify-center gap-2 p-2 lg:hidden lg:p-4 lg:group-hover:flex">
        <span className="text-center text-xs">{name}</span>

        <span className="absolute top-3/4 hidden max-w-[calc(100%-theme(spacing.8))] text-center text-[10px] opacity-70 lg:inline-block">
          {description}
        </span>
      </div>
    </Comp>
  );
}

export { Work };
