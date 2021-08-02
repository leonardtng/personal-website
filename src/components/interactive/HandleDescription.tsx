import React, { Fragment, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { CardMedia, Typography, Slide, CardActionArea, Dialog, DialogContent, Paper, List, ListItem, Collapse, ListItemText, Button } from '@material-ui/core';
import { IMAGE_HEIGHT } from '../interactive/DialogCarousel';
import DialogCarousel, { PAPER_OFFSET } from '../interactive/DialogCarousel';
import { CardDialogContent, CardDialogInfo } from '../../@types';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import { ExpandLessRounded, ExpandMoreRounded, OpenInNewRounded } from '@material-ui/icons';
import { modifyDescription } from '../../@utils/modifyDescription';
import ThemeToggleButtons from '../buttons/ThemeToggleButtons';

const PAPER_HEIGHT = 300;
const BORDER_RADIUS = 20;

const useStyles = makeStyles((theme: Theme) => ({
  imageArea: {
    borderRadius: 10,
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
    height: 250,
    borderRadius: '10px 10px 0 0',
  },
  textContainer: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
  },
  description: {
    position: 'absolute',
    top: 0,
    textAlign: 'justify',
    padding: 15,
    color: theme.palette.text.primary,
  },
  projectLink: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 25,
    '& .MuiButton-root': {
      height: 50,
      width: '100%',
    },
  },
  dialog: {
    '& .MuiDialog-paper': {
      maxWidth: 600,
      height: `calc(${IMAGE_HEIGHT}px + ${PAPER_HEIGHT}px - ${PAPER_OFFSET}px)`,
    },
    '& .MuiPaper-root': {
      borderRadius: BORDER_RADIUS,
      overflowX: 'hidden',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
  },
  content: {
    height: PAPER_HEIGHT,
    borderRadius: BORDER_RADIUS,
    width: '100%',
    position: 'absolute',
    top: `calc(${IMAGE_HEIGHT}px - ${PAPER_OFFSET}px)`,
    overflow: 'scroll',
    textAlign: 'justify',
    '& .MuiDialogContent-root': {
      marginBottom: 30,
    },
  },
  infoHeader: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  listItem: {
    paddingLeft: 32,
  },
  '@media only screen and (max-width: 960px)': {
    dialog: {
      '& .MuiDialog-paper': {
        maxWidth: 400,
      },
    },
  },
  '@media only screen and (max-width: 600px)': {
    media: {
      height: 150,
    },
  },
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

interface HandleDescriptionProps {
  image: string;
  title: string;
  description: string;
  descriptionSecondPart?: string;
  projectLink?: string;
  cardDialogContent: CardDialogContent;
  direction: 'left' | 'right';
}

const HandleDescription: React.FC<HandleDescriptionProps> = (props: HandleDescriptionProps) => {
  const classes = useStyles();

  const [showDescription, setShowDescription] = useState<boolean>(false);

  const [open, setOpen] = React.useState(false);
  const [dropdown, setDropdown] = useState<Array<boolean | undefined>>([]);

  const handleChange = (index: number) => {
    let newArray = [...dropdown];
    newArray[index] = !dropdown[index]
    return newArray
  };

  return (
    <Fragment>
      <CardActionArea
        className={classes.imageArea}
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
        onClick={() => setOpen(true)}
      >
        <CardMedia
          component='img'
          className={classes.media}
          alt={props.title}
          image={props.image}
          title={props.title}
        />
        <div className={classes.textContainer}>
          <Slide in={showDescription} direction={props.direction} timeout={300}>
            <Typography className={classes.description} variant='body1' component='p'>
              {modifyDescription(`${props.description}${props.descriptionSecondPart ? props.descriptionSecondPart : ''}`)}
            </Typography>
          </Slide>
        </div>
      </CardActionArea>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          setDropdown([]);
        }}
        className={classes.dialog}
        TransitionComponent={Transition}
      >
        <DialogCarousel carousel={props.cardDialogContent.carousel} />
        <Paper className={classes.content}>
          <DialogContent>
            {props.projectLink &&
              <div className={classes.projectLink}>
                <Button
                  variant='contained'
                  color='secondary'
                  endIcon={<OpenInNewRounded />}
                  href={props.projectLink}
                  target='_blank'
                >
                  View this project!
              </Button>
              </div>
            }
            <Typography variant='body1' component='p'>
              {props.description} {props.title === 'Personal Website' ? <><ThemeToggleButtons size="small" />{props.descriptionSecondPart}</> : null}
            </Typography>
            <List>
              {props.cardDialogContent.infoList ? props.cardDialogContent.infoList.map((category: CardDialogInfo, index: number) => {
                return <Fragment key={index}>
                  <ListItem button onClick={() => setDropdown(handleChange(index))}>
                    <ListItemText primary={category.infoTitle} className={classes.infoHeader} />
                    {dropdown[index] ? <ExpandLessRounded /> : <ExpandMoreRounded />}
                  </ListItem>
                  <Typography variant='subtitle2' component='div'>
                    <Collapse in={dropdown[index]} timeout='auto' unmountOnExit>
                      <List>
                        {category.infoItems.map((item: string, index: number) => {
                          return <ListItem key={index} className={classes.listItem}>{item}</ListItem>
                        })}
                      </List>
                    </Collapse>
                  </Typography>
                </Fragment>
              }) : null}
            </List>
          </DialogContent>
        </Paper>
      </Dialog>
    </Fragment >
  )
}

export default HandleDescription;