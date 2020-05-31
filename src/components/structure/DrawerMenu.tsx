import React, { useContext } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Drawer, List, Divider, ListItem, Typography, Avatar } from '@material-ui/core';
import { ThemeContext } from '../../contexts/ThemeContext';
import { info } from '../../assets/data/info';
import { HashLink as Link } from 'react-router-hash-link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      flexShrink: 0,
      textAlign: 'left',
      '& .MuiAvatar-root': {
        margin: 20,
      },
      '& .MuiDivider-root': {
        backgroundColor: theme.palette.secondary.main,
      },
      '& .MuiTypography-root': {
        color: theme.palette.primary.main,
      },
      '& a': {
        textDecoration: 'none',
      },
    },
    drawerPaper: {
      width: '30vw',
    },
    '@media (max-width: 600px)': {
      drawerPaper: {
        width: '60vw',
      },
    }
  }),
);

interface DraweMenuProps {
  open: boolean;
  setOpen: () => void;
}

const DrawerMenu: React.FC<DraweMenuProps> = (props: DraweMenuProps) => {
  const classes = useStyles();
  const { lightMode } = useContext(ThemeContext);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="temporary"
        onClose={props.setOpen}
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Avatar alt='Leonard Tng' src={lightMode ? info.profile.imageAvatar : info.profile.imageDarkAvatar}></Avatar>
        <Divider />
        <List>
          <ListItem onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Typography variant='body1' component='h2'>Home</Typography>
          </ListItem>
          <Link smooth to='#about'>
            <ListItem>
              <Typography variant='body1' component='h2'>About</Typography>
            </ListItem>
          </Link>
          <Link smooth to='#timeline'>
            <ListItem>
              <Typography variant='body1' component='h2'>Timeline</Typography>
            </ListItem>
          </Link>
          <Link smooth to='#abilities'>
            <ListItem>
              <Typography variant='body1' component='h2'>Abilities</Typography>
            </ListItem>
          </Link>
          <Link smooth to='#travel'>
            <ListItem>
              <Typography variant='body1' component='h2'>Travel</Typography>
            </ListItem>
          </Link>
          <Link smooth to='#contact'>
            <ListItem>
              <Typography variant='body1' component='h2'>Get in Touch!</Typography>
            </ListItem>
          </Link>
        </List>
      </Drawer >
    </div>
  )
}

export default DrawerMenu