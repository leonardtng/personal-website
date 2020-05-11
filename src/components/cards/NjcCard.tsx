import React, { useState } from 'react';
import { Typography, Card, CardContent, CardActionArea } from '@material-ui/core';
import NjcCover from '../../assets/images/cards/national-junior-college-1024x683.jpg';
import HandleDescription from '../utility/HandleDescription';

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget.';

interface NjcCardProps {
  direction: 'left' | 'right';
}

const NjcCard: React.FC<NjcCardProps> = (props: NjcCardProps) => {

  const [showDescription, setShowDescription] = useState<boolean>(false);

  return (
    <Card elevation={5}>
      <CardActionArea
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        <HandleDescription
          img={NjcCover}
          name='NJC'
          description={description}
          showDescription={showDescription}
          direction={props.direction}
        />
      </CardActionArea>
      <CardContent>
        <time>Nov 2017</time>
        <Typography variant='subtitle1' component='h1'>National Junior College</Typography>
        <Typography variant='body1' component='h2'>[GCE 'A' Level Graduate]</Typography>
      </CardContent>
    </Card>
  );
}

export default NjcCard;