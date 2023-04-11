import React from "react";
import NjcCover from "../images/cards/national-junior-college/national-junior-college-1024x683.jpg";
import BoogleCover from "../images/cards/boogle/boogle-hq.jpg";
import PersonalWebsiteV1Cover from "../images/cards/personal-website-v1/personal-website-v1.png";
import YaleNusCover from "../images/cards/yale-nus/yale-nus.png";
import CodeCacheCover from "../images/cards/codecache/codecache.png";
import LoveLetterGeneratorCover from "../images/cards/love-letter-generator/love-letter-generator.png";
import DathenaCover from "../images/cards/dathena/dathena.png";
import CryptoscapesCover from "../images/cards/cryptoscapes/cryptoscapes.png";
import SavingYaleNusCover from "../images/cards/saving-yale-nus/saving-yale-nus.png";
import BytedanceCover from "../images/cards/bytedance/bytedance.png";
import ApeWallpapersCover from "../images/cards/ape-wallpapers/ape-wallpapers.png";
import DustLabsCover from "../images/cards/dust-labs/dust-labs.png";

import { CardData } from "../../@types";

import NJC1 from "../images/cards/national-junior-college/carousel1.jpg";
import Boogle1 from "../images/cards/boogle/carousel1.jpg";
import Boogle2 from "../images/cards/boogle/carousel2.jpg";
import PW1 from "../images/cards/personal-website-v1/carousel1.png";
import PW2 from "../images/cards/personal-website-v1/carousel2.png";
import YNC1 from "../images/cards/yale-nus/carousel1.jpg";
import YNC2 from "../images/cards/yale-nus/carousel2.jpg";
import YNC3 from "../images/cards/yale-nus/carousel3.jpg";
import C1 from "../images/cards/codecache/carousel1.png";
import C2 from "../images/cards/codecache/carousel2.png";
import C3 from "../images/cards/codecache/carousel3.png";
import C4 from "../images/cards/codecache/carousel4.png";
import C5 from "../images/cards/codecache/carousel5.png";
import LLG1 from "../images/cards/love-letter-generator/carousel1.png";
import LLG2 from "../images/cards/love-letter-generator/carousel2.png";
import D1 from "../images/cards/dathena/carousel1.jpg";
import D2 from "../images/cards/dathena/carousel2.jpg";
import CS1 from "../images/cards/cryptoscapes/carousel1.png";
import CS2 from "../images/cards/cryptoscapes/carousel2.png";
import CS3 from "../images/cards/cryptoscapes/carousel3.png";
import CS4 from "../images/cards/cryptoscapes/carousel4.png";
import CS5 from "../images/cards/cryptoscapes/carousel5.png";
import CS6 from "../images/cards/cryptoscapes/carousel6.png";
import SYNC1 from "../images/cards/saving-yale-nus/carousel1.png";
import SYNC2 from "../images/cards/saving-yale-nus/carousel2.png";
import SYNC3 from "../images/cards/saving-yale-nus/carousel3.png";
import SYNC4 from "../images/cards/saving-yale-nus/carousel4.png";
import SYNC5 from "../images/cards/saving-yale-nus/carousel5.png";
import BD1 from "../images/cards/bytedance/carousel1.png";
import BD2 from "../images/cards/bytedance/carousel2.png";
import BD3 from "../images/cards/bytedance/carousel3.png";
import BD4 from "../images/cards/bytedance/carousel4.png";
import BD5 from "../images/cards/bytedance/carousel5.png";
import BD6 from "../images/cards/bytedance/carousel6.png";
import AW1 from "../images/cards/ape-wallpapers/carousel1.png";
import AW2 from "../images/cards/ape-wallpapers/carousel2.png";
import AW3 from "../images/cards/ape-wallpapers/carousel3.png";
import AW4 from "../images/cards/ape-wallpapers/carousel4.png";
import { Link } from "@material-ui/core";

export const cards: Array<CardData> = [
  {
    title: `National Junior College`,
    date: `Jan 2012 - Nov 2017`,
    role: `GCE 'A' Level Graduate`,
    description: `I graduated from National Junior College in 2017 as a GCE 'A' Level Graduate from the Integrated Programme. My time here taught me to be a critical thinker and 
    nurtured my penchant for problem solving. It was also NJC that gave me my first leadership opportunity as the president of the NJC Symphonic Band, where I had the 
    experience of being part of a great team, and leading a great community.`,
    image: NjcCover,
    cardDialogContent: {
      carousel: [
        {
          caption: `NJC`,
          image: NjcCover,
        },
        {
          caption: `Picked up the saxophone here!`,
          image: NJC1,
        },
      ],
      infoList: [
        {
          infoTitle: `Subjects`,
          infoItems: [
            `H2 Mathematics`,
            `H2 Economics`,
            `H2 Physics`,
            `H2 Chemistry`,
            `H3 Economics`,
          ],
        },
        {
          infoTitle: `Awards and Scholarships`,
          infoItems: [
            `MOE Pre-U Scholarship`,
            `YDSP Academic Award for Mathematics`,
          ],
        },
        {
          infoTitle: `Positions Held`,
          infoItems: [
            `Aug 2014 - Aug 2016: Section Leader, Symphonic Band`,
            `Aug 2016 - Aug 2017: President, Symphonic Band`,
          ],
        },
      ],
    },
  },
  {
    title: `Boogle Group Ltd`,
    date: `Oct 2019 - Sep 2020`,
    role: `Software Engineer Intern`,
    description: `My time at this vibrant startup has been nothing less than fruitful. It was here where I started designing and building sophisticated software from the ground up, and 
    learnt much of the coding best practices and standards which I still practice heavily today. During the months I was here, I was heavily involved in the front-end
    development, while occasionally finding myself immersed in the back-end and mobile development as well. I also had the opportunity to be part of an amazing product team,
    which allowed me, under the guidance of brilliant mentors, to carry out the process of bringing a product through its development cycle, from the ideation, 
    to the designing, coding, testing, and eventually, the deployment of the product.`,
    image: BoogleCover,
    cardDialogContent: {
      carousel: [
        {
          caption: `Boogle`,
          image: BoogleCover,
        },
        {
          caption: `Interacting with a younger batch of interns`,
          image: Boogle1,
        },
        {
          caption: `Celebrating Christmas`,
          image: Boogle2,
        },
      ],
      infoList: [
        {
          infoTitle: `Positions Held`,
          infoItems: [
            `Oct 2019 - Jan 2020: Product Management Specialist Intern`,
            `Jan 2020 - Jul 2020: Software Engineer Intern`,
          ],
        },
        {
          infoTitle: `Skills`,
          infoItems: [
            `React`,
            `Django`,
            `React Native`,
            `TypeScript`,
            `Python`,
            `MySQL`,
            `AWS`,
          ],
        },
      ],
    },
  },
  {
    title: `Personal Website`,
    date: `Launched June 2020`,
    role: `First Iteration of My Online Portfolio`,
    description: `This website is the very first personal project I designed, built, and deployed on my own, and is also my first take on a personal website. Not only did 
    building this website allow me to put my development skills to the test, it was also a great sandbox for me to explore and experiment with new development and design techniques
    such as implementing different themes (try it out!`,
    descriptionSecondPart: `), using React hooks, and being creative with scroll effects.`,
    projectLink: `https://github.com/leonardtng/personal-website`,
    image: PersonalWebsiteV1Cover,
    cardDialogContent: {
      carousel: [
        {
          caption: `Personal Website Cover`,
          image: PW1,
        },
        {
          caption: `Tried out creating with dark theme`,
          image: PW2,
        },
      ],
      infoList: [
        {
          infoTitle: `Stack`,
          infoItems: [`React`, `TypeScript`, `AWS`],
        },
      ],
    },
  },
  {
    title: `Yale-NUS College`,
    date: `July 2020 - Present`,
    role: `Bachelor of Science, Computer Science`,
    description: `I am currently a sophomore at Yale-NUS College in the class of 2024. While I cannot be more excited to join this thriving liberal arts college, what the future holds for me here remains to be seen.`,
    image: YaleNusCover,
    cardDialogContent: {
      carousel: [
        {
          caption: `Yale-NUS`,
          image: YaleNusCover,
        },
        {
          caption: `Conducting a web development workshop`,
          image: YNC1,
        },
        {
          caption: `Explaining the code of a basic website`,
          image: YNC2,
        },
        {
          caption: `Debugging a workshop attendee's code`,
          image: YNC3,
        },
      ],
      infoList: [
        {
          infoTitle: `Academic Grades`,
          infoItems: [`CAP: 4.84 / 5.0`],
        },
        {
          infoTitle: `Awards and Scholarships`,
          infoItems: [`Global Leader Scholar`],
        },
        {
          infoTitle: `Positions Held`,
          infoItems: [
            `Aug 2020 - Dec 2020: React.js Instructor, YNC_Hacks`,
            `Dec 2020 - Jan 2022: Vice President, YNC_Hacks`,
          ],
        },
        {
          infoTitle: `Core Modules`,
          infoItems: [
            `Introductory Data Structures and Algorithms - A+`,
            `Introduction to Computer Science - A+`,
            `Programming for Data Science - A+`,
            `Introduction to Data Science - A+`,
            `Calculus - A+`,
          ],
        },
        {
          infoTitle: `Other Modules`,
          infoItems: [
            `Philosophy and Political Thought - A`,
            `Literature and Humanities - A-`,
            `Scientific Inquiry - A`,
            `Proof - A-`,
            `Model Social Thought - A-`,
            `Introduction to Python - A+`,
            `Geometry and the Emergence of Perspective - A-`,
          ],
        },
      ],
    },
  },
  {
    title: `CodeCache`,
    date: `Launched November 2020`,
    role: `A Lightweight Code Snippet Manager`,
    description: `My first full-stack project I designed, built and deployed during my first semester in college consisting of both a front-end and a back-end. Initially, 
    this project started off as a simple idea for a site that can store my code snippets. I eventually saw this idea through to build the final product, complete 
    with its own authentication system and fully functional code editor in a clean and simple UI. This project has allowed me to 
    improve on both my front-end and back-end skills, as well as important development tools such as AWS EC2, Lambda, and Docker.`,
    projectLink: `https://www.codecache.io`,
    image: CodeCacheCover,
    cardDialogContent: {
      carousel: [
        {
          caption: `CodeCache`,
          image: CodeCacheCover,
        },
        {
          caption: `CodeCache Landing Page`,
          image: C1,
        },
        {
          caption: `CodeCache Dashboard`,
          image: C2,
        },
        {
          caption: `CodeCache Add Snippet`,
          image: C3,
        },
        {
          caption: `CodeCache Stats Interface`,
          image: C4,
        },
        {
          caption: `CodeCache Settings`,
          image: C5,
        },
      ],
      infoList: [
        {
          infoTitle: `Stack`,
          infoItems: [
            `React`,
            `TypeScript`,
            `Django REST Framework`,
            `Docker`,
            `AWS`,
          ],
        },
      ],
    },
  },
  {
    title: `Love Letter Generator`,
    date: `Launched February 2021`,
    role: `Compose Romantic Letters!`,
    description: `This project is a simple love letter generator which I had a lot of fun building for Valentine's Day in 2021. 
    It was initially meant as a modern spinoff of a love letter generator made back in the 1950s by one of the first software engineers, 
    Christopher Strachey, which a college professor, Professor Olivier Danvy, showed me after a computer science class (link can be found at the footer of the project).
    Surprisingly, the project itself became semi-viral on Valentine's and many of the letters exchanged on college was actually from the generator. 
    Professor Danvy loved it and even decided to add my name to his roster of Computer Scientists in his lecture notes 
    right underneath Christopher Strachy himself!`,
    projectLink: `https://www.lovelettergenerator.com`,
    image: LoveLetterGeneratorCover,
    cardDialogContent: {
      carousel: [
        {
          caption: `Love Letter Generator`,
          image: LLG1,
        },
        {
          caption: `Love Letter Generator Landing Page`,
          image: LLG2,
        },
      ],
      infoList: [
        {
          infoTitle: `Stack`,
          infoItems: [`React`, `TypeScript`, `AWS`],
        },
      ],
    },
  },
  {
    title: `Dathena`,
    date: `May 2021 - Aug 2021`,
    role: `Software Engineer Intern (Product)`,
    description: `My time at this energetic deep-tech AI and data protection company was an amazing eye-opener into the technology industry. Here, I was given the opportunity to work with some
    of the brightest software engineers, product managers, and data science experts I have seen so far in my professional career. I was exposed to the challenges of creating a 
    complex enterprise-level product, the best practices of managing a gigantic codebase, and even got the opportunity to lead two sprints as a scrum master in the company's
    agile software development workflow. While the initial onboarding was indeed challenging, overcoming this phase was certainly rewarding as I was able to contribute greatly
    to their flagship product, Dathena Security, which will ship to a multitude of clients internationally. Knowing that the code I have written will positively impact a client's data
    security definitely makes my few months at Dathena all the more fulfilling.`,
    image: DathenaCover,
    cardDialogContent: {
      carousel: [
        {
          caption: `Dathena`,
          image: DathenaCover,
        },
        {
          caption: `Dathena Social House`,
          image: D1,
        },
        {
          caption: `Dathena Backend Team`,
          image: D2,
        },
      ],
      infoList: [
        {
          infoTitle: `Skills`,
          infoItems: [
            `React`,
            `TypeScript`,
            `Redux`,
            `styled-components`,
            `D3.js`,
            `React Testing Library`,
            `Jira`,
          ],
        },
      ],
    },
  },
  {
    title: `Cryptoscapes`,
    date: `Launched July 2021`,
    role: `Cryptocurrency Prices, Charts and Market Overview`,
    description: `Cryptoscapes started out from a few skills I wanted to learn and practice over my summer break from college, the 
    state management library Redux, atomic design, and project management. After tinkering with a bunch of cryptocurrency data with 
    Redux, I eventually decided to create a simple UI to display this data, through the use of charts and graphs in a clean dashboard. 
    This project has allowed me to improve on my front-end skills, learn useful libraries such as Redux, and implement the
    atomic design file structure on top of managing the entire project with the tools provided by GitHub Projects.`,
    projectLink: `https://www.cryptoscapes.org`,
    image: CryptoscapesCover,
    cardDialogContent: {
      carousel: [
        {
          caption: `Cryptoscapes`,
          image: CryptoscapesCover,
        },
        {
          caption: `Cryptoscapes Trends Page`,
          image: CS1,
        },
        {
          caption: `Cryptoscapes Coins Page`,
          image: CS2,
        },
        {
          caption: `Cryptoscapes Coin Details Chart`,
          image: CS3,
        },
        {
          caption: `Cryptoscapes Developer Details`,
          image: CS4,
        },
        {
          caption: `Cryptoscapes Exchanges Page`,
          image: CS5,
        },
        {
          caption: `Cryptoscapes Updates Page`,
          image: CS6,
        },
      ],
      infoList: [
        {
          infoTitle: `Stack`,
          infoItems: [`React`, `TypeScript`, `Redux`, `AWS`],
        },
      ],
    },
  },
  {
    title: `Saving Yale-NUS`,
    date: `Launched September 2021`,
    role: `A Collection of Memoirs for Our College`,
    description: `On 27 August 2021, the National University of Singapore announced the plan to ‘merge’ Yale-NUS College 
    with the University Scholars Programme by 2025. In short: The Yale-NUS we knew would be gone in four years.
    The announcement and its finality were a complete shock to some 2,500 Yale-NUS staff, faculty, students and alumni. 
    As a result, I came together with a few of my friends to work on this website to consolidate the reflections and expressions 
    of grief by the college community, consisting of poems, artworks, essays, etc. We hope that this website serves as an archive of these
    commemorations, and will never be forgotten even long after the college ceases to exist.
    The website uses Python scripts that converts content from Google Forms into a markdown file which is then rendered on a NextJS blog.`,
    projectLink: `https://www.savingyalenus.com`,
    image: SavingYaleNusCover,
    cardDialogContent: {
      carousel: [
        {
          caption: `Saving Yale-NUS`,
          image: SYNC1,
        },
        {
          caption: `Saving Yale-NUS Artwork Post`,
          image: SYNC2,
        },
        {
          caption: `Saving Yale-NUS Poem Post`,
          image: SYNC3,
        },
        {
          caption: `Saving Yale-NUS All Stories Page`,
          image: SYNC4,
        },
        {
          caption: `Saving Yale-NUS About Page`,
          image: SYNC5,
        },
      ],
      infoList: [
        {
          infoTitle: `Stack`,
          infoItems: [`NextJS`, `TypeScript`, `Python`, `AWS`],
        },
      ],
    },
  },
  {
    title: `ByteDance / TikTok`,
    date: `Dec 2021 - Dec 2022`,
    role: `Software Engineer Intern (ML Platforms)`,
    description: `Always Day 1 - A core "ByteStyle" and something that 
    perfectly encapsulates my experience of working at this tech giant. In this 
    fast-paced and innovative company, the work culture is instead synonymous 
    with that of a startup; fresh new challenges everyday and always something 
    new to learn and explore. Here, I was given the opportunity to work on their
    internal machine learning platforms, and was the first time I was exposed
    to an incredibly complex and sophisticated product. Furthermore, most of
    my team members were based in China, and were more comfortable communicating
    in Mandarin - something which I definitely was not used to at a professional
    level prior to this internship. Despite these challenges, I was quickly able
    to adapt and contribute heavily to the codebase, even pushing out an 
    entirely new feature that is currently being used by hundreds of data 
    scientists and engineers throughout the company. Moreover, I am now also 
    more than comfortable to converse fluently in Mandarin with my colleagues 
    at a professional level, even helping out with and writing documentation in 
    Mandarin. My growth here at ByteDance / TikTok has definitely been one of 
    the most fulfilling among my professional experiences, and I cannot be more 
    excited for what's to come in the remainder of my time here.`,
    image: BytedanceCover,
    cardDialogContent: {
      carousel: [
        {
          caption: `ByteDance / TikTok`,
          image: BytedanceCover,
        },
        {
          caption: `ByteDance Guoco Tower`,
          image: BD1,
        },
        {
          caption: `ByteDance Minister Engagement`,
          image: BD2,
        },
        {
          caption: `ByteDance AML SG`,
          image: BD3,
        },
        {
          caption: `ByteDance Minister Engagement`,
          image: BD4,
        },
        {
          caption: `ByteDance Guoco Tower`,
          image: BD5,
        },
        {
          caption: `ByteDance Guoco Tower`,
          image: BD6,
        },
      ],
      infoList: [
        {
          infoTitle: `Skills`,
          infoItems: [`React`, `TypeScript`, `Python`, `Flask`, `Redux`],
        },
      ],
    },
  },
  {
    title: `Ape Wallpapers`,
    date: `Launched June 2022`,
    role: `Create Wallpapers of Your Apes!`,
    description: `Over many months of being actively involved in the Web3 and 
    NFT space, as well as being a member of the Bored Ape Yacht Club (BAYC) 
    community, Ape Wallpapers was created out of a desire to contribute and 
    build something of value for this community. To many members of the club, 
    their ape serves not only as a membership token, but also as their Web3 and 
    online identity. Ape Wallpapers was made to streamline the process of 
    creating mobile wallpapers of BAYC NFTs, allowing ape holders and community 
    members to seamlessly express their Web3 identity on their lock screens.
    This is the first project where I was required to dabble into
    image manipulation. I first had to fetch the image of the ape from IPFS 
    (only available in square dimensions), and then combined it with the logos 
    and custom text of the user's choice to construct the wallpaper. At launch,
    the site was very positively received by the community; reaching a 
    peak user count of over 3000 users, as well as spawning an array of copies 
    and similar websites from other NFT communities. Take a look at all the 
    happy users flexing their wallpapers generated from the site on the 
    dedicated Twitter thread `,
    projectLink: `https://www.apewallpapers.com`,
    image: ApeWallpapersCover,
    cardDialogContent: {
      carousel: [
        {
          caption: `BAYC Wallpapers`,
          image: AW1,
        },
        {
          caption: `MAYC Wallpapers`,
          image: AW2,
        },
        {
          caption: `Custom Ovrlay Text`,
          image: AW3,
        },
        {
          caption: `Ape Wallpapers Twitter Thread`,
          image: AW4,
        },
      ],
      infoList: [
        {
          infoTitle: `Skills`,
          infoItems: [`React`, `TypeScript`, `Redux`, `Express`, `AWS`],
        },
      ],
    },
  },
  {
    title: `Dust Labs`,
    date: `September 2022 - Present`,
    role: `Software Engineer`,
    description: (
      <span>
        After being heavily involved in the crypto and NFT space for years, I
        had the opportunity to be in the founding team of software engineers at
        Dust Labs, a software-as-a-service (SaaS) company focused on building
        software products for Web3 communities; and birthed from two very
        successful NFT collections -{" "}
        <Link
          href="https://twitter.com/degodsnft"
          target="_blank"
          rel="noopener noreferrer"
        >
          DeGods
        </Link>{" "}
        and{" "}
        <Link
          href="https://twitter.com/y00tsnft"
          target="_blank"
          rel="noopener noreferrer"
        >
          y00ts
        </Link>
        . We raised $7 million in our seed round and more recently received an
        additional $3 million grant from Polygon to build on their ecosystem.
        Working alongside tech industry legends such as Kevin Henrikson, I hope
        to make an impact in the Web3 space as I embark on this exciting
        journey.
      </span>
    ),
    descriptionString: `After being heavily involved in the crypto and NFT space for years, I had the 
    opportunity to be in the founding team of software engineers at Dust Labs, 
    a software-as-a-service (SaaS) company focused on building software products 
    for Web3 communities; and birthed from two very successful NFT collections - DeGods and y00ts. 
    We raised $7 million in our seed round and more recently received an additional $3 million grant from 
    Polygon to build on their ecosystem. Working alongside tech industry legends 
    such as Kevin Henrikson, I hope to make an impact in the Web3 space and embark on this exciting journey.`,
    image: DustLabsCover,
    cardDialogContent: {
      carousel: [
        {
          caption: `Dust Labs`,
          image: DustLabsCover,
        },
      ],
    },
  },
];