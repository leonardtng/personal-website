import React, { Fragment } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useScrollTrigger, Zoom, Fab } from '@material-ui/core';
import { KeyboardArrowUpRounded, PaletteRounded } from '@material-ui/icons';
import { vh, vw } from '../../@utils/useScrollPosition';
import ThemeToggleButtons from './ThemeToggleButtons';
import TooltipBasicLayout from '../common/TooltipBasicLayout';

const useStyles = makeStyles((theme: Theme) => ({
  arrow: {
    position: 'fixed',
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  },
  themeToggle: {
    position: 'fixed',
    bottom: theme.spacing(15),
    right: theme.spacing(5),
    '& #theme-drawer': {
      position: 'absolute',
      textAlign: 'center',
      height: 0,
      width: theme.spacing(7),
      bottom: theme.spacing(7) / 2,
      zIndex: -1,
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      borderTopLeftRadius: theme.spacing(7) / 2,
      borderTopRightRadius: theme.spacing(7) / 2,
      '-webkit-transition': 'height 1s',
      transition: 'height 1s',
    },
    '&:hover': {
      '& #theme-drawer': {
        height: (theme.spacing(5) + 10 + 6) * 4 + 10 + theme.spacing(7) / 2,
        // (dimensions of toggle button + margin + border width) + margin from buttons to fab + half of fab dimensions
      }
    },
    '& .MuiFab-root': {
      background: 'linear-gradient(-45deg, #EC407A, #C77E23, #72B339, #66FCF1, #9fb3c8, #4086A1, #606D88, #17577e)',
      backgroundSize: '1200% 100%',
      animation: '$gradient-change 15s ease infinite',
      color: theme.palette.primary.contrastText
    }
  },
  '@keyframes gradient-change': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
  '@media only screen and (max-width: 600px)': {
    arrow: {
      bottom: theme.spacing(3),
      right: theme.spacing(3),
    },
    themeToggle: {
      bottom: theme.spacing(11),
      right: theme.spacing(3),
      '& #theme-drawer': {
        width: theme.spacing(6),
        bottom: theme.spacing(6) / 2,
        borderTopLeftRadius: theme.spacing(6) / 2,
        borderTopRightRadius: theme.spacing(6) / 2,
      },
      '&:hover': {
        '& #theme-drawer': {
          height: (theme.spacing(4) + 7 + 6) * 4 + 10 + theme.spacing(6) / 2,
        }
      }
    }
  },
}));

const FloatingButtons = () => {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: vh * 3,
  });

  const handleScrollClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fragment>
      <Zoom in={trigger}>
        <div role='presentation' className={classes.themeToggle}>
          <div id="theme-drawer">
            <ThemeToggleButtons size="medium" />
          </div>
          <Fab color='primary' size={vw < 600 ? 'medium' : 'large'}>
            <PaletteRounded />
          </Fab>
        </div>
      </Zoom>
      <Zoom in={trigger} style={{ transitionDelay: trigger ? '300ms' : '0ms' }}>
        <div onClick={handleScrollClick} role='presentation' className={classes.arrow}>
          <TooltipBasicLayout title='Scroll to Top' placement='top'>
            <Fab color='primary' size={vw < 600 ? 'medium' : 'large'}>
              <KeyboardArrowUpRounded />
            </Fab>
          </TooltipBasicLayout>
        </div>
      </Zoom>
    </Fragment>
  );
}

export default FloatingButtons;