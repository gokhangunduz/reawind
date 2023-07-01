import { createContext } from "react";

export type Theme = "light" | "dark";

export interface IThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: "dark",
  setTheme: () => undefined,
});
