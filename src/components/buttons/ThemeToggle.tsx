import React, { Fragment, useState } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import BrushIcon from '@material-ui/icons/Brush';
import ThemeToggleDialog from '../interactive/ThemeToggleButtons';

const ThemeToggle: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <Tooltip title="Paint this website!">
        <IconButton size="small" onClick={() => setOpen(true)} color="primary">
          <BrushIcon />
        </IconButton>
      </Tooltip>
    </Fragment>
  );
};

export default ThemeToggle