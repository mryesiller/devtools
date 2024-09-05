// src/components/Providers.tsx
"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import React from "react"

export interface ProvidersProps {
  children: React.ReactNode
  themeProps: Omit<ThemeProviderProps, "children">
}

const Providers: React.FC<ProvidersProps> = ({ children, themeProps }) => {
  return <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
}

export default Providers
