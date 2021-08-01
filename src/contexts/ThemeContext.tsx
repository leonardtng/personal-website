import React, { useState, ReactNode } from 'react';

export const defaultTheme = 'crimson';

export interface ThemeContextProps {
  theme: string;
  toggleTheme: (newTheme: string) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>(
  {
    theme: defaultTheme,
    toggleTheme: (newTheme: string) => { },
  }
);

interface ThemeContextProviderProps {
  children?: ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = (props) => {

  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || defaultTheme);
  const toggleTheme = (newTheme: string) => {
    if (newTheme !== defaultTheme) {
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    } else {
      setTheme(defaultTheme);
      localStorage.removeItem('theme');
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;