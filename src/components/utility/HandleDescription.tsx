import React, { Fragment, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { CardMedia, Typography, Slide, CardActionArea, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
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


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <CardActionArea
        className={classes.maxheight}
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
        onClick={handleClickOpen}
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
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText> */}
            <Typography variant='body1' component='p'>
              LoremIpsum
            </Typography>
          {/* </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
            </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
            </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default HandleDescription;