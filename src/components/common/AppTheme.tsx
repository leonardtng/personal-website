import React, { useContext } from 'react';
import AppRouter from './AppRouter';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, Theme, ThemeOptions } from '@material-ui/core';
import { ThemeContext, ThemeContextProps } from '../../contexts/ThemeContext';
import CurrentPageViewProvider from '../../contexts/CurrentPageView';

const AppTheme: React.FC = () => {
  const { theme } = useContext<ThemeContextProps>(ThemeContext);

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
      fontFamily: "'Inconsolata', sans-serif !important",
      fontSize: 15,
    },
    shape: {
      borderRadius: 8,
    }
  };

  const sky: Theme = createMuiTheme({
    palette: {
      primary: {
        main: '#17577e',
      },
      secondary: {
        main: '#4086A1',
      },
      background: {
        default: '#E7E7E4',
        paper: '#A5C9CD', //#63939d
      },
      text: {
        primary: '#121858',
        secondary:'rgba(0, 0, 0, 0.54)',
      },
      timeline: {
        fill: '#DCD6D2'
      },
      map: {
        series: '#c4c4c4'
      },
      navBar: {
        main: '#17577e',
        contrastText: '#fff'
      }
    },
    ...common
  });

  const crimson: Theme = createMuiTheme({
    palette: {
      primary: {
        main: '#EC407A',
      },
      secondary: {
        main: '#606D88',
      },
      background: {
        default: '#030614',
        paper: '#233044', //#63939d
      },
      text: {
        primary: '#fffffff2',
        secondary:'#ffffff80',
      },
      timeline: {
        fill: '#DCD6D2'
      },
      map: {
        series: '#233044'
      },
      navBar: {
        main: '#606D88',
        contrastText: '#fff'
      }
    },
    ...common
  });

  const electric: Theme = createMuiTheme({
    palette: {
      primary: {
        main: '#66FCF1',
      },
      secondary: {
        main: '#9fb3c8',
      },
      background: {
        default: '#0B0C10',
        paper: '#1F2833',
      },
      text: {
        primary: '#C5C6C7',
        secondary: 'rgba(255, 255, 255, 0.5)',
      },
      timeline: {
        fill: '#686c6c'
      },
      map: {
        series: '#1F2833'
      },
      navBar: {
        main: '#66FCF1',
        contrastText: 'rgba(0, 0, 0, 0.87)'
      }
    },
    ...common
  });

  const radioactive: Theme = createMuiTheme({
    palette: {
      primary: {
        main: '#72B339',
      },
      secondary: {
        main: '#C77E23',
      },
      background: {
        default: '#01050D',
        paper: '#010F17', //#63939d
      },
      text: {
        primary: '#ffffff',
        secondary:'#8492C4',
      },
      timeline: {
        fill: '#686c6c'
      },
      map: {
        series: '#010F17'
      },
      navBar: {
        main: '#C77E23',
        contrastText: '#fff'
      }
    },
    ...common
  });

  const getTheme = () => {
    switch(theme) {
      case ('crimson'):
        return crimson
      case ('electric'):
        return electric
      case ('radioactive'):
        return radioactive
      case ('sky'):
        return sky
      default:
        return crimson 
    }
  }

  return (
    <CurrentPageViewProvider>
      <ThemeProvider theme={getTheme()}>
        <AppRouter />
      </ThemeProvider>
    </CurrentPageViewProvider>
  );
}

export default AppTheme;