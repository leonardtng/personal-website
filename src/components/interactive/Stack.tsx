import React, { useState, useRef } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Tooltip, Zoom } from '@material-ui/core';
import ReactLogo from '../../assets/images/stack/react.png';
import HTMLLogo from '../../assets/images/stack/html.png';
import CSSLogo from '../../assets/images/stack/css.png';
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
  css: {
    height: 100,
    width: 71.6875,
    margin: '20px 50px',
  },
}));



const Stack: React.FC = () => {
  const classes = useStyles();


  const [checked, setChecked] = useState<boolean>(false)
  const stackRef: any = useRef();

  useScrollPosition(({ currPos }: any) => {
    currPos.y < vh * 0.85 ? setChecked(true) : setChecked(false);
  }, stackRef, false);

  return (
    <div className={classes.container} ref={stackRef}>
      <div>
        <Zoom in={checked} style={{ transitionDelay: '100ms' }}>
          <Tooltip title='React'>
            <img className={classes.logo} src={ReactLogo} alt='react' />
          </Tooltip>
        </Zoom>
      </div>
      <div>
        <Zoom in={checked} style={{ transitionDelay: '150ms' }}>
          <Tooltip title='Material-UI'>
            <img className={classes.logo} src={MUILogo} alt='material-ui' />
          </Tooltip>
        </Zoom>
      </div>
      <div>
        <Zoom in={checked} style={{ transitionDelay: '200ms' }}>
          <Tooltip title='HTML 5'>
            <img className={classes.logo} src={HTMLLogo} alt='html' />
          </Tooltip>
        </Zoom>
      </div>
      <div>
        <Zoom in={checked} style={{ transitionDelay: '250ms' }}>
          <Tooltip title='CSS 3'>
            <img className={classes.css} src={CSSLogo} alt='css' />
          </Tooltip>
        </Zoom>
      </div>
      <div>
        <Zoom in={checked} style={{ transitionDelay: '300ms' }}>
          <Tooltip title='Django'>
            <img className={classes.django} src={DjangoLogo} alt='django' />
          </Tooltip>
        </Zoom>
      </div>
      <div>
        <Zoom in={checked} style={{ transitionDelay: '350ms' }}>
          <Tooltip title='MySQL'>
            <img className={classes.logo} src={MySQLLogo} alt='mysql' />
          </Tooltip>
        </Zoom>
      </div>
    </div>
  );
}

export default Stack;