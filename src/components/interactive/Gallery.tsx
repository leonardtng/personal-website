import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { GridList, GridListTile } from '@material-ui/core';
import { vw } from '../../@utils/useScrollPosition';
import { info } from '../../@constants/info';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.default,
    '& li': {
      display: 'block',
      objectFit: 'cover',
      overflow: 'hidden',
      padding: '0 !important',
      border: `2px solid ${theme.palette.background.default}`,
      '& .MuiGridListTile-tile': {
        filter: 'grayscale(90%)',
        transition: '0.6s ease',
      },
    },
    '& li:hover': {
      '& .MuiGridListTile-tile': {
        filter: 'grayscale(0%)',
        transform: 'scale(1.08)'
      },
    },
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  '@media only screen and (max-width: 1200px)': {
    root: {
      '& .MuiGridListTile-tile': {
        filter: 'grayscale(0%)',
      },
    },
    column: {
      flex: 'calc(50% - 8px)',
      maxWidth: '50%',
    },
  },
  '@media only screen and (max-width: 600px)': {
    root: {
      '& .MuiGridListTile-tile': {
        filter: 'grayscale(0%)',
      },
    },
    column: {
      flex: 'calc(100% - 8px)',
      maxWidth: '100%',
    },
  },
}));

const Gallery: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={vw < 600 ? 1 : vw < 1200 ? 2 : 5}>
        {info.travel.pictures.map((tile: any) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default Gallery;