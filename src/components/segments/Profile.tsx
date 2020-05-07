import React, { useState, useRef } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import ProfileImage from '../../assets/images/profile.png';
import { Grid, Slide, Typography } from '@material-ui/core';
import { useScrollPosition, vh } from '../../@utils/useScrollPosition';
import Map from '../panels/Map';

const useStyles = makeStyles((theme: Theme) => ({
  profile: {
    display: 'flex',
    alignItems: 'center',
    overflowX: 'hidden',
  },
  rect: {
    height: 15,
    width: '80%',
    backgroundColor: theme.palette.secondary.main,
  },
  rectLeft: {
    '& div': {
      float: 'left',
    }
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      maxWidth: '50vw',
    },
  },
  rectRight: {
    '& div': {
      float: 'right',
    }
  },
  description: {
    marginTop: 50,
    '& .MuiTypography-subtitle1': {
      fontSize: 20,
    },
  },
  map: {
    marginTop: 50,
  },
  buffer: {
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    height: 50,
    width: '100%',
    transform: 'translateY(-20px)'
  },
  '@media only screen and (max-width: 1200px)': {
    rect: {
      width: '80%',
    },
  },
  '@media only screen and (max-width: 800px)': {
    rect: {
      width: '100%',
    },
  },
}));

const Profile: React.FC = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState<boolean>(false)
  const profileRef: any = useRef();

  useScrollPosition(({ currPos }: any) => {
    currPos.y < vh * 0.55 && currPos.y > 0 ? setChecked(true) : setChecked(false);
  }, profileRef, false);

  return (
    <Grid container spacing={0} className={classes.profile}>
      <Grid item xs={2} sm={2} md={3} lg={4} className={classes.rectLeft}>
        <Slide in={checked} direction='right'>
          <div className={classes.rect} />
        </Slide>
      </Grid>
      <Grid item xs={8} sm={8} md={6} lg={4} className={classes.image} >
        <img src={ProfileImage} alt='Leonard' ref={profileRef} />
      </Grid>
      <Grid item xs={2} sm={2} md={3} lg={4} className={classes.rectRight}>
        <Slide in={checked} direction='left'>
          <div className={classes.rect} />
        </Slide>
      </Grid>
      <Grid item xs={12} className={classes.description}>
        <Typography variant='subtitle1'>I'm an imaginative and fun-loving Software Engineer, <br /> based in Singapore</Typography>
      </Grid>
      <Grid item xs={1} sm={1} md={2} lg={2}/>
      <Grid item xs={10} sm={10} md={8} lg={8} className={classes.map}>
        <Map />
        <div className={classes.buffer} />
      </Grid>
      <Grid item xs={1} sm={1} md={2} lg={2}/>
    </Grid>
  );
}

export default Profile;