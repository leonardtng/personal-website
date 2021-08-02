import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  titleContainer: {
    margin: '50px 0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& h1': {
      fontWeight: 500,
    },
  },
  avatar: {
    marginRight: 16,
    height: 60,
    width: 60
  },
  '@media only screen and (max-width: 600px)': {
    titleContainer: {
      margin: '10px 0 0',
      display: 'block',
      '& .MuiAvatar-root': {
        margin: '0 auto 6px',
      },
    }
  },
}));

interface TitleContainerProps {
  title: string;
  image?: string;
}

const TitleContainer: React.FC<TitleContainerProps> = (props: TitleContainerProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.titleContainer}>
      {props.image && <Avatar variant="square" src={props.image} className={classes.avatar} />}
      <Typography variant='h3' component='h1'>{props.title}</Typography>
    </Box>
  )
}

export default TitleContainer
