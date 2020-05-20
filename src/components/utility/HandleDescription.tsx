import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { CardMedia, Typography, Slide, CardActionArea } from '@material-ui/core';
import { CARD_HEIGHT } from '../segments/Experience';

const useStyles = makeStyles((theme: Theme) => ({
  maxheight: {
    maxHeight: CARD_HEIGHT,
    '& img': {
      transition: '0.3s ease'
    },
    '&:hover img': {
      opacity: 0.1
    },
    '& div': {
      opacity: 0,
      transition: '0.3s ease',
    },
    '&:hover div': {
      opacity: 1,
    }
  },
  media: {
    height: CARD_HEIGHT,
  },
  background: {
    height: CARD_HEIGHT,
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
}));

interface HandleDescriptionProps {
  img: string;
  name: string;
  description: string;
  direction: 'left' | 'right';
}

const HandleDescription: React.FC<HandleDescriptionProps> = (props: HandleDescriptionProps) => {
  const classes = useStyles();

  const [showDescription, setShowDescription] = useState<boolean>(false);

  const modifyDescription = (description: string) => {
    if (description.length > 505) {
      const newDescription = description.slice(0, 500) + ' ...'
      return newDescription;
    };
    return description
  };

  return (
    <CardActionArea
      className={classes.maxheight}
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <CardMedia
        component='img'
        className={classes.background}
        alt={props.name}
        image={props.img}
        title={props.name}
      />
      <div className={classes.textContainer}>
        <Slide in={showDescription} direction={props.direction} timeout={300}>
          <Typography className={classes.description} variant='body1' component='p'>
            {modifyDescription(props.description)}
          </Typography>
        </Slide>
      </div>
    </CardActionArea>
  )
}

export default HandleDescription;