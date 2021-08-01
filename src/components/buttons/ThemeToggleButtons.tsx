import React, { Fragment, useContext } from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { Avatar, ButtonBase } from '@material-ui/core';
import { ThemeContext } from '../../contexts/ThemeContext';
import TooltipBasicLayout from '../common/TooltipBasicLayout';

const useStyles = makeStyles<Theme, ThemeToggleButtonsProps>((theme: Theme) => ({
  toggleButton: {
    borderRadius: '50%',
    margin: props => props.size === 'small' ? '0 2px' : '10px auto 0',
    '& .MuiAvatar-root': {
      height: props => props.size === 'small' ? theme.spacing(3) : theme.spacing(5),
      width: props => props.size === 'small' ? theme.spacing(3) : theme.spacing(5),
    },
  },
  unselected: {
    border: '3px solid transparent'
  },
  selected: {
    border: '3px solid #ffffff'
  },
  crimson: {
    background: 'linear-gradient(135deg, #EC407A 50%, #606D88 50%)',
  },
  electric: {
    background: 'linear-gradient(135deg, #66FCF1 50%, #9fb3c8 50%)',
  },
  radioactive: {
    background: 'linear-gradient(135deg, #72B339 50%, #C77E23 50%)',
  },
  sky: {
    background: 'linear-gradient(135deg, #17577e 50%, #E7E7E4 50%)',
  },
  '@media only screen and (max-width: 600px)': {
    toggleButton: {
      margin: props => props.size === 'small' ? '0 2px' : '7px auto 0',
      '& .MuiAvatar-root': {
        height: props => props.size === 'small' ? theme.spacing(3) : theme.spacing(4),
        width: props => props.size === 'small' ? theme.spacing(3) : theme.spacing(4),
      },
    },
  },
}));

interface ThemeToggleButtonsProps {
  size: 'small' | 'medium';
}

const ThemeToggleButtons: React.FC<ThemeToggleButtonsProps> = (props: ThemeToggleButtonsProps) => {
  const classes = useStyles(props);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Fragment>
      <TooltipBasicLayout title="Crimson" placement="top">
        <ButtonBase
          onClick={() => toggleTheme('crimson')}
          className={`${classes.toggleButton} ${theme === 'crimson' ? classes.selected : classes.unselected}`}
        >
          <Avatar className={classes.crimson}> </Avatar>
        </ButtonBase>
      </TooltipBasicLayout>
      <TooltipBasicLayout title="Electric" placement="top">
        <ButtonBase
          onClick={() => toggleTheme('electric')}
          className={`${classes.toggleButton} ${theme === 'electric' ? classes.selected : classes.unselected}`}
        >
          <Avatar className={classes.electric}> </Avatar>
        </ButtonBase>
      </TooltipBasicLayout>
      <TooltipBasicLayout title="Radioactive" placement="top">
        <ButtonBase
          onClick={() => toggleTheme('radioactive')}
          className={`${classes.toggleButton} ${theme === 'radioactive' ? classes.selected : classes.unselected}`}
        >
          <Avatar className={classes.radioactive}> </Avatar>
        </ButtonBase>
      </TooltipBasicLayout>
      <TooltipBasicLayout title="Sky" placement="top">
        <ButtonBase
          onClick={() => toggleTheme('sky')}
          className={`${classes.toggleButton} ${theme === 'sky' ? classes.selected : classes.unselected}`}
        >
          <Avatar className={classes.sky}> </Avatar>
        </ButtonBase>
      </TooltipBasicLayout>
    </Fragment>
  )
}

export default ThemeToggleButtons
