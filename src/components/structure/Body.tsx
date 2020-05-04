import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// import { useScrollPosition, vh } from '../../@utils/useScrollPosition';
import Profile from '../segments/Profile';
import About from '../segments/About';
import Welcome from '../segments/Welcome';
// import ProgressBar from '../../components/utility/ProgressBar';

const useStyles = makeStyles((theme: Theme) => ({
  body: {
    height: '100%',
    width: '100vw',
  },
  buffer: {
    height: '100vh',
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const Body: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Welcome />
      <div className={classes.buffer} />
      <Grid container spacing={2} className={classes.content}>
        <Grid item xs={12}>
          <Profile />
        </Grid>
        <Grid item xs={12}>
          <About />
        </Grid>
      </Grid>
    </div>
  );
}

export default Body;