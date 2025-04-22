
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Pillowed styling and playful shadow for all buttons
  "inline-flex items-center justify-center gap-2 rounded-full text-base font-semibold whitespace-nowrap shadow-[0_2px_14px_0_rgba(30,174,219,0.14)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: 
          "bg-[#231F39] text-white hover:bg-[#302A50] dark:bg-white dark:text-[#231F39] dark:hover:bg-zinc-100 " +
          "shadow-xl hover:shadow-2xl hover:scale-[1.06]",
        destructive: 
          "bg-red-500 text-white hover:bg-red-600 shadow-xl hover:shadow-2xl hover:scale-[1.06]",
        outline: 
          "border-2 border-[#231F39]/80 bg-white text-[#231F39] hover:bg-[#F9F8FC] dark:border-white/20 dark:bg-[#221c3d] dark:text-white dark:hover:bg-[#2B234A] shadow-xl hover:shadow-2xl hover:scale-[1.06]",
        secondary: 
          "bg-[#E5DEFF] text-[#231F39] hover:bg-[#f3eeff] dark:bg-[#302A50] dark:text-white dark:hover:bg-[#433B69] shadow-md hover:shadow-xl hover:scale-[1.04]",
        ghost: 
          "bg-transparent text-[#231F39] hover:bg-[#f1f1f9] dark:text-white dark:hover:bg-[#2B234A] shadow-none",
        link: 
          "text-[#8B5CF6] underline-offset-4 hover:underline shadow-none",
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
)

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

