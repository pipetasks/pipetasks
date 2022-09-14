import { createContext, ReactNode, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { dark, light } from '../assets/styles/theme';

interface ThemeContextProviderProps {
  children: ReactNode;
}

interface ThemeContextProps {
  theme: DefaultTheme;
  toggleTheme(): void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.name === 'light' ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  return context;
}
