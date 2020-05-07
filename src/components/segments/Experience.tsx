import React, { useRef, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Slide } from '@material-ui/core';
import { useScrollPosition, vh } from '../../@utils/useScrollPosition';

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  experience: {
    display: 'flex',
    alignItems: 'flex-start',
    textAlign: 'justify',
    height: '300%',
    marginBottom: 1000
  },
  divider: {
    height: 2,
    width: '100%',
    backgroundColor: '#7F7F7F',
  },
  title: {
    margin: '50px 0 80px',
    '& h1': {
      fontWeight: 500,
    },
  },
  container: {
    // overflowX: 'hidden',
    paddingBottom: 50,
    width: '90%',
    textAlign: 'center',
  },
  circle: {
    position: 'absolute',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '50%',
    transform: 'translate(-15px, -10px)',
    height: 30,
    width: 30,
  },
  timeline: {
    '& ul': {
      padding: 0,
      '& li': {
        listStyleType: 'none',
        position: 'relative',
        width: 6,
        margin: '0 auto',
        paddingTop: 50,
        background: theme.palette.secondary.main,
        '&:after': {
          content: '""',
          position: 'absolute',
          left: '50%',
          bottom: 0,
          transform: 'translateX(-50%)',
          width: 30,
          height: 30,
          borderRadius: '50%',
        },
        '&:nth-child(odd) div': {
          left: '2.3vw',
          '&:before': {
            left: -15,
            borderWidth: '8px 16px 8px 0',
            borderColor: 'transparent #02BABC transparent transparent'
          }
        },
        '&:nth-child(even) div': {
          left: '-22.5vw',
          '&:before': {
            right: -15,
            borderWidth: '8px 0 8px 16px',
            borderColor: 'transparent transparent transparent #02BABC'
          }
        },
      },
      '& div': {
        position: 'relative',
        bottom: 0,
        width: '19vw',
        padding: 15,
        background: theme.palette.primary.main,
        borderRadius: 10,
        '&:before': {
          content: '""',
          position: 'absolute',
          bottom: 7,
          width: 0,
          height: 0,
          borderStyle: 'solid',
        },
      },
      '& time': {
        display: 'block',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        marginBottom: 8,
      },
      '& p': {
        textAlign: 'justify',
      }
    }
  },
  first:{
    '&:after':{
      background: styleProps => styleProps.firstCheck ? theme.palette.primary.main : 'inherit',
    }
  },
  second:{
    '&:after':{
      background: styleProps => styleProps.secondCheck ? theme.palette.primary.main : 'inherit',
    }
  },
  third:{
    '&:after':{
      background: styleProps => styleProps.thirdCheck ? theme.palette.primary.main : 'inherit',
    }
  },
}));

interface StyleProps {
  firstCheck: boolean;
  secondCheck: boolean;
  thirdCheck: boolean;
}

const Experience: React.FC = () => {
  const firstRef = useRef<any>();
  const secondRef = useRef<any>();
  const thirdRef = useRef<any>();

  const [firstCheck, setFirstCheck] = useState<boolean>(false);
  const [secondCheck, setSecondCheck] = useState<boolean>(false);
  const [thirdCheck, setThirdCheck] = useState<boolean>(false);

  useScrollPosition(({ currPos }: any) => {
    currPos.y < vh * 0.5 ? setFirstCheck(true) : setFirstCheck(false);
  }, firstRef, false);

  useScrollPosition(({ currPos }: any) => {
    currPos.y < vh * 0.5 ? setSecondCheck(true) : setSecondCheck(false);
  }, secondRef, false);

  useScrollPosition(({ currPos }: any) => {
    currPos.y < vh * 0.5 ? setThirdCheck(true) : setThirdCheck(false);
  }, thirdRef, false);

  const styleProps: StyleProps = {firstCheck: firstCheck, secondCheck: secondCheck, thirdCheck: thirdCheck}
  const classes = useStyles(styleProps);

  return (
    <Grid container spacing={0} className={classes.experience}>
      <div className={classes.divider} />
      <Grid item xs={12} className={classes.title}>
        <Typography variant='h3' component='h1'>What I've been involved in</Typography>
      </Grid>
      <Grid item xs={12} className={classes.container}>
        <section className={classes.timeline}>
          <ul>
            <span className={classes.circle} />
            <li ref={firstRef} className={classes.first}>
              <Slide in={firstCheck} direction='right'>
                <div>
                  <time>2017</time>
                  <Typography variant='body1' component='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget. Vivamus at scelerisque libero. Ut odio eros, pretium vitae orci vel, sodales tempus arcu. Fusce ultricies fermentum libero, vel rhoncus mi mattis egestas. Donec suscipit mattis libero. Donec euismod eget elit eget dignissim. Proin viverra enim quis auctor ornare.</Typography>
                </div>
              </Slide>
            </li>
            <li ref={secondRef} className={classes.second}>
              <Slide in={secondCheck} direction='left'>
                <div>
                  <time>2018</time>
                  <Typography variant='body1' component='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget. Vivamus at scelerisque libero. Ut odio eros, pretium vitae orci vel, sodales tempus arcu. Fusce ultricies fermentum libero, vel rhoncus mi mattis egestas. Donec suscipit mattis libero. Donec euismod eget elit eget dignissim. Proin viverra enim quis auctor ornare.</Typography>
                </div>
              </Slide>
            </li>
            <li ref={thirdRef} className={classes.third}>
              <Slide in={thirdCheck} direction='right'>
                <div>
                  <time>2019</time>
                  <Typography variant='body1' component='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget. Vivamus at scelerisque libero. Ut odio eros, pretium vitae orci vel, sodales tempus arcu. Fusce ultricies fermentum libero, vel rhoncus mi mattis egestas. Donec suscipit mattis libero. Donec euismod eget elit eget dignissim. Proin viverra enim quis auctor ornare.</Typography>
                </div>
              </Slide>
            </li>
          </ul>
        </section>
      </Grid>

    </Grid>
  );
}

export default Experience;
