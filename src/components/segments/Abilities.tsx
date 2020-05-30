import React, { useState, useRef } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Zoom } from '@material-ui/core';
import Stack from '../interactive/Stack';
import { info } from '../../assets/data/info';
import { Ability } from '../../@types';
import { useScrollPosition, vh } from '../../@utils/useScrollPosition';
import RatingComponent from '../interactive/RatingComponent';

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
    '& h2': {
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

  const [checked, setChecked] = useState<boolean>(false);
  const abilitiesRef = useRef<HTMLDivElement>(null);

  useScrollPosition(({ currPos }: any) => {
    currPos.y < vh * 0.75 ? setChecked(true) : setChecked(false);
  }, abilitiesRef, false);

  return (
    <Grid container spacing={0} className={classes.about} ref={abilitiesRef}>
      <div className={classes.divider} />
      <Grid item xs={12} className={classes.title}>
        <Typography variant='h3' component='h2'>{info.abilities.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Zoom in={checked}>
          <Typography variant='body1' component='p'>{info.abilities.description}</Typography>
        </Zoom>
      </Grid>
      <Grid item xs={12} className={classes.subheader}>
        <Typography variant='h5'>{info.abilities.subsections.stack.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack checked={checked} />
      </Grid>
      <Grid item xs={12} className={classes.italics}>
        <Typography variant='body1' component='p'>This project was built with React</Typography>
      </Grid>
      <Grid item xs={12} className={classes.subheader}>
        <Typography variant='h5'>{info.abilities.subsections.skills.title}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        {info.abilities.subsections.skills.itemsBlockLeft.map((item: Ability) => {
          return <RatingComponent key={item.legend} legend={item.legend} value={item.value} />
        })}
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        {info.abilities.subsections.skills.itemsBlockRight.map((item: Ability) => {
          return <RatingComponent key={item.legend} legend={item.legend} value={item.value} />
        })}
      </Grid>
      <Grid item xs={12} className={classes.subheader}>
        <Typography variant='h5'>{info.abilities.subsections.languages.title}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        {info.abilities.subsections.languages.itemsBlockLeft.map((item: Ability) => {
          return <RatingComponent key={item.legend} legend={item.legend} value={item.value} />
        })}
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        {info.abilities.subsections.languages.itemsBlockRight.map((item: Ability) => {
          return <RatingComponent key={item.legend} legend={item.legend} value={item.value} />
        })}
      </Grid>
      <Grid item xs={12} className={classes.subheader}>
        <Typography variant='h5'>{info.abilities.subsections.tools.title}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        {info.abilities.subsections.tools.itemsBlockLeft.map((item: Ability) => {
          return <RatingComponent key={item.legend} legend={item.legend} value={item.value} />
        })}
      </Grid>
      <Grid item xs={12} sm={6} className={classes.ratingsBlock}>
        {info.abilities.subsections.tools.itemsBlockRight.map((item: Ability) => {
          return <RatingComponent key={item.legend} legend={item.legend} value={item.value} />
        })}
      </Grid>
    </Grid>
  );
}

export default Abilities;