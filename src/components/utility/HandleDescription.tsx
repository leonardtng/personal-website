import React, { Fragment, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { CardMedia, Typography, Slide, CardActionArea, Dialog, DialogContent, Paper } from '@material-ui/core';
import { IMAGE_HEIGHT } from '../interactive/DialogCarousel';
import DialogCarousel, { PAPER_OFFSET } from '../interactive/DialogCarousel';
import { CardDialogContent } from '../../@types';
import { TransitionProps } from '@material-ui/core/transitions/transition';

const PAPER_HEIGHT = 300;
const BORDER_RADIUS = 30

const useStyles = makeStyles((theme: Theme) => ({
  maxheight: {
    maxHeight: IMAGE_HEIGHT,
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
    height: IMAGE_HEIGHT,
  },
  background: {
    height: IMAGE_HEIGHT,
  },
  textContainer: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    height: IMAGE_HEIGHT,
    width: '100%',
  },
  description: {
    position: 'absolute',
    top: 0,
    textAlign: 'justify',
    padding: 15,
    color: theme.palette.text.primary,
  },
  dialog: {
    '& .MuiDialog-paper': {
      borderRadius: BORDER_RADIUS,
      maxWidth: 400,
      height: `calc(${IMAGE_HEIGHT}px + ${PAPER_HEIGHT}px - ${PAPER_OFFSET}px)`,
    },
    '& .MuiDialogContent-root': {
      borderRadius: '20%',
    },
  },
  content: {
    height: PAPER_HEIGHT,
    borderRadius: BORDER_RADIUS,
    width: '100%',
    position: 'absolute',
    top: `calc(${IMAGE_HEIGHT}px - ${PAPER_OFFSET}px)`,
  }
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

interface HandleDescriptionProps {
  img: string;
  name: string;
  description: string;
  cardDialogContent: CardDialogContent;
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
          className={classes.dialog}
          TransitionComponent={Transition}
        >
          <DialogCarousel carousel={props.cardDialogContent.carousel} />
          <Paper className={classes.content}>
            <DialogContent>
              <Typography variant='body1' component='p'>
                {props.description}
              </Typography>
            </DialogContent>
          </Paper>
        </Dialog>
    </Fragment>
  )
}

export default HandleDescription;