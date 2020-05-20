import React, { Fragment, useContext } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useScrollTrigger, Zoom, Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { vh } from '../../@utils/useScrollPosition';
import { ThemeContext } from '../../contexts/ThemeContext';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import NightsStayIcon from '@material-ui/icons/NightsStay';

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
  },
  '@media only screen and (max-width: 600px)': {
    arrow: {
      bottom: theme.spacing(3),
      right: theme.spacing(3),
    },
    themeToggle: {
      bottom: theme.spacing(12),
      right: theme.spacing(3),
    },
  },
}));

const FloatingButtons = () => {
  const classes = useStyles();
  const { lightMode, toggleTheme } = useContext(ThemeContext);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: vh * 2.5,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fragment>
      <Zoom in={trigger}>
        <div onClick={toggleTheme} role='presentation' className={classes.themeToggle}>
          <Fab color='secondary' size='large'>
            {lightMode ? (
              <NightsStayIcon />
            ) : (
                <Brightness7Icon />
              )}
          </Fab>
        </div>
      </Zoom>
      <Zoom in={trigger} style={{ transitionDelay: trigger ? '300ms' : '0ms' }}>
        <div onClick={handleClick} role='presentation' className={classes.arrow}>
          <Fab color='secondary' size='large'>
            <KeyboardArrowUpIcon />
          </Fab>
        </div>
      </Zoom>
    </Fragment>
  );
}

export default FloatingButtons;