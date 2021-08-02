import React, { useState, useRef, useContext } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Grow, Link } from '@material-ui/core';
import Stack from '../interactive/Stack';
import RatingComponent from '../interactive/RatingComponent';
import StarIcon from '@material-ui/icons/Star';
import ChatIcon from '@material-ui/icons/Chat';
import BuildIcon from '@material-ui/icons/Build';
import { info } from '../../assets/data/info';
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded';
import { Ability } from '../../@types';
import { useScrollPosition, vh } from '../../@utils/useScrollPosition';
import { CurrentPageView, PageContextProps } from '../../contexts/CurrentPageView';
import { CONTAINER_OFFSET } from '../../@constants';

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
    marginTop: 15,
    '& a': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .MuiSvgIcon-root': {
        height: 16,
        width: 16,
        marginLeft: 6,
        color: theme.palette.text.secondary
      }
    }
  },
  button: {
    marginBottom: 20,
    backgroundColor: '#24292e',
    color: '#fafbfc',
    '&:hover': {
      backgroundColor: '#24292eee',
    }
  },
  subheader: {
    marginTop: 50,
    marginBottom: 20,
  },
  ratingsBlock: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    marginBottom: 30,
    paddingRight: 20,
    paddingLeft: 20,
    cursor: 'pointer',
  },
  note: {
    fontStyle: 'oblique',
    marginBottom: 30,
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

const Abilities: React.FC = () => {
  const classes = useStyles();
  const { setCurrentPage } = useContext<PageContextProps>(CurrentPageView);

  const [checked, setChecked] = useState<boolean>(false);
  const abilitiesRef = useRef<HTMLDivElement>(null);
  const containerHeight = abilitiesRef.current?.clientHeight;

  useScrollPosition(({ currPos }: any) => {
    currPos.y < vh * 0.65 ? setChecked(true) : setChecked(false);
    if (containerHeight) {
      if (CONTAINER_OFFSET > currPos.y && currPos.y > -containerHeight + CONTAINER_OFFSET) setCurrentPage('Abilities');
    };
  }, abilitiesRef, false);

  return (
    <Grid container spacing={3} className={classes.about} ref={abilitiesRef} id='abilities'>
      <div className={classes.divider} />
      <Grid item xs={12} className={classes.title}>
        <Typography variant='h3' component='h1'>{info.abilities.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grow in={checked} timeout={{ enter: 600, exit: 300 }}>
          <Typography variant='body1' component='p'>{info.abilities.description}</Typography>
        </Grow>
      </Grid>
      <Grid item xs={12} className={classes.subheader}>
        <Typography variant='h5'>{info.abilities.subsections.stack.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack checked={checked} />
      </Grid>
      <Grid item xs={12} className={classes.italics}>
        <Link href="https://github.com/leonardtng/personal-website" target='_blank' rel="noopener" aria-label="GitHub Personal Website"> 
          <Typography variant='body1' component='p' color="textSecondary">This project was built with React</Typography> <OpenInNewRoundedIcon />
        </Link>
      </Grid>
      <Grid item xs={12} className={classes.subheader}>
        <Typography variant='h5'>{info.abilities.subsections.skills.title}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        {info.abilities.subsections.skills.itemsBlockLeft.map((item: Ability) => {
          return <RatingComponent key={item.legend} legend={item.legend} value={item.value} icon={<StarIcon fontSize="inherit" />} />
        })}
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        {info.abilities.subsections.skills.itemsBlockRight.map((item: Ability) => {
          return <RatingComponent key={item.legend} legend={item.legend} value={item.value} icon={<StarIcon fontSize="inherit" />} />
        })}
      </Grid>
      <Grid item xs={12} className={classes.subheader}>
        <Typography variant='h5'>{info.abilities.subsections.languages.title}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        {info.abilities.subsections.languages.itemsBlockLeft.map((item: Ability) => {
          return <RatingComponent key={item.legend} legend={item.legend} value={item.value} icon={<ChatIcon fontSize="inherit" />} />
        })}
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        {info.abilities.subsections.languages.itemsBlockRight.map((item: Ability) => {
          return <RatingComponent key={item.legend} legend={item.legend} value={item.value} icon={<ChatIcon fontSize="inherit" />} />
        })}
      </Grid>
      <Grid item xs={12} className={classes.subheader}>
        <Typography variant='h5'>{info.abilities.subsections.tools.title}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        {info.abilities.subsections.tools.itemsBlockLeft.map((item: Ability) => {
          return <RatingComponent key={item.legend} legend={item.legend} value={item.value} icon={<BuildIcon fontSize="inherit" />} />
        })}
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        {info.abilities.subsections.tools.itemsBlockRight.map((item: Ability) => {
          return <RatingComponent key={item.legend} legend={item.legend} value={item.value} icon={<BuildIcon fontSize="inherit" />} />
        })}
      </Grid>
      <Grid item xs={12} className={classes.note}>
        <Typography variant='subtitle1' gutterBottom>{info.abilities.note}</Typography>
      </Grid>
    </Grid>
  );
}

export default Abilities;