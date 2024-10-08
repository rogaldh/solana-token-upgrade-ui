import React from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const buttonVariants = cva(
  "inline-flex items-center justify-center outline-2 outline-offset-2 transition-colors rounded bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-500",
  {
    variants: {
      size: {
        md: "text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
)

type ButtonProps = VariantProps<typeof buttonVariants> &
  React.ComponentPropsWithoutRef<"button">

export function Button({ className, size, ...props }: ButtonProps) {
  const cn = buttonVariants({ size })

  return (
    <button
      className={twMerge(className, cn)}
      role="button"
      type="button"
      {...props}
    />
  )
}
