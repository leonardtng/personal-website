import React, { ReactElement } from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  customTooltip: {
    fontSize: 12,
    borderRadius: 8,
    padding: 8,
  }
}));

interface TooltipBasicLayoutProps {
  children: ReactElement<any, any>;
  title: string;
  placement?:
  'top'
  | 'bottom'
  | 'bottom-end'
  | 'bottom-start'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start';
  additionalStyles?: string;
}

const TooltipBasicLayout: React.FC<TooltipBasicLayoutProps> = (props: TooltipBasicLayoutProps) => {
  const classes = useStyles()

  return (
    <Tooltip title={props.title} placement={props.placement} classes={{ tooltip: `${classes.customTooltip} ${props.additionalStyles}` }}>
      {props.children}
    </Tooltip>
  )
}

export default TooltipBasicLayout
