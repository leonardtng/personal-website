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

const useStyles = makeStyles((theme: Theme) => ({
  about: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'justify',
    marginBottom: 1000,
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
  subheader: {
    marginTop: 50,
    marginBottom: 20,
  },
  ratingsBlock: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 50,
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
    '& p': {
      right: 0,
      marginRight: 50,
    }
  },
  '@media only screen and (max-width: 1200px)': {
    wrapper: {
      '& p': {
        marginRight: 10,
      }
    },
  },
  '@media only screen and (max-width: 600px)': {
    wrapper: {
      '& p': {
        marginRight: 10,
      }
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
        <Typography variant='h3' component='h1'>What I Can Do</Typography>
      </Grid>
      <Grid item xs={12} className={classes.subheader}>
        <Typography variant='h5'>Stack</Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack />
      </Grid>
      <Grid item xs={12} className={classes.subheader}>
        <Typography variant='h5'>Skills</Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        <RatingComponent legend='React' value={5} />
        <RatingComponent legend='Material-UI' value={5} />
        <RatingComponent legend='TypeScript' value={5} />
        <RatingComponent legend='Product Management' value={4} />
        <RatingComponent legend='Scrum' value={4} />
        <RatingComponent legend='HTML(5)' value={4} />
        <RatingComponent legend='CSS(3)' value={4} />
        <RatingComponent legend='Raspberry Pi(3)' value={4} />
        <RatingComponent legend='MySQL' value={4} />
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        <RatingComponent legend='React Native' value={4} />
        <RatingComponent legend='Python' value={4} />
        <RatingComponent legend='Pandas' value={3} />
        <RatingComponent legend='Sci-kit Learn' value={3} />
        <RatingComponent legend='Django' value={3} />
        <RatingComponent legend='Django REST Framework' value={3} />
        <RatingComponent legend='Arduino' value={3} />
        <RatingComponent legend='BootStrap(4)' value={2} />
        <RatingComponent legend='C#' value={1} />
      </Grid>
      <Grid item xs={12} className={classes.subheader}>
        <Typography variant='h5'>Languages</Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        <RatingComponent legend='English' value={5} />
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        <RatingComponent legend='Mandarin' value={4} />
      </Grid>
      <Grid item xs={12} className={classes.subheader}>
        <Typography variant='h5'>Tools</Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        <RatingComponent legend='AWS S3' value={5} />
        <RatingComponent legend='AWS CodeCommit' value={5} />
        <RatingComponent legend='Git' value={4} />
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        <RatingComponent legend='Invision Studio' value={4} />
        <RatingComponent legend='Adobe XD' value={4} />
        <RatingComponent legend='AWS EC2' value={1} />
      </Grid>
    </Grid>
  );
}

export default Abilities;