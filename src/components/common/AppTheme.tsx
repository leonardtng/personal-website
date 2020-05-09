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
        main: currentThemeContext.lightMode ? '#17577e' : '#66FCF1',
        contrastText: currentThemeContext.lightMode ? '#cccccc' : '#ffffff'
      },
      secondary: {
        main: currentThemeContext.lightMode ? '#44546b' : '#45A29E',
        contrastText: currentThemeContext.lightMode ? '#f7f9fb' : '#010101',
      },
      background: {
        default: currentThemeContext.lightMode ? '#baaaa0' : '#0B0C10',
        paper: currentThemeContext.lightMode ? '#63939d' : '#1F2833',
      },
      text: {
        primary: currentThemeContext.lightMode ? '#121858' : '#C5C6C7',
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