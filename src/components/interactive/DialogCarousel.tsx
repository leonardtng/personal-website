import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MobileStepper, Button, Hidden } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { CardDialogImage } from '../../@types';
import { vw } from '../../@utils/useScrollPosition';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
export const IMAGE_HEIGHT = vw < 600 ? 200 : vw < 960 ? 250 : 370;
export const PAPER_OFFSET = 20; // Currently equals to BORDER_RADIUS

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
    height: IMAGE_HEIGHT,
    '& .MuiMobileStepper-root': {
      background: 'transparent',
    },
    '& .react-swipeable-view-container': {
      height: IMAGE_HEIGHT,
      width: '100%'
    },
  },
  imgWrapper: {
    height: IMAGE_HEIGHT,
  },
  img: {
    height: IMAGE_HEIGHT,
    display: 'block',
    width: '100%',
    overflow: 'hidden',
  },
  stepper: {
    transform: `translateY(calc(-100% - ${PAPER_OFFSET}px))`,
    '& .MuiButton-root': {
      minWidth: 0,
      borderRadius: '50%'
    }
  },
  '@media only screen and (max-width: 600px)': {
    stepper: {
      display: 'flex',
      justifyContent: 'center'
    }
  }
});

interface DialogCarouselProps {
  carousel: Array<CardDialogImage>;
}

const DialogCarousel: React.FC<DialogCarouselProps> = (props: DialogCarouselProps) => {
  const dialogCarouselStyles = useStyles();

  const data = props.carousel;

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = data.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className={dialogCarouselStyles.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.map((step: any, index: any) => (
          <div className={dialogCarouselStyles.imgWrapper} key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={dialogCarouselStyles.img} src={step.image} alt={step.caption} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {maxSteps < 2 ? (
        null
      ) : (
        <MobileStepper
          className={dialogCarouselStyles.stepper}
          steps={maxSteps}
          position='static'
          variant='dots'
          activeStep={activeStep}
          nextButton={
            <Hidden xsDown>
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1} color="primary">
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            </Hidden>
          }
          backButton={
            <Hidden xsDown>
              <Button size="small" onClick={handleBack} disabled={activeStep === 0} color="primary">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              </Button>
            </Hidden>
          }
        />
      )}
    </div>
  );
}

export default DialogCarousel;
