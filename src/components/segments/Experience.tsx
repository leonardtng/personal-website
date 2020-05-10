import React, { useRef, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Slide, List, ListItem } from '@material-ui/core';
import { useScrollPosition, vh, vw } from '../../@utils/useScrollPosition';
import NjcCard from '../cards/NjcCard';
import BoogleFirstCard from '../cards/BoogleFirstCard';
import YaleNusCard from '../cards/YaleNusCard';

const SCROLL_THRESHOLD = vh * 0.8;
const TIMELINE_WIDTH = 6;
export const CARD_HEIGHT = 250;

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
  subtitle: {
    textAlign: 'center',
    color: styleProps => styleProps.scroll > 0 ? theme.palette.primary.main : theme.palette.primary.contrastText,
    margin: '10px 0',
    '& h2': {
    fontWeight: 500,
    },
    '& h3': {
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
          left: -439,
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
        padding: 0,
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
      '& .MuiCardMedia-root': {
        height: CARD_HEIGHT,
        borderRadius: '10px 10px 0 0',
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
  '@media only screen and (max-width: 1700px)': {
    timeline: {
      '& ul': {
        '& .MuiCard-root': {
          width: 300,
        },
        '& li': {
          '&:nth-child(even) .MuiCard-root': {
            left: -339,
          }
        }
      }
    },
  },
  '@media only screen and (max-width: 1400px)': {
    timeline: {
      '& ul': {
        '& .MuiCard-root': {
          width: 250,
        },
        '& li': {
          '&:nth-child(even) .MuiCard-root': {
            left: -289,
          }
        }
      }
    },
  },
  '@media only screen and (max-width: 1200px)': {
    circle: {
      left: 23, //TIMELINE_WIDTH /2 + marginLeft
    },
    timeline: {
      '& ul': {
        '&:before': {
          left: 23
        },
        '& .MuiCard-root': {
          width: 'calc(100vw - 680px)',
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
  '@media only screen and (max-width: 960px)': {
    circle: {
      left: 23, //TIMELINE_WIDTH /2 + marginLeft
    },
    timeline: {
      '& ul': {
        '&:before': {
          left: 23
        },
        '& .MuiCard-root': {
          width: 'calc(100vw - 300px)',
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
    currPos.y < SCROLL_THRESHOLD + 40 ? setFirstCheck(true) : setFirstCheck(false);
  }, firstRef, false);

  useScrollPosition(({ currPos }: any) => {
    currPos.y < SCROLL_THRESHOLD + 40 ? setSecondCheck(true) : setSecondCheck(false);
  }, secondRef, false);

  useScrollPosition(({ currPos }: any) => {
    currPos.y < SCROLL_THRESHOLD + 40 ? setThirdCheck(true) : setThirdCheck(false);
  }, thirdRef, false);

  useScrollPosition(({ currPos }: any) => {
    currPos.y < SCROLL_THRESHOLD + 40 ? setScroll(-(currPos.y - SCROLL_THRESHOLD)) : setScroll(0);
  }, timelineRef, false);

  const styleProps: StyleProps = {
    firstCheck: firstCheck,
    secondCheck: secondCheck,
    thirdCheck: thirdCheck,
    scroll: timelineRef.current ? scroll : 0,
    maxScroll: timelineRef.current ? timelineRef.current.clientHeight : 0,
  }

  const classes = useStyles(styleProps);

  return (
    <Grid container spacing={0} className={classes.experience}>
      <div className={classes.divider} />
      <Grid item xs={12} className={classes.title}>
        <Typography variant='h3' component='h1'>What I've Done So Far</Typography>
      </Grid>
      <Grid item xs={12} className={classes.subtitle}>
        <Typography variant='h5' component='h2'>A journey begins</Typography>
        <Typography variant='body1' component='h3'>(Hover over images for description)</Typography>
      </Grid>
      <Grid item xs={12} className={classes.container}>
        <section className={classes.timeline}>
          <List ref={timelineRef}>
            <span className={classes.circle} />
            <ListItem className={classes.first}>
              <Slide in={firstCheck} direction={vw < 600 ? 'left' : 'right'}>
                <div>
                  <NjcCard />
                  <span ref={firstRef} />
                </div>
              </Slide>
            </ListItem>
            <ListItem className={classes.second}>
              <Slide in={secondCheck} direction='left'>
                <div>
                  <BoogleFirstCard />
                  <span ref={secondRef} />
                </div>
              </Slide>
            </ListItem>
            <ListItem className={classes.third}>
              <Slide in={thirdCheck} direction={vw < 600 ? 'left' : 'right'}>
                <div>
                  <YaleNusCard />
                  <span ref={thirdRef} />
                </div>
              </Slide>
            </ListItem>
          </List>
        </section>
      </Grid>
    </Grid>
  );
}

export default Experience;
