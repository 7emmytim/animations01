import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      enableColorScheme
      defaultTheme="dark"
      storageKey="theme"
    >
      {children}
    </ThemeProvider>
  );
}
