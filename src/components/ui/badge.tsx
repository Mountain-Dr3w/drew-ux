
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80 px-3 py-1.5",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1.5",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 px-3 py-1.5",
        outline: "text-foreground bg-transparent border px-3 py-1.5",
        client: "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md px-4 py-2 shadow-sm hover:shadow-md transition-shadow",
        subtle: "border-none px-5 py-2 bg-zinc-200/90 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-100 shadow-none font-medium",
        strategist: "border-transparent bg-[#6E59A5] text-white hover:bg-[#6E59A5]/80 px-3 py-1.5"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
