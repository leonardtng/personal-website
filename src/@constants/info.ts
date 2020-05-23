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
    captionFirstLine: "I'm an imaginative and fun-loving Software Engineer,",
    captionSecondLine: " based in Singapore"
  },
  about: {
    title: "I write code",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget. Vivamus at scelerisque libero. Ut odio eros, pretium vitae orci vel, sodales tempus arcu. Fusce ultricies fermentum libero, vel rhoncus mi mattis egestas. Donec suscipit mattis libero. Donec euismod eget elit eget dignissim. Proin viverra enim quis auctor ornare."
  },
  experience: {
    title: "What I've Done So Far",
    subtitle: "My journey begins her",
    caption: "(Hover over images for more!)",
    cards: cards,
  },
  abilities: {
    title: "What I Can Do",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget. Vivamus at scelerisque libero. Ut odio eros, pretium vitae orci vel, sodales tempus arcu. Fusce ultricies fermentum libero, vel rhoncus mi mattis egestas. Donec suscipit mattis libero. Donec euismod eget elit eget dignissim. Proin viverra enim quis auctor ornare.",
    subsections: subsections,
  },
  travel: {
    title: "Where I've Been",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet efficitur lectus, vel tempus sem pretium eget. Vivamus at scelerisque libero. Ut odio eros, pretium vitae orci vel, sodales tempus arcu. Fusce ultricies fermentum libero, vel rhoncus mi mattis egestas. Donec suscipit mattis libero. Donec euismod eget elit eget dignissim. Proin viverra enim quis auctor ornare.",
    places: places,
    pictures: pictures,
  }
}