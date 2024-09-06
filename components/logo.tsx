"use client"

import { useTheme } from "next-themes"
import Image from "next/image"

interface LogoProps {
  className?: string
}

export function Logo({ className = "" }: LogoProps) {
  const { resolvedTheme } = useTheme()

  return (
    <Image
      src={
        resolvedTheme === "dark"
          ? "/assets/logo-light-v11.svg"
          : "/assets/logo-light-v112.svg"
      }
      alt="Logo"
      width={150}
      height={50}
      className={`${className}`}
      priority
    />
  )
}
