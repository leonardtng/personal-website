import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Hidden, Link } from '@material-ui/core';
import { MailRounded, GitHub, Instagram, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    height: '100%',
  },
  container: {
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,
    '& .MuiSvgIcon-root': {
      fontSize: '2rem',
      marginTop: 30,
      marginBottom: 30,
      marginRight: 10,
    },
    '& .MuiLink-root': {
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.text.primary,
    },
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.footer}>
      <Grid item xs={12} className={classes.container}>
        <Typography className={classes.section} variant='body1' component='p'>
          <Link href='mailto:theleonardtng@gmail.com' rel='noopener' aria-label='Email'>
            <MailRounded />
          </Link>
          <Link href='mailto:theleonardtng@gmail.com' rel='noopener' aria-label='Email'>
            <Hidden mdDown>theleonardtng@gmail.com</Hidden>
          </Link>
        </Typography>
        <Typography className={classes.section} variant='body1' component='p'>
          <Link href='https://github.com/leonardtng/' target='_blank' rel='noopener' aria-label='GitHub'>
            <GitHub />
          </Link>
          <Link href='https://github.com/leonardtng/' target='_blank' rel='noopener' aria-label='GitHub'>
            <Hidden mdDown>github.com/leonardtng</Hidden>
          </Link>
        </Typography>
        <Typography className={classes.section} variant='body1' component='p'>
          <Link href='https://www.linkedin.com/in/leonard-tng/' target='_blank' rel='noopener' aria-label='LinkedIn'>
            <LinkedIn />
          </Link>
          <Link href='https://www.linkedin.com/in/leonard-tng/' target='_blank' rel='noopener' aria-label='LinkedIn'>
            <Hidden mdDown>linkedin.com/in/leonard-tng</Hidden>
          </Link>
        </Typography>
        <Typography className={classes.section} variant='body1' component='p'>
          <Link href='https://www.instagram.com/leonard.tng/' target='_blank' rel='noopener' aria-label='Instagram'>
            <Instagram />
          </Link>
          <Link href='https://www.instagram.com/leonard.tng/' target='_blank' rel='noopener' aria-label='Instgram'>
            <Hidden mdDown>instagram.com/leonard.tng</Hidden>
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;


