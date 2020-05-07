import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  bar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 30,
  },
  circle: {
    position: 'relative',
    marginTop: -8,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '100%',
    height: 50,
    width: 50,
  },
  rect: {
    position: 'relative',
    marginTop: -8,
    backgroundColor: theme.palette.secondary.main,
    height: 80,
    width: 15,
  }
}));

interface ProgressBarProps {
  aboutPos: number;
}

const ProgressBar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.bar}>
      <div className={classes.circle} />
      <div className={classes.rect} />
      <div className={classes.circle} />
      <div className={classes.rect} />
      <div className={classes.circle} />
      <div className={classes.rect} />
      <div className={classes.circle} />
      <div className={classes.rect} />
      <div className={classes.circle} />
    </div>
  );
}

export default ProgressBar;