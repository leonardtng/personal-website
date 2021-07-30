import React from 'react';
import { makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  rating: {
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    '& legend': {
      fontSize: '1.5rem',
    },
    '& svg': {
      fontSize: '1.5rem',
    }
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
}));

const StyledRating = withStyles((theme: Theme) => ({
  iconFilled: {
    color: theme.palette.primary.main,
  },
  iconEmpty: {
    color: theme.palette.primary.contrastText,
  }
}))(Rating);

const labels: { [index: string]: { label: string } } = {
  1: {
    label: 'Working on it',
  },
  2: {
    label: 'Novice',
  },
  3: {
    label: 'Comfortable',
  },
  4: {
    label: 'Experienced',
  },
  5: {
    label: 'Proficient',
  },
};

interface RatingProps {
  legend: string;
  value: number;
  icon: React.ReactNode;
}

const RatingComponent: React.FC<RatingProps> = (props: RatingProps) => {
  const classes = useStyles();

  return (
    <Box component='fieldset' mb={1} borderColor='transparent' className={classes.rating}>
      <Typography variant='body1'>{props.legend}</Typography>
      <div className={classes.wrapper}>
        <StyledRating
          readOnly
          size='large'
          name='rating-component'
          defaultValue={props.value}
          icon={props.icon}
        />
        <Typography variant='body1' component='p'>{labels[props.value].label}</Typography>
      </div>
    </Box>
  )
}

export default RatingComponent;