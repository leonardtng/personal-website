import Bali1 from '../assets/images/gallery/bali1.jpg';
import Bali2 from '../assets/images/gallery/bali2.jpg';
import Bali3 from '../assets/images/gallery/bali3.jpg';
import Bali4 from '../assets/images/gallery/bali4.jpg';
import Bali5 from '../assets/images/gallery/bali5.jpg';
import Bali6 from '../assets/images/gallery/bali6.jpg';
import Bali7 from '../assets/images/gallery/bali7.jpg';
import Bangkok1 from '../assets/images/gallery/bangkok1.jpg';
import Dubai1 from '../assets/images/gallery/dubai1.jpg';
import Dubai2 from '../assets/images/gallery/dubai2.jpg';
import Dubai3 from '../assets/images/gallery/dubai3.jpg';
import Jordan1 from '../assets/images/gallery/jordan1.jpg';
import Jordan2 from '../assets/images/gallery/jordan2.jpg';
import Jordan3 from '../assets/images/gallery/jordan3.jpg';
import Jordan4 from '../assets/images/gallery/jordan4.jpg';
import Jordan5 from '../assets/images/gallery/jordan5.jpg';
import Jordan6 from '../assets/images/gallery/jordan6.jpg';
import Jordan7 from '../assets/images/gallery/jordan7.jpg';
import Jordan8 from '../assets/images/gallery/jordan8.jpg';
import Jordan9 from '../assets/images/gallery/jordan9.jpg';
import Jordan10 from '../assets/images/gallery/jordan10.jpg';
import Jordan11 from '../assets/images/gallery/jordan11.jpg';
import Jordan12 from '../assets/images/gallery/jordan12.jpg';
import Jordan13 from '../assets/images/gallery/jordan13.jpg';
import Krabi1 from '../assets/images/gallery/krabi1.jpg';
import Krabi2 from '../assets/images/gallery/krabi2.jpg';
import Krabi3 from '../assets/images/gallery/krabi3.jpg';
import Krabi4 from '../assets/images/gallery/krabi4.jpg';
import { vw } from '../@utils/useScrollPosition';
import { Picture } from '../@types';

const SIZE_THRESHOLD = 1400;

export const pictures: Array<Picture> = [
  {
    img: Bali1,
    title: 'Bali',
    cols: 1
  },
  {
    img: Bali2,
    title: 'Bali',
    cols: vw < SIZE_THRESHOLD ? 1 : 2
  },
  {
    img: Jordan1,
    title: 'Jordan',
    cols: 1
  },
  {
    img: Jordan2,
    title: 'Jordan',
    cols: 1
  },
  {
    img: Dubai1,
    title: 'Dubai',
    cols: 1
  },
  {
    img: Jordan4,
    title: 'Jordan',
    cols: 1
  },
  {
    img: Bali6,
    title: 'Bali',
    cols: vw < SIZE_THRESHOLD ? 1 : 2
  },
  {
    img: Bali5,
    title: 'Bali',
    cols: 1
  },
  {
    img: Jordan8,
    title: 'Jordan',
    cols: 1
  },
  {
    img: Bangkok1,
    title: 'Bangkok',
    cols: vw < SIZE_THRESHOLD ? 1 : 2
  },
  {
    img: Jordan7,
    title: 'Jordan',
    cols: 1
  },
  {
    img: Krabi4,
    title: 'Krabi',
    cols: 1
  },
  {
    img: Krabi3,
    title: 'Krabi',
    cols: 1
  },
  {
    img: Dubai2,
    title: 'Dubai',
    cols: 1
  },
  {
    img: Bali3,
    title: 'Bali',
    cols: vw < SIZE_THRESHOLD ? 1 : 2
  },
  {
    img: Jordan5,
    title: 'Jordan',
    cols: 1
  },
  {
    img: Jordan11,
    title: 'Jordan',
    cols: 1
  },
  {
    img: Jordan12,
    title: 'Jordan',
    cols: 1
  },
  {
    img: Dubai3,
    title: 'Dubai',
    cols: 1
  },
  {
    img: Jordan6,
    title: 'Jordan',
    cols: vw < SIZE_THRESHOLD ? 1 : 2
  },
  {
    img: Bali7,
    title: 'Bali',
    cols: 1
  },
  {
    img: Bali4,
    title: 'Bali',
    cols: vw < SIZE_THRESHOLD ? 1 : 2
  },
  {
    img: Jordan9,
    title: 'Jordan',
    cols: 1
  },
  {
    img: Krabi2,
    title: 'Krabi',
    cols: 1
  },
  {
    img: Jordan3,
    title: 'Jordan',
    cols: vw < SIZE_THRESHOLD ? 1 : 2
  },
  {
    img: Krabi1,
    title: 'Krabi',
    cols: 1
  },
  {
    img: Jordan10,
    title: 'Jordan',
    cols: 1
  },
  {
    img: Jordan13,
    title: 'Jordan',
    cols: 1
  },
];