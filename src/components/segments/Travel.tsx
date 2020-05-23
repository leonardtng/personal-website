import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import WorldMap from '../interactive/WorldMap';
import Gallery from '../interactive/Gallery';
import { info } from '../../@constants/info';

const useStyles = makeStyles((theme: Theme) => ({
  travel: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 100,
  },
  divider: {
    height: 2,
    width: '100%',
    backgroundColor: '#7F7F7F',
  },
  title: {
    margin: '50px 0 20px',
    '& h1': {
      fontWeight: 500,
    },
  },
  map: {
    marginTop: 50,
  },
  buffer: {
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    height: 50,
    width: '101%',
    transform: 'translate(-1px, -20px)'
  },
  '@media only screen and (max-width: 1200px)': {
    rect: {
      width: '80%',
    },
  },
  '@media only screen and (max-width: 600px)': {
    rect: {
      width: '100%',
    },
  },
}));

const Travel: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.travel}>
      <div className={classes.divider} />
      <Grid item xs={12} className={classes.title}>
        <Typography variant='h3' component='h1'>{info.travel.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body1' component='p'>{info.travel.description}</Typography>
      </Grid>
      <Grid item xs={1} sm={1} md={2} lg={2} />
      <Grid item xs={10} sm={10} md={8} lg={8} className={classes.map}>
        <WorldMap />
        <div className={classes.buffer} />
      </Grid>
      <Grid item xs={1} sm={1} md={2} lg={2} />
      <Grid item xs={12}>
        <Gallery />
      </Grid>
    </Grid>
  );
}

export default Travel;