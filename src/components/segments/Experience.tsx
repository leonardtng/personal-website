import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import ProgressBar from '../utility/ProgressBar';

const useStyles = makeStyles((theme: Theme) => ({
  experience: {
    display: 'flex',
    alignItems: 'flex-start',
    textAlign: 'justify',
    height: '300%',
    marginBottom: 1000
  },
  divider: {
    height: 2,
    width: '100%',
    backgroundColor: '#7F7F7F',
  },
  title: {
    margin: '50px 0 80px',
    '& h1': {
      fontWeight: 500,
    },
  },
  progressBar: {
    position: 'sticky',
    top: 0
  },
  paragraph: {
    marginBottom: 50,
  },
}));

const Experience: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.experience}>
      <div className={classes.divider} />
      <Grid item xs={12} className={classes.title}>
        <Typography variant='h3' component='h1'>What I've been involved in</Typography>
      </Grid>
      <Grid item xs={1} className={classes.progressBar}>
        <ProgressBar />
      </Grid>
      <Grid item xs={11}>
        <Grid container spacing={0}>
          <Grid item xs={4}>

          </Grid>
          <Grid item xs={8} className={classes.paragraph}>
            <Typography variant='body1' component='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget. Vivamus at scelerisque libero. Ut odio eros, pretium vitae orci vel, sodales tempus arcu. Fusce ultricies fermentum libero, vel rhoncus mi mattis egestas. Donec suscipit mattis libero. Donec euismod eget elit eget dignissim. Proin viverra enim quis auctor ornare.</Typography>
          </Grid>
          <Grid item xs={4}>

          </Grid>
          <Grid item xs={8} className={classes.paragraph}>
            <Typography variant='body1' component='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget. Vivamus at scelerisque libero. Ut odio eros, pretium vitae orci vel, sodales tempus arcu. Fusce ultricies fermentum libero, vel rhoncus mi mattis egestas. Donec suscipit mattis libero. Donec euismod eget elit eget dignissim. Proin viverra enim quis auctor ornare.</Typography>
          </Grid>
          <Grid item xs={4}>

          </Grid>
          <Grid item xs={8} className={classes.paragraph}>
            <Typography variant='body1' component='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget. Vivamus at scelerisque libero. Ut odio eros, pretium vitae orci vel, sodales tempus arcu. Fusce ultricies fermentum libero, vel rhoncus mi mattis egestas. Donec suscipit mattis libero. Donec euismod eget elit eget dignissim. Proin viverra enim quis auctor ornare.</Typography>
          </Grid>
          <Grid item xs={4}>

          </Grid>
          <Grid item xs={8} className={classes.paragraph}>
            <Typography variant='body1' component='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget. Vivamus at scelerisque libero. Ut odio eros, pretium vitae orci vel, sodales tempus arcu. Fusce ultricies fermentum libero, vel rhoncus mi mattis egestas. Donec suscipit mattis libero. Donec euismod eget elit eget dignissim. Proin viverra enim quis auctor ornare.</Typography>
          </Grid>
          <Grid item xs={4}>

          </Grid>
          <Grid item xs={8} className={classes.paragraph}>
            <Typography variant='body1' component='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget. Vivamus at scelerisque libero. Ut odio eros, pretium vitae orci vel, sodales tempus arcu. Fusce ultricies fermentum libero, vel rhoncus mi mattis egestas. Donec suscipit mattis libero. Donec euismod eget elit eget dignissim. Proin viverra enim quis auctor ornare.</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Experience;