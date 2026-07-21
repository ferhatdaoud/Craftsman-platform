// frontend/app/components/theme-provider.tsx
"use client"; // This component needs to run on the client-side

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

// This is a wrapper component that provides the dark/light theme context to your app
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
