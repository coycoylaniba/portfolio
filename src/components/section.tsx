import { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

const sectionVariants = cva("flex min-h-screen snap-center flex-col p-8", {
  variants: {
    theme: {
      light: "bg-primary-light text-primary-dark",
      dark: "bg-primary-dark text-primary-light",
    },
  },
  defaultVariants: {
    theme: "light",
  },
});

interface SectionProps extends VariantProps<typeof sectionVariants> {
  className?: string;
  children?: ReactNode;
}

function Section({ className, children, theme }: SectionProps) {
  return (
    <section className={sectionVariants({ theme, className })}>
      {children}
    </section>
  );
}

export { Section };
