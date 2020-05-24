import NjcCover from '../assets/images/cards/national-junior-college-1024x683.jpg';
import BoogleCover from '../assets/images/cards/boogle-hq.jpg';
import YaleNusCover from '../assets/images/cards/yale-nus.png';
import PersonalWebsiteV1Cover from '../assets/images/cards/personal-website-v1.png'
import { Card } from '../@types';

export const cards: Array<Card> = [
  {
    title: "National Junior College",
    date: "Nov 2017",
    role: "[GCE 'A' Level Graduate]",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget.",
    image: NjcCover,
  },
  {
    title: "Boogle Group Ltd",
    date: "Oct 2019",
    role: "[Software Engineer]",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget.",
    image: BoogleCover,
  },
  {
    title: "Personal Website V1",
    date: "June 2020",
    role: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget.",
    image: PersonalWebsiteV1Cover,
  },
  {
    title: "Yale-NUS College",
    date: "July 2020",
    role: "[Undergraduate]",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget.",
    image: YaleNusCover,
  },
]