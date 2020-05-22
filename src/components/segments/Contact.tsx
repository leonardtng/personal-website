import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const useStyles = makeStyles((theme: Theme) => ({
  contact: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
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
  subtitle: {
    marginBottom: 30,
  },
  button: {
    margin: 50
  },
}));

const Contact: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.contact}>
      <div className={classes.divider} />
      <Grid item xs={12} className={classes.title}>
        <Typography variant='h3' component='h1'>What I can do for you</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.subtitle} variant='h5' component='h2'>I'm currently available for internships.</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body1' component='p'>But of course, if you want to work together, find out more, or just wanna chill and chat, </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<EmojiPeopleIcon />}
        >
          Contact Me!
        </Button>
      </Grid>
      {/* <Grid item xs={12}>
        <Typography variant='body1' component='p'>Or you can send me a DM on these platforms too, and we can get in touch! </Typography>
      </Grid> */}
    </Grid>
  );
}

export default Contact;