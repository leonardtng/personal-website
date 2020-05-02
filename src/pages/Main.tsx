import React, { Fragment } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Heading from '../components/structure/Heading';

const useStyles = makeStyles((theme: Theme) => ({
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh',
    width: '100vw',
  },
}));

const Main: React.FC = () => {
  const classes = useStyles();

  return (
    <Fragment >
      <Heading />
      <div className={classes.body}>
        Body
      </div>
    </Fragment>
  );
}

export default Main;