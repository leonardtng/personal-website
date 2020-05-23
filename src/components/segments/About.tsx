import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { info } from '../../@constants/info';

const useStyles = makeStyles((theme: Theme) => ({
  about: {
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
}));

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.about}>
      <div className={classes.divider} />
      <Grid item xs={12} className={classes.title}>
        <Typography variant='h3' component='h1'>{info.about.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body1' component='p'>{info.about.description}</Typography>
      </Grid>
    </Grid>
  );
}

export default About;


// I have a great interest in learning and approaches given tasks with a desire to succeed. With a mindset of curiosity and the eagerness to challenge myself, I work hard and is able to learn fast, given any new environment and work setting. This is such that I can have a deep understanding and knowledge of the field of work, ensuring results of high standard to be produced. Energetic and enthusiastic, I enjoy working with other people and takes joy in sharing ideas, engaging discussion, and motivating others.