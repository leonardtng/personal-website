import React, { useState } from 'react';

export const ThemeContext = React.createContext(
  {
    lightMode: true,
    toggleTheme: () => { },
  }
)

const ThemeContextProvider: React.FC = (props) => {

  const [lightMode, setlightMode] = useState<boolean>(!(localStorage.getItem('theme') === 'dark'));
  const toggleTheme = () => {
    if (lightMode) {
      setlightMode(false);
      localStorage.setItem('theme', 'dark');
    } else {
      setlightMode(true);
      localStorage.removeItem('theme');
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        lightMode: lightMode,
        toggleTheme: toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;