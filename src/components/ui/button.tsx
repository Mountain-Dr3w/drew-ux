
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Update: Adjusted gradient and background colors for a lighter, less saturated gray/black look.
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-base whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 active:scale-98 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative",
  {
    variants: {
      variant: {
        default: [
          // lighter gradient from #27272A to #52525B (tailwind zinc-800 to zinc-600)
          "bg-gradient-to-b from-[#27272A] to-[#52525B]",
          "shadow-[0_4px_16px_0_rgba(36,36,36,0.14),0_0.5px_0_0_rgba(255,255,255,0.09)_inset]",
          "text-white",
          "hover:bg-gradient-to-b hover:from-[#323237] hover:to-[#65656a] hover:brightness-110 hover:shadow-[0_8px_34px_0_rgba(48,48,56,0.10)]",
          "active:brightness-100 active:scale-95",
          "disabled:opacity-60 disabled:bg-gradient-to-b disabled:from-[#27272A] disabled:to-[#52525B] disabled:brightness-90",
        ].join(" "),
        destructive: [
          "bg-gradient-to-b from-[#3d2222] to-[#211010] text-white",
          "shadow-[0_4px_18px_0_rgba(70,40,40,0.18)]",
          "hover:brightness-110 hover:shadow-lg",
          "active:brightness-95 active:scale-95",
          "disabled:opacity-40"
        ].join(" "),
        outline: [
          // lighter near-white background, subtle border, medium gray text
          "border-2 border-[#E5E5E5]/90 bg-gradient-to-b from-[#F1F1F1]/90 to-[#E1E1E1]/80 text-[#333333]",
          "hover:bg-gradient-to-b hover:from-[#f3f3f3] hover:to-[#eaeaea]",
          "hover:text-[#27272A]",
          "shadow-[0_2px_8px_0_rgba(48,48,54,0.05)]",
          "active:scale-98",
          "disabled:opacity-50"
        ].join(" "),
        secondary: [
          // faded back to very light gray, more minimal
          "bg-gradient-to-b from-[#eaeaea] to-[#f5f5f5] text-[#444]",
          "shadow-[0_2px_8px_0_rgba(200,200,208,0.10)]",
          "hover:bg-gradient-to-b hover:from-[#ededed] hover:to-[#e5e5e5]",
          "hover:text-[#18181B]",
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
            ? "before:content-[''] before:absolute before:inset-0 before:rounded-full before:pointer-events-none before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-60"
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

