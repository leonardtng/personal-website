import React, { useState, useRef } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Fade } from '@material-ui/core';
import WorldMap from '../interactive/WorldMap';
import Gallery from '../interactive/Gallery';
import { info } from '../../assets/data/info';
import { useScrollPosition, vh } from '../../@utils/useScrollPosition';

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
    '& h2': {
      fontWeight: 500,
    },
  },
  map: {
    marginTop: 50,
    marginBottom: 60,
  },
  buffer: {
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    height: 50,
    width: '101%',
    transform: 'translate(-1px, -20px)'
  },
  caption: {
    marginBottom: 50,
    fontStyle: 'oblique',
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

  const [checked, setChecked] = useState<boolean>(false);
  const travelRef = useRef<HTMLImageElement>(null);

  useScrollPosition(({ currPos }: any) => {
    currPos.y < vh * 0.75 ? setChecked(true) : setChecked(false);
  }, travelRef, false);

  return (
    <Grid container spacing={0} className={classes.travel} ref={travelRef}>
      <div className={classes.divider} />
      <Grid item xs={12} className={classes.title}>
        <Typography variant='h3' component='h2'>{info.travel.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Fade in={checked} timeout={{ enter: 600, exit: 300 }}>
        <Typography variant='body1' component='p'>{info.travel.description}</Typography>
        </Fade>
      </Grid>
      <Grid item xs={1} sm={1} md={2} lg={2} />
      <Grid item xs={10} sm={10} md={8} lg={8} className={classes.map}>
        <WorldMap />
        {/* <div className={classes.buffer} /> */}
      </Grid>
      <Grid item xs={12} className={classes.caption}>
        <Typography variant='body1' component='p'>{info.travel.caption}</Typography>
      </Grid>
      <Grid item xs={1} sm={1} md={2} lg={2} />
      <Grid item xs={12}>
        <Gallery />
      </Grid>
    </Grid>
  );
}

export default Travel;