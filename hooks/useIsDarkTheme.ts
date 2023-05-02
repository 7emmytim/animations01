import { useTheme } from "next-themes";

export function useIsDarkTheme() {
  const { resolvedTheme } = useTheme();
  return resolvedTheme === "dark";
}
