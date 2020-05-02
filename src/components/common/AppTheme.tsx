import React, { useContext } from 'react';
import AppRouter from './AppRouter';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import { ThemeContext } from '../../contexts/ThemeContext';

const AppTheme: React.FC = () => {
  const currentThemeContext = useContext(ThemeContext);

  const theme = createMuiTheme({
    palette: {
      type: currentThemeContext.lightMode ? 'light' : 'dark',
      primary: {
        main: currentThemeContext.lightMode ? '#12CBD6' : '#232426',
      },
      secondary: {
        main: currentThemeContext.lightMode ? '#ffffff' : '#12CBD6',
      },
      background: {
        default: currentThemeContext.lightMode ? '#EBECF0' : '#1F1F1F',
      },
      text: {
        primary: currentThemeContext.lightMode ? '#666666' : '#ffffff',
        secondary: currentThemeContext.lightMode ? '#999999' : '#111111',
      },
    },
    typography: {
      fontFamily: "'American Typewriter', sans-serif"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default AppTheme;