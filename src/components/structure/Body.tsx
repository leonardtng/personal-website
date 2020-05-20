import React, { Fragment } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
// import { useScrollPosition, vh } from '../../@utils/useScrollPosition';
import Profile from '../segments/Profile';
import About from '../segments/About';
import Welcome from '../segments/Welcome';
import Experience from '../segments/Experience';
import Abilities from '../segments/Abilities';
import FloatingButtons from '../buttons/FloatingButtons';
import Travel from '../segments/Travel';
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    '& h1': {
      color: theme.palette.primary.main,
    }
  },
}));

interface ResponsiveWrapperProps {
  children: React.ReactNode;
}

const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = (props: ResponsiveWrapperProps) => {
  return (
    <Fragment>
      <Grid item xs={1} sm={1} md={2} lg={2} />
      <Grid item xs={10} sm={10} md={8} lg={8}>
        {props.children}
      </Grid>
      <Grid item xs={1} sm={1} md={2} lg={2} />
    </Fragment>
  );
}

const Body: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Welcome />

      <div className={classes.buffer} />
      <Grid container spacing={2} className={classes.content}>

        <ResponsiveWrapper>
          <Profile />
        </ResponsiveWrapper>

        <ResponsiveWrapper>
          <About />
        </ResponsiveWrapper>

        <ResponsiveWrapper>
          <Experience />
        </ResponsiveWrapper>

        <ResponsiveWrapper>
          <Abilities />
        </ResponsiveWrapper>

        <ResponsiveWrapper>
          <Travel />
        </ResponsiveWrapper>

        <FloatingButtons />
      </Grid>
    </div>
  );
}

export default Body;