import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Fade } from '@material-ui/core';
import { useScrollPosition } from '../../@utils/useScrollPosition';
import Profile from '../segments/Profile';

const useStyles = makeStyles((theme: Theme) => ({
  body: {
    height: '100%',
    width: '100vw',
  },
  hiBox: {
    height: '100vh',
    width: '100vw',
    top: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  hi: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#111111',
  },
  buffer: {
    height: '100vh',
  },
  content: {
    height: '200vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const Body: React.FC = () => {
  const classes = useStyles();

  const [hiState, setHiState] = useState({
    enter: false,
    sticky: false,
  });

  const vh = document.documentElement.clientHeight;

  useScrollPosition(({ currPos }: any) => {
    currPos.y > vh && currPos.y < vh * 2.2 ? setHiState(prev => ({ ...prev, sticky: true})) : setHiState(prev => ({ ...prev, sticky: false}));
    currPos.y > vh * 0.7 && currPos.y < vh * 1.7 ? setHiState(prev => ({ ...prev, enter: true})) : setHiState(prev => ({ ...prev, enter: false}));
  });

  return (
    <div className={classes.body}>
      <div className={classes.hiBox} style={{ position: hiState.sticky ? 'sticky' : 'relative' }}>
        <Fade in={hiState.enter} timeout={{ enter: 1500, exit: 1500 }}>
          <Typography className={classes.hi} component='h2'>Hi</Typography>
        </Fade>
      </div>
      <div className={classes.buffer} />
      <Grid container spacing={0} className={classes.content}>
        <Grid item xs={12}>
          <Profile />
        </Grid>
      </Grid>

    </div>
  );
}

export default Body;