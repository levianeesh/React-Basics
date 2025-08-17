import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});// creating the context

export const ThemeProvider = ThemeContext.Provider; // making it possible that everyone is aware of it

export default function useTheme() {
  return useContext(ThemeContext); // using the state , adding and editing it
}
