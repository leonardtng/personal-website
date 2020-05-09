import React, { useRef, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Slide, List, ListItem, Card, CardContent } from '@material-ui/core';
import { useScrollPosition, vh, vw } from '../../@utils/useScrollPosition';
import { ThemeContext } from '../../contexts/ThemeContext';

const SCROLL_THRESHOLD = vh * 0.7;
const TIMELINE_WIDTH = 6;

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
    paddingTop: 20,
    paddingBottom: 50,
    width: '90%',
    textAlign: 'center',
    overflow: 'hidden',
  },
  circle: {
    position: 'absolute',
    backgroundColor: styleProps => styleProps.scroll > 0 ? theme.palette.primary.main : theme.palette.primary.contrastText,
    borderRadius: '50%',
    transform: 'translate(-15px, -10px)',
    height: 30,
    width: 30,
    zIndex: 1,
  },
  timeline: {
    '& ul': {
      padding: 0,
      '&:before': {
        position: 'absolute',
        content: '""',
        width: TIMELINE_WIDTH,
        height: styleProps => styleProps.scroll,
        maxHeight: styleProps => styleProps.maxScroll,
        backgroundColor: theme.palette.primary.main,
        transform: 'translateX(-50%)',
        zIndex: 1,
      },
      '& li': {
        display: 'list-item',
        padding: 0,
        textAlign: 'center',
        listStyleType: 'none',
        position: 'relative',
        width: 6,
        margin: '0 auto',
        paddingTop: 50,
        background: theme.palette.primary.contrastText,
        '&:after': {
          content: '""',
          position: 'absolute',
          left: '50%',
          bottom: 0,
          transform: 'translateX(-50%)',
          width: 15,
          height: 40,
          borderRadius: '20%',
        },
        '&:nth-child(odd) .MuiCard-root': {
          left: 45,
          '&:before': {
            left: -15,
            borderWidth: '8px 16px 8px 0',
            borderColor: `transparent ${theme.palette.background.paper} transparent transparent`
          }
        },
        '&:nth-child(even) .MuiCard-root': {
          left: -469,
          '&:before': {
            right: -15,
            borderWidth: '8px 0 8px 16px',
            borderColor: `transparent transparent transparent ${theme.palette.background.paper}`
          }
        },
      },
      '& .MuiCard-root': {
        position: 'relative',
        overflow: 'visible',
        bottom: 0,
        width: 400,
        padding: 15,
        background: theme.palette.background.paper,
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
  first: {
    '&:after': {
      background: styleProps => styleProps.firstCheck ? theme.palette.primary.main : 'inherit',
    }
  },
  second: {
    '&:after': {
      background: styleProps => styleProps.secondCheck ? theme.palette.primary.main : 'inherit',
    }
  },
  third: {
    '&:after': {
      background: styleProps => styleProps.thirdCheck ? theme.palette.primary.main : 'inherit',
    }
  },
  '@media only screen and (max-width: 1900px)': {
    timeline: {
      '& ul': {
        '& .MuiCard-root': {
          width: 300,
        },
        '& li': {
          '&:nth-child(even) .MuiCard-root': {
            left: -369,
          }
        }
      }
    },
  },
  '@media only screen and (max-width: 1500px)': {
    timeline: {
      '& ul': {
        '& .MuiCard-root': {
          width: 200,
        },
        '& li': {
          '&:nth-child(even) .MuiCard-root': {
            left: -269,
          }
        }
      }
    },
  },
  '@media only screen and (max-width: 1200px)': {
    timeline: {
      '& ul': {
        '& .MuiCard-root': {
          width: 150,
        },
        '& li': {
          '&:nth-child(even) .MuiCard-root': {
            left: -219,
          }
        }
      }
    },
  },
  '@media only screen and (max-width: 600px)': {
    circle: {
      left: 23, //TIMELINE_WIDTH /2 + marginLeft
    },
    timeline: {
      '& ul': {
        '&:before': {
          left: 23
        },
        '& .MuiCard-root': {
          width: 'calc(100vw - 200px)',
        },
        '& li': {
          marginLeft: 20,
          '&:nth-child(even) .MuiCard-root': {
            left: 45,
            '&:before': {
              left: -15,
              borderWidth: '8px 16px 8px 0',
              borderColor: `transparent ${theme.palette.background.paper} transparent transparent`
            }
          },
        }
      }
    },
  },
}));

interface StyleProps {
  firstCheck: boolean;
  secondCheck: boolean;
  thirdCheck: boolean;
  scroll: number;
  maxScroll: number;
}

const Experience: React.FC = () => {
  const timelineRef = useRef<any>();
  const firstRef = useRef<any>();
  const secondRef = useRef<any>();
  const thirdRef = useRef<any>();

  const [scroll, setScroll] = useState<number>(0);

  const [firstCheck, setFirstCheck] = useState<boolean>(false);
  const [secondCheck, setSecondCheck] = useState<boolean>(false);
  const [thirdCheck, setThirdCheck] = useState<boolean>(false);

  useScrollPosition(({ currPos }: any) => {
    currPos.y < SCROLL_THRESHOLD ? setFirstCheck(true) : setFirstCheck(false);
  }, firstRef, false);

  useScrollPosition(({ currPos }: any) => {
    currPos.y < SCROLL_THRESHOLD ? setSecondCheck(true) : setSecondCheck(false);
  }, secondRef, false);

  useScrollPosition(({ currPos }: any) => {
    currPos.y < SCROLL_THRESHOLD ? setThirdCheck(true) : setThirdCheck(false);
    console.log(currPos.y, vh)
  }, thirdRef, false);

  useScrollPosition(({ currPos }: any) => {
    currPos.y < SCROLL_THRESHOLD ? setScroll(-(currPos.y - SCROLL_THRESHOLD)) : setScroll(0);
  }, timelineRef, false);

  const styleProps: StyleProps = {
    firstCheck: firstCheck,
    secondCheck: secondCheck,
    thirdCheck: thirdCheck, scroll: timelineRef.current ? scroll : 0,
    maxScroll: timelineRef.current ? timelineRef.current.clientHeight : 0,
  }

  const classes = useStyles(styleProps);

  return (
    <Grid container spacing={0} className={classes.experience}>
      <div className={classes.divider} />
      <Grid item xs={12} className={classes.title}>
        <Typography variant='h3' component='h1'>What I've been involved in</Typography>
      </Grid>
      <Grid item xs={12} className={classes.container}>
        <section className={classes.timeline}>
          <List ref={timelineRef}>
            <span className={classes.circle} />
            <ListItem className={classes.first}>
              <Slide in={firstCheck} direction={vw < 600 ? 'left' : 'right'}>
                <Card elevation={5}>
                  <CardContent>
                    <time>2017</time>
                    <Typography variant='body1' component='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget.</Typography>
                    <span ref={firstRef} />
                  </CardContent>
                </Card>
              </Slide>
            </ListItem>
            <ListItem className={classes.second}>
              <Slide in={secondCheck} direction='left'>
                <Card elevation={5}>
                  <CardContent>
                    <time>2018</time>
                    <Typography variant='body1' component='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget. </Typography>
                    <span ref={secondRef} />
                  </CardContent>
                </Card>
              </Slide>
            </ListItem>
            <ListItem className={classes.third}>
              <Slide in={thirdCheck} direction={vw < 600 ? 'left' : 'right'}>
                <Card elevation={5}>
                  <CardContent>
                    <time>2019</time>
                    <Typography variant='body1' component='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget. </Typography>
                    <span ref={thirdRef} />
                  </CardContent>
                </Card>
              </Slide>
            </ListItem>
          </List>
        </section>
      </Grid>
    </Grid>
  );
}

export default Experience;
