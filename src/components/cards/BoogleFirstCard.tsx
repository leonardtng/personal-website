import React, { useState } from 'react';
import { Typography, Card, CardContent, CardActionArea } from '@material-ui/core';
import BoogleCover from '../../assets/images/cards/boogle-hq.jpg';
import HandleDescription from '../utility/HandleDescription';

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget.'

const BoogleFirstCard: React.FC = () => {

  const [showDescription, setShowDescription] = useState<boolean>(false);

  return (
    <Card elevation={5}>
      <CardActionArea
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        <HandleDescription
          img={BoogleCover}
          name='Boogle HQ'
          description={description}
          showDescription={showDescription}
        />
      </CardActionArea>
      <CardContent>
        <time>Oct 2019</time>
        <Typography variant='subtitle1' component='h1'>Boogle Group Ltd</Typography>
        <Typography variant='body1' component='h2'>[Software Engineer Intern]</Typography>
      </CardContent>
    </Card>
  );
}

export default BoogleFirstCard;