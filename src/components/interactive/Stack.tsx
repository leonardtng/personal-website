import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Zoom } from '@material-ui/core';
import ReactLogo from '../../assets/images/stack/react.png';
import TypescriptLogo from '../../assets/images/stack/typescript.png';
import PythonLogo from '../../assets/images/stack/python.png';
import DjangoLogo from '../../assets/images/stack/django.png';
import DockerLogo from '../../assets/images/stack/docker.png';
import MySQLLogo from '../../assets/images/stack/mysql.png';
import TooltipBasicLayout from '../common/TooltipBasicLayout';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    cursor: 'pointer',
    '& div': {
      transition: 'transform 0.3s',
    },
    '& div:hover': {
      transform: 'scale(1.20)',
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

interface StackProps {
  checked: boolean;
}

const Stack: React.FC<StackProps> = (props: StackProps) => {
  const classes = useStyles();
  const baseDelay = 400

  return (
    <div className={classes.container}>
      <div>
        <Zoom in={props.checked} style={{ transitionDelay: props.checked ? `${baseDelay}ms` : '0ms' }}>
          <TooltipBasicLayout title='React'>
            <img className={classes.logo} src={ReactLogo} alt='React' />
          </TooltipBasicLayout>
        </Zoom>
      </div>
      <div>
        <Zoom in={props.checked} style={{ transitionDelay: props.checked ? `${baseDelay + 50}ms` : '0ms' }}>
          <TooltipBasicLayout title='TypeScript'>
            <img className={classes.logo} src={TypescriptLogo} alt='TypeScript' />
          </TooltipBasicLayout>
        </Zoom>
      </div>
      <div>
        <Zoom in={props.checked} style={{ transitionDelay: props.checked ? `${baseDelay + 50 * 2}ms` : '0ms' }}>
          <TooltipBasicLayout title='Python'>
            <img className={classes.logo} src={PythonLogo} alt='Python' />
          </TooltipBasicLayout>
        </Zoom>
      </div>
      <div>
        <Zoom in={props.checked} style={{ transitionDelay: props.checked ? `${baseDelay + 50 * 3}ms` : '0ms' }}>
          <TooltipBasicLayout title='Django'>
            <img className={classes.django} src={DjangoLogo} alt='Django' />
          </TooltipBasicLayout>
        </Zoom>
      </div>
      <div>
        <Zoom in={props.checked} style={{ transitionDelay: props.checked ? `${baseDelay + 50 * 4}ms` : '0ms' }}>
          <TooltipBasicLayout title='Docker'>
            <img className={classes.logo} src={DockerLogo} alt='MySQL' />
          </TooltipBasicLayout>
        </Zoom>
      </div>
      <div>
        <Zoom in={props.checked} style={{ transitionDelay: props.checked ? `${baseDelay + 50 * 5}ms` : '0ms' }}>
          <TooltipBasicLayout title='MySQL'>
            <img className={classes.logo} src={MySQLLogo} alt='MySQL' />
          </TooltipBasicLayout>
        </Zoom>
      </div>
    </div>
  );
}

export default Stack;