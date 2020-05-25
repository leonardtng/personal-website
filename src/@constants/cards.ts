import NjcCover from '../assets/images/cards/national-junior-college-1024x683.jpg';
import BoogleCover from '../assets/images/cards/boogle-hq.jpg';
import YaleNusCover from '../assets/images/cards/yale-nus.png';
import PersonalWebsiteV1Cover from '../assets/images/cards/personal-website-v1.png';
import { CardData } from '../@types';

import NJC1 from '../assets/images/cards/national-junior-college/carousel1.jpg';
import Boogle1 from '../assets/images/cards/boogle/carousel1.jpg';
import PW1 from '../assets/images/cards/personal-website-v1/carousel1.png';
import PW2 from '../assets/images/cards/personal-website-v1/carousel2.png';

export const cards: Array<CardData> = [
  {
    title: "National Junior College",
    date: "Nov 2017",
    role: "[GCE 'A' Level Graduate]",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget.",
    image: NjcCover,
    cardDialogContent: {
      carousel: [
        {
          caption: 'NJC',
          image: NjcCover
        },
        {
          caption: 'Picked up saxophone here!',
          image: NJC1
        },
      ],
      infoList: [
        {
          infoTitle: 'Subjects',
          infoItems: [
            'H2 Mathematics',
            'H2 Economics',
            'H2 Physics',
            'H2 Chemistry',
            'H3 Economics'
          ],
        },
        {
          infoTitle: 'Awards and Scholarships',
          infoItems: [
            'MOE Pre-U Scholarship',
            'YDSP Academic Award for Mathematics'
          ]
        }
      ],
    }
  },
  {
    title: "Boogle Group Ltd",
    date: "Oct 2019",
    role: "[Software Engineer]",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget.",
    image: BoogleCover,
    cardDialogContent: {
      carousel: [
        {
          caption: 'Boogle',
          image: BoogleCover
        },
        {
          caption: 'Interacting with a younger batch of interns',
          image: Boogle1
        },
      ],
      infoList: [
        {
          infoTitle: 'Skills',
          infoItems: [
            'React',
            'Typescript',
            'Python',
            'Django',
            'MySQL',
            'AWS'
          ]
        }
      ]

    }
  },
  {
    title: "Personal Website V1",
    date: "June 2020",
    role: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget.",
    image: PersonalWebsiteV1Cover,
    cardDialogContent: {
      carousel: [
        {
          caption: 'Personal Website Cover',
          image: PW1,
        },
        {
          caption: 'Tried out creating with dark theme',
          image: PW2,
        },
      ],
      infoList: [
        {
          infoTitle: 'Stack',
          infoItems: [
            'React',
            'Typescript',
            'AWS',
          ]
        }
      ]
    }
  },
  {
    title: "Yale-NUS College",
    date: "July 2020",
    role: "[Undergraduate]",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget.",
    image: YaleNusCover,
    cardDialogContent: {
      carousel: [
        {
          caption: 'Yale-NUS',
          image: YaleNusCover
        },
      ],
      infoList: [
        {
          infoTitle: 'Awards and Scholarships',
          infoItems: [
            'Global Leader Scholar',
          ]
        }
      ]
    }
  },
]