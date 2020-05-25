import NjcCover from '../assets/images/cards/national-junior-college-1024x683.jpg';
import BoogleCover from '../assets/images/cards/boogle-hq.jpg';
import YaleNusCover from '../assets/images/cards/yale-nus.png';
import PersonalWebsiteV1Cover from '../assets/images/cards/personal-website-v1.png'
import { CardData } from '../@types';

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
          caption: 'NJC',
          image: NjcCover
        }
      ],
      infoTitle: 'Subjects',
      infoItems: [
        'H2 Mathematics',
        'H2 Economics',
        'H2 Physics',
        'H2 Chemistry',
        'H3 Economics'
      ]
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
          caption: 'Boogle',
          image: BoogleCover
        },
        {
          caption: 'Boogle',
          image: BoogleCover
        },
        {
          caption: 'Boogle',
          image: BoogleCover
        },
        {
          caption: 'Boogle',
          image: BoogleCover
        },
        {
          caption: 'Boogle',
          image: BoogleCover
        }
      ],
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
          caption: 'Personal Website',
          image: PersonalWebsiteV1Cover
        },
        {
          caption: 'Personal Website',
          image: PersonalWebsiteV1Cover
        }
      ],
      infoTitle: 'Stack',
      infoItems: [
        'React',
        'Typescript',
        'AWS',
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
      infoTitle: 'Major',
      infoItems: [
        '',
      ]
    }
  },
]