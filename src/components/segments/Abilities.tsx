import React from 'react';
import { makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import Rating, { IconContainerProps } from '@material-ui/lab/Rating';
import { Grid, Typography, Box } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HotTubIcon from '@material-ui/icons/HotTub';
import StarsIcon from '@material-ui/icons/Stars';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Stack from '../interactive/Stack';
import { info } from '../../@constants/info';

const useStyles = makeStyles((theme: Theme) => ({
  about: {
    display: 'flex',
    alignItems: 'center',
  },
  divider: {
    height: 2,
    width: '100%',
    backgroundColor: '#7F7F7F',
  },
  title: {
    margin: '50px 0 20px',
    '& h1': {
      fontWeight: 500,
    },
  },
  italics: {
    fontStyle: 'oblique',
    marginTop: 20,
  },
  subheader: {
    marginTop: 50,
    marginBottom: 20,
  },
  ratingsBlock: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    marginBottom: 50,
    paddingRight: 20,
    paddingLeft: 20,
    '& fieldset': {
      transition: 'transform 0.2s',
    },
    '& fieldset:hover': {
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
  },
  '@media only screen and (max-width: 1200px)': {
    ratingsBlock: {
      paddingRight: 5,
      paddingLeft: 5,
    },
  },
  '@media only screen and (max-width: 600px)': {
    ratingsBlock: {
      marginBottom: 0,
      paddingRight: 5,
      paddingLeft: 5,
    },
  },
}));

const StyledRating = withStyles((theme: Theme) => ({
  iconFilled: {
    color: theme.palette.primary.main,
  },
  // iconHover: {
  //   color: '#ff3d47',
  // },
  iconEmpty: {
    color: theme.palette.primary.contrastText,
  }
}))(Rating);

const customIcons: { [index: string]: { icon: React.ReactElement; label: string } } = {
  1: {
    icon: <BuildIcon />,
    label: 'Working on it',
  },
  2: {
    icon: <MenuBookIcon />,
    label: 'Novice',
  },
  3: {
    icon: <HotTubIcon />,
    label: 'Comfortable',
  },
  4: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Experienced',
  },
  5: {
    icon: <StarsIcon />,
    label: 'Proficient',
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

interface RatingProps {
  legend: string;
  value: number;
}

const RatingComponent: React.FC<RatingProps> = (props: RatingProps) => {
  const classes = useStyles();

  return (
    <Box component="fieldset" mb={1} borderColor="transparent">
      <Typography variant='body1'>{props.legend}</Typography>
      <div className={classes.wrapper}>
        <StyledRating
          readOnly
          size='large'
          name="customized-icons"
          defaultValue={props.value}
          IconContainerComponent={IconContainer}
        />
        <Typography variant='body1' component='p'>{customIcons[props.value].label}</Typography>
      </div>
    </Box>
  )
}

const Abilities: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.about}>
      <div className={classes.divider} />
      <Grid item xs={12} className={classes.title}>
        <Typography variant='h3' component='h1'>{info.abilities.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body1' component='p'>{info.abilities.description}</Typography>
      </Grid>
      <Grid item xs={12} className={classes.subheader}>
        <Typography variant='h5'>{info.abilities.subsections.stack.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack />
      </Grid>
      <Grid item xs={12} className={classes.italics}>
        <Typography variant='body1' component='p'>This project was built with React</Typography>
      </Grid>
      <Grid item xs={12} className={classes.subheader}>
        <Typography variant='h5'>{info.abilities.subsections.skills.title}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        {info.abilities.subsections.skills.itemsBlockLeft.map(item => {
          return <RatingComponent key={item.legend} legend={item.legend} value={item.value} />
        })}
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        {info.abilities.subsections.skills.itemsBlockRight.map(item => {
          return <RatingComponent key={item.legend} legend={item.legend} value={item.value} />
        })}
      </Grid>
      <Grid item xs={12} className={classes.subheader}>
        <Typography variant='h5'>{info.abilities.subsections.languages.title}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        {info.abilities.subsections.languages.itemsBlockLeft.map(item => {
          return <RatingComponent key={item.legend} legend={item.legend} value={item.value} />
        })}
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        {info.abilities.subsections.languages.itemsBlockRight.map(item => {
          return <RatingComponent key={item.legend} legend={item.legend} value={item.value} />
        })}
      </Grid>
      <Grid item xs={12} className={classes.subheader}>
        <Typography variant='h5'>{info.abilities.subsections.tools.title}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        {info.abilities.subsections.tools.itemsBlockLeft.map(item => {
          return <RatingComponent key={item.legend} legend={item.legend} value={item.value} />
        })}
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        {info.abilities.subsections.tools.itemsBlockRight.map(item => {
          return <RatingComponent key={item.legend} legend={item.legend} value={item.value} />
        })}
      </Grid>
    </Grid>
  );
}

export default Abilities;