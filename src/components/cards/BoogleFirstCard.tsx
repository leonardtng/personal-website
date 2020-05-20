import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import BoogleCover from '../../assets/images/cards/boogle-hq.jpg';
import HandleDescription from '../utility/HandleDescription';

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget.';

interface BoogleFirstCardProps {
  direction: 'left' | 'right';
}

const BoogleFirstCard: React.FC<BoogleFirstCardProps> = (props: BoogleFirstCardProps) => {
  return (
    <Card elevation={5}>
      <HandleDescription
        img={BoogleCover}
        name='Boogle HQ'
        description={description}
        direction={props.direction}
      />
      <CardContent>
        <time>Oct 2019</time>
        <Typography variant='subtitle1' component='h1'>Boogle Group Ltd</Typography>
        <Typography variant='body1' component='h2'>[Software Engineer]</Typography>
      </CardContent>
    </Card>
  );
}

export default BoogleFirstCard;