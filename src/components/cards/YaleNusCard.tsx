import React, { useState } from 'react';
import { Typography, Card, CardContent, CardActionArea } from '@material-ui/core';
import YaleNusCover from '../../assets/images/cards/yale-nus.png';
import HandleDescription from '../utility/HandleDescription';

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget.';

interface YaleNusCardProps {
  direction: 'left' | 'right';
}

const YaleNusCard: React.FC<YaleNusCardProps> = (props: YaleNusCardProps) => {

  const [showDescription, setShowDescription] = useState<boolean>(false);

  return (
    <Card elevation={5}>
      <CardActionArea
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        <HandleDescription
          img={YaleNusCover}
          name='Yale-NUS'
          description={description}
          showDescription={showDescription}
          direction={props.direction}
        />
      </CardActionArea>
      <CardContent>
        <time>July 2020</time>
        <Typography variant='subtitle1' component='h1'>Yale-NUS College</Typography>
        <Typography variant='body1' component='h2'>[Undergraduate]</Typography>
      </CardContent>
    </Card>
  );
}

export default YaleNusCard;