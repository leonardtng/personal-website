import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  about: {
    width: '50vw',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    marginBottom: '1000px',
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
  '@media only screen and (max-width: 1200px)': {
    about: {
      width: '60vw',
    },
  },
  '@media only screen and (max-width: 800px)': {
    about: {
      width: '90vw',
    },
  },
}));



const About: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.about}>
      <div className={classes.divider} />
      <Grid item xs={12} className={classes.title}>
        <Typography variant='h1' component='h1'>About</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body1' component='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget. Vivamus at scelerisque libero. Ut odio eros, pretium vitae orci vel, sodales tempus arcu. Fusce ultricies fermentum libero, vel rhoncus mi mattis egestas. Donec suscipit mattis libero. Donec euismod eget elit eget dignissim. Proin viverra enim quis auctor ornare.</Typography>
      </Grid>
    </Grid>
  );
}

export default About;


// I have a great interest in learning and approaches given tasks with a desire to succeed. With a mindset of curiosity and the eagerness to challenge myself, I work hard and is able to learn fast, given any new environment and work setting. This is such that I can have a deep understanding and knowledge of the field of work, ensuring results of high standard to be produced. Energetic and enthusiastic, I enjoy working with other people and takes joy in sharing ideas, engaging discussion, and motivating others.