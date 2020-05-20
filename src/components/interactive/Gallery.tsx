import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Bali1 from '../../assets/images/gallery/bali1.jpg';
import Bali2 from '../../assets/images/gallery/bali2.jpg';
import Bali3 from '../../assets/images/gallery/bali3.jpg';
import Bali4 from '../../assets/images/gallery/bali4.jpg';
import Bali5 from '../../assets/images/gallery/bali5.jpg';
import Bali6 from '../../assets/images/gallery/bali6.jpg';
import Bali7 from '../../assets/images/gallery/bali7.jpg';
import Bangkok1 from '../../assets/images/gallery/bangkok1.jpg';
import Dubai1 from '../../assets/images/gallery/dubai1.jpg';
import Dubai2 from '../../assets/images/gallery/dubai2.jpg';
import Dubai3 from '../../assets/images/gallery/dubai3.jpg';
import Jordan1 from '../../assets/images/gallery/jordan1.jpg';
import Jordan2 from '../../assets/images/gallery/jordan2.jpg';
import Jordan3 from '../../assets/images/gallery/jordan3.jpg';
import Jordan4 from '../../assets/images/gallery/jordan4.jpg';
import Jordan5 from '../../assets/images/gallery/jordan5.jpg';
import Jordan6 from '../../assets/images/gallery/jordan6.jpg';
import Jordan7 from '../../assets/images/gallery/jordan7.jpg';
import Jordan8 from '../../assets/images/gallery/jordan8.jpg';
import Jordan9 from '../../assets/images/gallery/jordan9.jpg';
import Jordan10 from '../../assets/images/gallery/jordan10.jpg';
import Jordan11 from '../../assets/images/gallery/jordan11.jpg';
import Jordan12 from '../../assets/images/gallery/jordan12.jpg';
import Jordan13 from '../../assets/images/gallery/jordan13.jpg';
import Krabi1 from '../../assets/images/gallery/krabi1.jpg';
import Krabi2 from '../../assets/images/gallery/krabi2.jpg';
import Krabi3 from '../../assets/images/gallery/krabi3.jpg';
import Krabi4 from '../../assets/images/gallery/krabi4.jpg';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 0
  },
  column: {
    flex: 'calc(25% - 8px)',
    maxWidth: '25%',
    padding: '0 4px',
    '& img': {
      marginTop: 4,
      veritcalAlign: 'middle',
      width: '100%',
      filter: 'grayscale(80%)',
      transition: '0.6s ease',
    },
    '& img:hover': {
      filter: 'grayscale(0%)',
      transform: 'scale(1.03)',
    },
  },
  '@media only screen and (max-width: 1200px)': {
    column: {
      flex: 'calc(50% - 8px)',
      maxWidth: '50%',
    },
  },
  '@media only screen and (max-width: 600px)': {
    column: {
      flex: 'calc(100% - 8px)',
      maxWidth: '100%',
    },
  },
}));

const Gallery: React.FC = () => {
  const classes = useStyles();


  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <img src={Bali1} alt='Bali' style={{ width: '100%' }} />
        <img src={Bangkok1} alt='Bangkok' style={{ width: '100%' }} />
        <img src={Bali7} alt='Jordan' style={{ width: '100%' }} />
        <img src={Dubai3} alt='Dubai' style={{ width: '100%' }} />
        <img src={Dubai1} alt='Dubai' style={{ width: '100%' }} />
        <img src={Jordan13} alt='Jordan' style={{ width: '100%' }} />
        <img src={Krabi2} alt='Krabi' style={{ width: '100%' }} />
      </div>
      <div className={classes.column}>
        <img src={Bali3} alt='Bali' style={{ width: '100%' }} />
        <img src={Dubai2} alt='Dubai' style={{ width: '100%' }} />
        <img src={Jordan10} alt='Jordan' style={{ width: '100%' }} />
        <img src={Jordan1} alt='Jordan' style={{ width: '100%' }} />
        <img src={Bali6} alt='Bali' style={{ width: '100%' }} />
        <img src={Jordan9} alt='Jordan' style={{ width: '100%' }} />
        <img src={Jordan2} alt='Jordan' style={{ width: '100%' }} />
        <img src={Bali4} alt='Bali' style={{ width: '100%' }} />
      </div>
      <div className={classes.column}>
        <img src={Jordan5} alt='Jordan' style={{ width: '100%' }} />
        <img src={Jordan6} alt='Jordan' style={{ width: '100%' }} />
        <img src={Jordan7} alt='Jordan' style={{ width: '100%' }} />
        <img src={Jordan8} alt='Jordan' style={{ width: '100%' }} />
        <img src={Krabi1} alt='Krabi' style={{ width: '100%' }} />
        <img src={Jordan11} alt='Jordan' style={{ width: '100%' }} />
        <img src={Jordan12} alt='Jordan' style={{ width: '100%' }} />
      </div>
      <div className={classes.column}>
        <img src={Bali2} alt='Bali' style={{ width: '100%' }} />
        <img src={Bali5} alt='Bali' style={{ width: '100%' }} />
        <img src={Krabi4} alt='Krabi' style={{ width: '100%' }} />
        <img src={Jordan3} alt='Jordan' style={{ width: '100%' }} />
        <img src={Jordan4} alt='Jordan' style={{ width: '100%' }} />
        <img src={Bali3} alt='Bali' style={{ width: '100%' }} />
        <img src={Krabi3} alt='Krabi' style={{ width: '100%' }} />
      </div>

    </div>
  );
}

export default Gallery;