import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-base whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 active:scale-98 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative",
  {
    variants: {
      variant: {
        default: [
          "bg-gradient-to-b from-[#232328] to-[#18181B]",
          "shadow-[0_4px_16px_0_rgba(20,20,20,0.22),0_0.5px_0_0_rgba(255,255,255,0.13)_inset]",
          "text-white",
          "hover:bg-gradient-to-b hover:from-[#29292e] hover:to-[#202026] hover:brightness-110 hover:shadow-[0_8px_34px_0_rgba(40,40,40,0.13)]",
          "active:brightness-100 active:scale-95",
          "disabled:opacity-60 disabled:bg-gradient-to-b disabled:from-[#232328] disabled:to-[#232328] disabled:brightness-90",
        ].join(" "),
        destructive: [
          "bg-gradient-to-b from-[#3d2222] to-[#211010] text-white",
          "shadow-[0_4px_18px_0_rgba(70,40,40,0.18)]",
          "hover:brightness-110 hover:shadow-lg",
          "active:brightness-95 active:scale-95",
          "disabled:opacity-40"
        ].join(" "),
        outline: [
          "border-2 border-[#29292e]/70 bg-gradient-to-b from-[#212126]/90 to-[#15151a]/80 text-white",
          "hover:bg-gradient-to-b hover:from-[#2a2b2e] hover:to-[#1a1b1f]",
          "shadow-[0_2px_8px_0_rgba(20,20,20,0.09)]",
          "active:scale-98",
          "disabled:opacity-50"
        ].join(" "),
        secondary: [
          "bg-gradient-to-b from-[#2D2D32] to-[#212125] text-white/90",
          "shadow-[0_2px_8px_0_rgba(46,46,54,0.14)]",
          "hover:bg-gradient-to-b hover:from-[#36363a] hover:to-[#232328]",
          "hover:text-white",
          "active:brightness-98 active:scale-98",
          "disabled:opacity-50"
        ].join(" "),
        ghost: [
          "bg-transparent text-white hover:bg-white/5 hover:text-white",
          "shadow-none hover:shadow-none hover:scale-102",
          "active:scale-100",
          "disabled:opacity-40"
        ].join(" "),
        link: [
          "text-white underline-offset-4 hover:underline shadow-none",
          "hover:scale-102",
          "active:scale-100",
          "disabled:opacity-40"
        ].join(" "),
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-5 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          variant === "default"
            ? "before:content-[''] before:absolute before:inset-0 before:rounded-full before:pointer-events-none before:bg-gradient-to-b before:from-white/8 before:to-transparent before:opacity-90"
            : ""
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
