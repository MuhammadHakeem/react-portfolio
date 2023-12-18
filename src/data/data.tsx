/* eslint-disable */
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Hakeem's Portfolio",
  description: "Hakeem's Portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Hakeem.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Selangor based <strong className="text-stone-100">Web and Mobile Software Developer</strong>, currently working
        at <strong className="text-stone-100">TM Research & Development</strong> building a modern website and mobile apps
        by using latest tech stack.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Like to play games that related to multiplayer and composition as a team.
      </p>
    </>
  ),
  actions: [
    {
      href: 'C:\react-portfolio\src\data\assets\resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Passionate tech enthusiast and skilled mobile developer with a knack for creating innovative and user-friendly mobile
  applications. Strong problem-solving abilities and an aptitude for working collaboratively with cross-functional teams.
  Committed to staying up-to-date with the latest mobile development trends and technologies to deliver cutting-edge
  solutions.`,
  aboutItems: [
    {label: 'Location', text: 'B.B. Bangi, Selangor', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Selangor', Icon: FlagIcon},
    {label: 'Interests', text: 'Basketball, Skipping, Jogging, MOBA Games', Icon: SparklesIcon},
    {label: 'Study', text: 'Multimedia University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'TM Research & Development', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Mobile Development',
    skills: [
      {
        name: 'Ionic',
        level: 8,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Fastlane',
        level: 6,
      },
      {
        name: 'Gradle',
        level: 5,
      },
      {
        name: 'Jasmine & Karma',
        level: 7,
      },
      {
        name: 'Android Studio',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'Angular',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Bootstrap',
        level: 7,
      },
      {
        name: 'Apache Echart',
        level: 6,
      },
      {
        name: 'Docker',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Node.js',
        level: 6,
      },
    ],
  },
  {
    name: 'Spoken Languages',
    skills: [
      {
        name: 'Malay',
        level: 8,
      },
      {
        name: 'English',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Aug 2022',
    location: 'Multimedia University',
    title: 'BSc (Hons) of Computer Science with Specialization in Software Engineering',
    content: <p>CGPA: 3.75/4.00  (1st Class Honour)</p>,
  },
  {
    date: 'June 2019',
    location: 'UITM Dengkil',
    title: 'Foundation in Science',
    content: <p>MUET: Band 4</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2022 - Present',
    location: 'TM Research & Development',
    title: 'Researcher (Mobile Division)',
    content: (
      <p>
        -Developed and mantained 2 mobile apps  & 2 website related to Event Management System.<br/>
        -Used framework/ tools such as Angular v14, Ionic v6, Capacitor v4, Typescript, Bootstrap, Apache Echarts,
        Docker, Fastlane Jasmine, MySQL, Postman, HTML and CSS.<br/>
        -Implement Auto Deployement Pipeline using Fastlane, Docker and Gitlab for mobile apps release. <br/>
        -Set up Angular Unit Test Gitlab Continuous Integration (CI) Pipeline using Docker and Gitlab.<br/>
        -Implemented Unit Tests using Jasmine and Karma on fresh mobile apps project.<br/>
        -Built & released APK using Android Studio to Firebase App Distribution for Android platform.<br/>
        -Used Swagger and Postman to test API endpoint and responses.<br/>
        -Utilized GitLab to manage code, control versions, and implement effective branching strategies.<br/>
        -Leveraged Jira and Confluence to facilitate communication and collaboration.<br/>
        -Participated in the complete software development lifecycle, including coding, testing, debugging, and documentation. <br/>
        -Collaborated with the UI/UX team to ensure the user interface and user experience are optimized for mobile platforms.<br/>
        -Took online Flutter course on Udemy to learn and to implement it into a new project in the near future.<br/>
      </p>
    ),
  },
  {
    date: 'March 2021 - June 2021',
    location: ' Open Architecture Solution Sdn. Bhd.',
    title: 'Technical Analyst (Internship)',
    content: (
      <p>
        Collaborated with a senior developer on a project that involved integrating a REST API and developing the
        front-end of a mobile application using Ionic framework v4. To aid in the development process, we utilized
        the Postman API tool to test and debug our API endpoints. 
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'You can reach me through list of social media below.',
  items: [
    {
      type: ContactType.Email,
      text: 'muhdhakeem526@gmail.com',
      href: 'mailto:muhdhakeem526@gmail.com',
    },
    // {
    //   type: ContactType.Location,
    //   text: 'Bandar Baru Bangi, Selangor',
    //   href: 'https://maps.app.goo.gl/EyHdtddHCNsR9sbp7',
    // },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'MuhammadHakeem',
      href: 'https://github.com/MuhammadHakeem',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/MuhammadHakeem'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hakeemadil'},
//   {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
//   {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
