import React, { useState, useContext } from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { useScrollPosition, vh } from '../../@utils/useScrollPosition';
import { Button, Grid, Hidden, IconButton, Avatar } from '@material-ui/core';
import { info } from '../../assets/data/info';
import { ThemeContext } from '../../contexts/ThemeContext';
import { HashLink as Link } from 'react-router-hash-link';
import { CurrentPageView } from '../../contexts/CurrentPageView';

const useStyles = makeStyles((theme: Theme) => ({
  appbar: {
    fontSize: 12,
    justifyContent: 'center',
    '& .MuiTypography-root': {
      color: theme.palette.secondary.contrastText,
    }
  },
  headerGroup: {
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    '& .MuiAvatar-root': {
      marginRight: 20,
    }
  },
  buttonGroup: {
    display: 'flex',
    textAlign: 'right',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& .MuiButton-root': {
      marginRight: 20,
    },
    '& a': {
      textDecoration: 'none',
    }
  }
}));

const NavBar: React.FC = () => {
  const classes = useStyles();
  const { lightMode } = useContext(ThemeContext);
  const { currentPage } = useContext(CurrentPageView);

  const [checked, setChecked] = useState<boolean>(false);

  useScrollPosition(({ prevPos, currPos }: any) => {
    currPos.y < prevPos.y && currPos.y > vh * 3 ? setChecked(true) : setChecked(false);
  });

  return (
    <Slide appear={false} direction='down' in={checked}>
      <AppBar className={classes.appbar} elevation={2}>
        <Toolbar>
          <Grid container spacing={0}>
            <Grid item xs={1}></Grid>
            <Grid item xs={4} className={classes.headerGroup}>
              <Hidden mdDown>
                <Avatar alt='Leonard Tng' src={lightMode ? info.profile.imageAvatar : info.profile.imageDarkAvatar}></Avatar>
                <Typography variant='h5' component='h1'>{currentPage}</Typography>
              </Hidden>
            </Grid>
            <Grid item xs={6} className={classes.buttonGroup}>
              <Hidden mdDown>
                <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <Typography variant='body1' component='h2'>Home</Typography>
                </Button>
                <Button>
                  <Link smooth to='#about'>
                    <Typography variant='body1' component='h2'>About</Typography>
                  </Link>
                </Button>
                <Button>
                  <Link smooth to='#timeline'>
                    <Typography variant='body1' component='h2'>Timeline</Typography>
                  </Link>
                </Button>
                <Button>
                  <Link smooth to='#abilities'>
                    <Typography variant='body1' component='h2'>Abilities</Typography>
                  </Link>
                </Button>
                <Button>
                  <Link smooth to='#travel'>
                    <Typography variant='body1' component='h2'>Travel</Typography>
                  </Link>
                </Button>
                <Button>
                  <Link smooth to='#contact'>
                    <Typography variant='body1' component='h2'>Get in Touch!</Typography>
                  </Link>
                </Button>
              </Hidden>
              <Hidden lgUp>
                <IconButton></IconButton>
              </Hidden>
            </Grid>
            <Grid item xs={1}></Grid>

          </Grid>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default NavBar