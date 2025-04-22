
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Inspired by Zander's video: dark playful gradient, deep shadow, pill shape, scale up on hover, soft/smooth transition
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-base whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 active:scale-98 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: [
          // Dynamic dark gradient (adapts to dark mode as well)
          "bg-gradient-to-br from-[#231F39] to-[#181326] dark:from-[#fff] dark:to-[#ded8fa]",
          // In dark mode, invert for white gradient
          "text-white dark:text-[#231F39]",
          // Playful deep shadow for 'lift'
          "shadow-xl hover:shadow-[0_10px_30px_0_rgba(30,23,79,0.20)]",
          // Hover: brighten/scale/soft shadow
          "hover:brightness-110 hover:scale-105 hover:shadow-2xl",
          "active:scale-100",
          // Disabled: desaturate
          "disabled:opacity-60 disabled:brightness-90"
        ].join(" "),
        destructive: [
          "bg-gradient-to-br from-red-500 to-red-700 text-white",
          "shadow-xl hover:shadow-2xl hover:scale-105 hover:brightness-110",
          "active:scale-100",
          "disabled:opacity-50"
        ].join(" "),
        outline: [
          // Strong border and subtle gradient background on hover
          "border-2 border-[#221C3D]/90 bg-white/70 text-[#231F39] dark:border-white/80 dark:bg-[#2b234A]/80 dark:text-white",
          "hover:bg-gradient-to-br hover:from-[#f7f3ff] hover:to-[#e6e6fa] dark:hover:from-[#302A50]/90 dark:hover:to-[#433B69]/80",
          "shadow-md hover:shadow-xl hover:scale-104",
          "active:scale-100",
          "disabled:opacity-50"
        ].join(" "),
        secondary: [
          "bg-gradient-to-br from-[#E5DEFF] to-[#d3c4eb] text-[#231F39] dark:from-[#302A50] dark:to-[#3d3157] dark:text-white",
          "shadow-md hover:shadow-lg hover:scale-104",
          "hover:bg-gradient-to-br hover:from-[#ece6ff] hover:to-[#eaddfa] dark:hover:from-[#39316b] dark:hover:to-[#564082]",
          "active:scale-100",
          "disabled:opacity-50"
        ].join(" "),
        ghost: [
          "bg-transparent text-[#231F39] hover:bg-[#edeaf5] dark:text-white dark:hover:bg-[#2B234A]/70",
          "shadow-none hover:shadow-none hover:scale-102",
          "active:scale-100",
          "disabled:opacity-50"
        ].join(" "),
        link: [
          "text-[#8B5CF6] underline-offset-4 hover:underline shadow-none",
          "hover:scale-102",
          "active:scale-100",
          "disabled:opacity-50"
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
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
