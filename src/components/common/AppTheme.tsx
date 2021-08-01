import React, { useContext } from 'react';
import AppRouter from './AppRouter';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, Theme, ThemeOptions } from '@material-ui/core';
import { ThemeContext, ThemeContextProps } from '../../contexts/ThemeContext';
import CurrentPageViewProvider from '../../contexts/CurrentPageView';

const AppTheme: React.FC = () => {
  const { lightMode } = useContext<ThemeContextProps>(ThemeContext);

  const common: ThemeOptions = {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      }
    },
    typography: {
      fontFamily: "'Mulish', sans-serif !important",
      fontSize: 15,
    }
  };

  const light: Theme = createMuiTheme({
    palette: {
      primary: {
        main: '#17577e',
        contrastText: '#DCD6D2',
      },
      secondary: {
        main: '#4086A1',
        contrastText: '#f7f9fb',
      },
      background: {
        default: '#E7E7E4',
        paper: '#A5C9CD', //#63939d
      },
      text: {
        primary: '#121858',
        secondary:'rgba(0, 0, 0, 0.54)',
      },
    },
    ...common
  });

  // const green: Theme = createMuiTheme({
  //   palette: {
  //     primary: {
  //       main: '#72B339',
  //       contrastText: '#DCD6D2',
  //     },
  //     secondary: {
  //       main: '#606D88',
  //       contrastText: '#f7f9fb',
  //     },
  //     background: {
  //       default: '#01050D',
  //       paper: '#233044', //#63939d
  //     },
  //     text: {
  //       primary: '#fffffff2',
  //       secondary:'#ffffff80',
  //     },
  //   },
  //   ...common
  // });

  // const crimson: Theme = createMuiTheme({
  //   palette: {
  //     primary: {
  //       main: '#EC407A',
  //       contrastText: '#DCD6D2',
  //     },
  //     secondary: {
  //       main: '#606D88',
  //       contrastText: '#f7f9fb',
  //     },
  //     background: {
  //       default: '#030614',
  //       paper: '#233044', //#63939d
  //     },
  //     text: {
  //       primary: '#fffffff2',
  //       secondary:'#ffffff80',
  //     },
  //   },
  //   ...common
  // });

  const dark: Theme = createMuiTheme({
    palette: {
      primary: {
        main: '#66FCF1',
        contrastText: '#686c6c',
      },
      secondary: {
        main: '#9fb3c8',
        contrastText: '#010101',
      },
      background: {
        default: '#0B0C10',
        paper: '#1F2833',
      },
      text: {
        primary: '#C5C6C7',
        secondary: 'rgba(255, 255, 255, 0.5)',
      },
    },
    ...common
  });

  return (
    <CurrentPageViewProvider>
      <ThemeProvider theme={lightMode ? light : dark}>
        <AppRouter />
      </ThemeProvider>
    </CurrentPageViewProvider>
  );
}

export default AppTheme;