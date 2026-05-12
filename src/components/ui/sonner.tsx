import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast rounded-[1.35rem] border px-4 py-3 backdrop-blur-xl group-[.toaster]:text-foreground group-[.toaster]:border-border/70 group-[.toaster]:bg-background/95 group-[.toaster]:shadow-[0_18px_50px_hsl(270_40%_4%_/_0.45)]",
          title: "font-medium tracking-[0.01em]",
          description: "group-[.toast]:text-muted-foreground/90",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          success:
            "border-emerald-400/35 bg-[linear-gradient(145deg,hsl(150_42%_18%_/_0.96)_0%,hsl(160_38%_12%_/_0.98)_55%,hsl(152_48%_16%_/_0.98)_100%)] text-emerald-50 shadow-[0_18px_55px_hsl(150_70%_22%_/_0.42)]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
