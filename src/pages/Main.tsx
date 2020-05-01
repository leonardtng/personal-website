import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Cover from '../assets/images/cover.jpg';

const useStyles = makeStyles((theme: Theme) => ({
  app: {
    height: '100vh',
    backgroundImage: `url(${Cover})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
  },
  header: {
    height: '100vh'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    height: '100vh',
    width: '100vw',
  },
}));

const Main: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <header className={classes.header}>

      </header>
      <body className={classes.body}>

      </body>

    </div>
  );
}

export default Main;