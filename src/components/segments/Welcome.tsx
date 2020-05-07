import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Fade } from '@material-ui/core';
import { useScrollPosition, vh } from '../../@utils/useScrollPosition';

const useStyles = makeStyles((theme: Theme) => ({
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
}));

const Welcome: React.FC = () => {
  const classes = useStyles();

  const [hiState, setHiState] = useState({
    enter: false,
    sticky: true,
  });

  useScrollPosition(({ currPos }: any) => {
    currPos.y > vh && currPos.y < vh * 2.2 ? setHiState(prev => ({ ...prev, sticky: true })) : setHiState(prev => ({ ...prev, sticky: false }));
    currPos.y > vh * 0.9 && currPos.y < vh * 1.7 ? setHiState(prev => ({ ...prev, enter: true })) : setHiState(prev => ({ ...prev, enter: false }));
  });

  return (
    <div className={classes.hiBox} style={{ position: hiState.sticky ? 'sticky' : 'relative' }}>
      <Fade in={hiState.enter} timeout={{ enter: 1500, exit: 1500 }}>
        <Typography className={classes.hi} component='h2'>Hi</Typography>
      </Fade>
    </div>
  );
}

export default Welcome;