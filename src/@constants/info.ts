import ProfileImage from '../assets/images/profile.png';
import ProfileImageDark from '../assets/images/profile-dark.png';
import { places } from './places';
import { pictures } from './pictures';
import { subsections } from './subsections';
import { cards } from './cards';
import { Info } from '../@types';

export const info: Info = {
  profile: {
    image: ProfileImage,
    imageDark: ProfileImageDark,
    captionFirstLine: `I'm an imaginative and fun-loving Software Engineer,`,
    captionSecondLine: ` based in Singapore`
  },
  about: {
    title: `I write code`,
    description: `And not just any code. I believe in writing code with structure and readability, and as a developer, enjoys optimising and improving the quality of the code 
    that I write. I have good knowledge in front-end, back-end, as well as mobile application development, and plans to venture into the field of machine learning and
    artificial intelligence. I am also a technology enthusiast, who is passionate about the potential of technology in changing the world. From simple websites
    to complex systems, I enjoy the process of building software, solving complex problems, and working with others to produce amazing projects.`,
  },
  experience: {
    title: `What I've Done So Far`,
    subtitle: `My journey begins here`,
    caption: `(Click for more!)`,
    cards: cards,
  },
  abilities: {
    title: `What I Can Do`,
    description:  `I have been coding at a professional level for 5 months and have experience in an array of modern web technologies such as React, Typescript, React Native, Django, 
    and Django REST Framework. I am also adept in using development tools such as git and AWS, and design / prototyping tools such as Invision Studio and Adobe XD.
    On the sideline, I enjoy experimenting with machine learning models and building projects with Arduino and Raspberry Pi.`,
    subsections: subsections,
  },
  travel: {
    title: `Where I've Been`,
    description: `Travelling greatly excites me. I love experiencing new cultures, seeing breathtaking sceneries, as well as eating amazing food, and I hope to one day 
    fill this map with even more locations that I've visited.`,
    caption: `Here are some snapshots I took from the places I've been recently.`,
    places: places,
    pictures: pictures,
  }
}