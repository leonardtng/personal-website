import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Fade, CardMedia, Typography, Slide } from '@material-ui/core';
import { CARD_HEIGHT } from '../segments/Experience';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    maxheight: {
      maxHeight: CARD_HEIGHT,
    },
    media: {
      height: CARD_HEIGHT,
    },
    background: {
      height: CARD_HEIGHT,
      opacity: 0.1,
    },
    textContainer: {
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      height: CARD_HEIGHT,
      width: '100%',
    },
    description: {
      position: 'absolute',
      top: 0,
      textAlign: 'justify',
      padding: 15,
      color: theme.palette.text.primary,
    },
  })
);

interface HandleDescriptionProps {
  img: string;
  name: string;
  description: string;
  showDescription: boolean;
  direction: 'left' | 'right';
}

const HandleDescription: React.FC<HandleDescriptionProps> = (props: HandleDescriptionProps) => {
  const classes = useStyles();

  const modifyDescription = (description: string) => {
    if (description.length > 505) {
      const newDescription = description.slice(0, 500) + ' ...'
      return newDescription;
    };
    return description
  };

  if (props.showDescription) {
    return <Fade in={props.showDescription} timeout={300}>
      <div className={classes.maxheight}>
        <CardMedia
          component='img'
          className={classes.background}
          alt={props.name}
          image={props.img}
          title={props.name}
        />
        <div className={classes.textContainer}>
          <Slide in={props.showDescription} direction={props.direction} timeout={300}>
            <Typography className={classes.description} variant='body1' component='p'>
              {modifyDescription(props.description)}
            </Typography>
          </Slide>
        </div>

      </div>
    </Fade>
  } return (
    <div className={classes.maxheight}>
      <CardMedia
        component='img'
        className={classes.media}
        alt={props.name}
        image={props.img}
        title={props.name}
      />
    </div >
  );
}

export default HandleDescription;