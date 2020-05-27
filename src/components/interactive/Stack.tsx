import React, { useState, useRef } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Tooltip, Zoom } from '@material-ui/core';
import ReactLogo from '../../assets/images/stack/react.png';
import TypescriptLogo from '../../assets/images/stack/typescript.png';
import PythonLogo from '../../assets/images/stack/python.png';
import DjangoLogo from '../../assets/images/stack/django.png';
import MySQLLogo from '../../assets/images/stack/mysql.png';
import MUILogo from '../../assets/images/stack/material-ui.png';
import { useScrollPosition, vh } from '../../@utils/useScrollPosition';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& div': {
      transition: 'transform 0.2s',
    },
    '& div:hover': {
      transform: 'scale(1.50)',
    },
  },
  logo: {
    height: 100,
    width: 100,
    margin: '20px 50px',
  },
  django: {
    height: 45.5,
    width: 100,
    margin: '47.25px 50px',

  },
}));

const Stack: React.FC = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState<boolean>(false)
  const stackRef = useRef<HTMLDivElement>(null);

  useScrollPosition(({ currPos }: any) => {
    currPos.y < vh * 0.85 ? setChecked(true) : setChecked(false);
  }, stackRef, false);

  return (
    <div className={classes.container} ref={stackRef}>
      <div>
        <Zoom in={checked} style={{ transitionDelay: checked ? '100ms' : '0ms' }}>
          <Tooltip title='React'>
            <img className={classes.logo} src={ReactLogo} alt='React' />
          </Tooltip>
        </Zoom>
      </div>
      <div>
        <Zoom in={checked} style={{ transitionDelay: checked ? '150ms' : '0ms' }}>
          <Tooltip title='Material-UI'>
            <img className={classes.logo} src={MUILogo} alt='Material-UI' />
          </Tooltip>
        </Zoom>
      </div>
      <div>
        <Zoom in={checked} style={{ transitionDelay: checked ? '200ms' : '0ms' }}>
          <Tooltip title='TypeScript'>
            <img className={classes.logo} src={TypescriptLogo} alt='TypeScript' />
          </Tooltip>
        </Zoom>
      </div>
      <div>
        <Zoom in={checked} style={{ transitionDelay: checked ? '250ms' : '0ms' }}>
          <Tooltip title='Python'>
            <img className={classes.logo} src={PythonLogo} alt='Python' />
          </Tooltip>
        </Zoom>
      </div>
      <div>
        <Zoom in={checked} style={{ transitionDelay: checked ? '300ms' : '0ms' }}>
          <Tooltip title='Django'>
            <img className={classes.django} src={DjangoLogo} alt='Django' />
          </Tooltip>
        </Zoom>
      </div>
      <div>
        <Zoom in={checked} style={{ transitionDelay: checked ? '350ms' : '0ms' }}>
          <Tooltip title='MySQL'>
            <img className={classes.logo} src={MySQLLogo} alt='MySQL' />
          </Tooltip>
        </Zoom>
      </div>
    </div>
  );
}

export default Stack;