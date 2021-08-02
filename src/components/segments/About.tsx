import React, { useState, useRef, useContext } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Grow, Button } from '@material-ui/core';
import { info } from '../../assets/data/info';
import { GitHub } from '@material-ui/icons';
import { useScrollPosition, vh } from '../../@utils/useScrollPosition';
import { CurrentPageView, PageContextProps } from '../../contexts/CurrentPageView';
import { CONTAINER_OFFSET } from '../../@constants';
import CodeMemoji from '../../assets/images/section-memoji/code-memoji.png';
import TitleContainer from '../interactive/TitleContainer';

const useStyles = makeStyles((theme: Theme) => ({
  about: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 50,
  },
  divider: {
    height: 2,
    width: '100%',
    backgroundColor: '#7F7F7F',
  },
  description: {
    paddingBottom: 20,
  },
  button: {
    marginTop: 12,
    backgroundColor: '#24292e',
    color: '#fafbfc',
    '&:hover': {
      backgroundColor: '#24292eee',
    }
  }
}));

const About: React.FC = () => {
  const classes = useStyles();
  const { setCurrentPage } = useContext<PageContextProps>(CurrentPageView);

  const [checked, setChecked] = useState<boolean>(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const containerHeight = aboutRef.current?.clientHeight;

  useScrollPosition(({ currPos }: any) => {
    currPos.y < vh * 0.75 ? setChecked(true) : setChecked(false);
    if (containerHeight) {
      if (CONTAINER_OFFSET > currPos.y && currPos.y > -containerHeight + CONTAINER_OFFSET) setCurrentPage('About');
    };
  }, aboutRef, false);

  return (
    <Grid container spacing={3} className={classes.about} ref={aboutRef} id='about'>
      <div className={classes.divider} />
      <Grid item xs={12}>
        <TitleContainer title={info.about.title} image={CodeMemoji} />
      </Grid>
      <Grid item xs={12} className={classes.description}>
        <Grow in={checked} timeout={{ enter: 600, exit: 300 }}>
          <Typography variant='body1' component='p'>{info.about.description}</Typography>
        </Grow>
      </Grid>
      <Grid item xs={12} className={classes.description}>
        <Grow in={checked} timeout={{ enter: 600, exit: 300 }} style={{ transitionDelay: checked ? '125ms' : '0ms' }}>
          <Typography variant='body1' component='p'>{info.about.descriptionSecondPart}</Typography>
        </Grow>
      </Grid>
      <Grid item xs={12}>
        <Grow in={checked} timeout={{ enter: 600, exit: 300 }} style={{ transitionDelay: checked ? '250ms' : '0ms' }}>
          <Button
            variant='contained'
            color='secondary'
            className={classes.button}
            startIcon={<GitHub />}
            href='https://github.com/leonardtng'
            target='_blank'
            rel="noopener"
            aria-label="GitHub Personal Website"
          >
            GitHub
          </Button>
        </Grow>
      </Grid>
    </Grid>
  );
}

export default About;
