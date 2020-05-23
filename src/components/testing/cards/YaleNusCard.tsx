import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import YaleNusCover from '../../assets/images/cards/yale-nus.png';
import HandleDescription from '../../utility/HandleDescription';

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget.';

interface YaleNusCardProps {
  direction: 'left' | 'right';
}

const YaleNusCard: React.FC<YaleNusCardProps> = (props: YaleNusCardProps) => {
  return (
    <Card elevation={5}>
      <HandleDescription
        img={YaleNusCover}
        name='Yale-NUS'
        description={description}
        direction={props.direction}
      />
      <CardContent>
        <time>July 2020</time>
        <Typography variant='subtitle1' component='h1'>Yale-NUS College</Typography>
        <Typography variant='body1' component='h2'>[Undergraduate]</Typography>
      </CardContent>
    </Card>
  );
}

export default YaleNusCard;