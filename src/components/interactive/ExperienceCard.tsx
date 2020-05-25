import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import HandleDescription from './HandleDescription';
import { CardDialogContent } from '../../@types';

interface ExperienceCardProps {
  title: string;
  date: string;
  role: string;
  description: string;
  descriptionSecondPart?: string;
  image: string;
  cardDialogContent: CardDialogContent;
  direction: 'left' | 'right';
}

const ExperienceCard: React.FC<ExperienceCardProps> = (props: ExperienceCardProps) => {
  return (
    <Card elevation={5}>
      <HandleDescription
        image={props.image}
        title={props.title}
        description={props.description}
        descriptionSecondPart={props.descriptionSecondPart}
        cardDialogContent={props.cardDialogContent}
        direction={props.direction}
      />
      <CardContent>
        <time>{props.date}</time>
        <Typography variant='subtitle1' component='h1'>{props.title}</Typography>
        <Typography variant='body1' component='h2'>{props.role}</Typography>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
