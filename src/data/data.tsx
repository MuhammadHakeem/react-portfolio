/* eslint-disable */
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  // CalendarIcon,
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
import tacres from '../images/portfolio/tacres.png';
import portfolio from '../images/portfolio/portfolio.png';
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
  techStack,
} from './dataDef';
import AngularIcon from 'components/Icon/AngularIcon';
import TypescriptIcon from 'components/Icon/TypescriptIcon';
import ReactIcon from 'components/Icon/ReactIcon';
import DartIcon from 'components/Icon/DartIcon';
import BootstrapIcon from 'components/Icon/BootstrapIcon';
import TailwindIcon from 'components/Icon/TailwindIcon';
import IonicIcon from 'components/Icon/IonicIcon';
import FlutterIcon from 'components/Icon/FlutterIcon';
import DockerIcon from 'components/Icon/DockerIcon';
import GradleIcon from 'components/Icon/GradleIcon';
import JasmineIcon from 'components/Icon/JasmineIcon';
import GitlabIcon from 'components/Icon/GitlabIcon';

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
  Experience: 'experience',
  TechStack: 'techstack',
  Project: 'project',
  Testimonials: 'testimonials',
  Carousel: 'carousel',
  Typed: 'typed',
  WebAppsInterface: 'WebAppInterface',
  MobileInterface: 'MobileInterface',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi. I'm Hakeem.`,
  role1: `A Web &`,
  role2: `Mobile Developer`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">"Code is the canvas, and I am the artist."</strong>
      </p>
    </>
    // <>
    //   <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
    //     Currently working at <strong className="text-stone-100">TM Research & Development</strong> building a modern website and
    //     mobile apps by using latest tech stack.
    //   </p>
    //   {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
    //     Passionate about an active lifestyle, finding joy in activities such as jogging, skipping, and playing sports like basketball.
    //   </p> */}
    // </>
  ),
  actions: [
    {
      href: '/resume.pdf',
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
  description: `I am a passionate software developer with experience in building modern web applications using technologies
  such as Java Spring Boot, Angular, TypeScript, and PostgreSQL. I enjoy designing clean, efficient, and scalable systems
  that deliver meaningful user experiences.

  I have a strong interest in backend development and full-stack architecture, focusing on writing maintainable code and
  creating intuitive interfaces. I continuously seek opportunities to learn new technologies, improve my problem-solving
  skills, and contribute to impactful projects.

  Beyond technical development, I value collaboration and enjoy working with teams to turn ideas into practical
  solutions. I believe that great software is built not only with good code but also with good communication and
  teamwork.`,
  aboutItems: [
    {label: 'Location', text: 'B.B. Bangi, Selangor', Icon: MapIcon},
    // {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Malaysian', Icon: FlagIcon},
    {label: 'Interests', text: 'Basketball, Skipping, Jogging, MOBA Games', Icon: SparklesIcon},
    {label: 'Study', text: 'Multimedia University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'EPF Malaysia', Icon: BuildingOffice2Icon},
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
        name: 'Java',
        level: 7,
      },
      {
        name: 'Spring Boot',
        level: 7,
      },
      {
        name: 'PostgreSQL',
        level: 6,
      },
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
    title: 'TACRES',
    description: 'Mobile App Companion for Asthmatic Patients. (Final Year Project for my Bachelor Degree)',
    url: 'https://github.com/MuhammadHakeem/tacres-flutter-fyp',
    image: tacres,
  },
  {
    title: 'My Portfolio',
    description: 'My lovely portfolio or sandbox where I showcase my technical skills and background.',
    url: 'https://hakeem06.netlify.app/',
    image: portfolio,
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
    content: (
      <div>
        <p className="text-start">
          CGPA: <strong>3.75</strong>/4.00 (<strong>1st Class Honour</strong>)
        </p>
        <hr></hr>
        <p className="text-start">Receiver of Books Award</p>
        <hr></hr>
        <p className="text-start">FYP: Treat Asthma Climate Region Experience System. (Flutter, Dart & Firebase)</p>
        <hr></hr>
      </div>
    ),
    logo: 'logoMmu.png',
  },
  {
    date: 'June 2019',
    location: 'UITM Dengkil',
    title: 'Foundation in Science',
    content: (
      <p className="text-start">
        MUET: <strong>Band 4</strong>
      </p>
    ),
    logo: 'logoUitmDengkil.png',
  },
];

export const jsFrameworks: techStack[] = [
  {
    name: 'Angular',
    icon: AngularIcon,
  },
  {
    name: 'React',
    icon: ReactIcon,
  },
];

export const progLang: techStack[] = [
  {
    name: 'Typescript',
    icon: TypescriptIcon,
  },
  {
    name: 'Dart',
    icon: DartIcon,
  },
];

export const cssFrameWorks: techStack[] = [
  {
    name: 'Bootstrap',
    icon: BootstrapIcon,
  },
  {
    name: 'Tailwind',
    icon: TailwindIcon,
  },
];

export const mobileFrameWorks: techStack[] = [
  {
    name: 'Ionic',
    icon: IonicIcon,
  },
  {
    name: 'Flutter',
    icon: FlutterIcon,
  },
];

export const otherSoftware: techStack[] = [
  {
    name: 'Docker',
    icon: DockerIcon,
  },
  {
    name: 'Github',
    icon: GithubIcon,
  },
  {
    name: 'Gradle',
    icon: GradleIcon,
  },
  {
    name: 'Jasmine',
    icon: JasmineIcon,
  },
  {
    name: 'Gitlab',
    icon: GitlabIcon,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2026 - Present',
    location: 'EPF Malaysia',
    title: 'Java Spring Boot Developer',
    logo: 'logoEpf.png',
    content: (
      <ul className="text-start pl-6 w-11/12 flex flex-col justify-self-center">
        <li>Building backend services and features using Java, Spring Boot, and PostgreSQL.</li>
        <hr></hr>
      </ul>
    ),
  },
  {
    date: 'February 2025 - April 2026',
    location: 'Accenture Southeast Asia',
    title: 'Software Development Senior Analyst',
    logo: 'logoAccenture.png',
    content: (
      <ul className="text-start pl-6 w-11/12 flex flex-col justify-self-center">
        <li>
          Ensured 99%+ policy processing SLA by troubleshooting Production failures, reprocessing via Postman APIs,
          and validating WS responses.
        </li>
        <hr></hr>
        <li>Oracle-to-PostgreSQL migration, refactoring SQL scripts, JasperReports, and MyBatis mappers.</li>
        <hr></hr>
        <li>Validated data integrity and API functionality through E2E testing post-DB migration.</li>
        <hr></hr>
        <li>Enhanced cross-system integration by maintaining external JAR dependencies, ensuring timely updates.</li>
        <hr></hr>
        <li>Deployed and validated WAR files on Tomcat (SIT), optimizing application stability.</li>
        <hr></hr>
        <li>Implemented audit-ready unit testing (Excel-based) for all PRs, covering test cases to sign-offs.</li>
        <hr></hr>
        <li>Mentored junior developers in Ionic mobile app setup and local environment configuration.</li>
        <hr></hr>
        <li>Improved onboarding by creating user guides for 3 channels, boosting team/client usability.</li>
        <hr></hr>
        <li>
          Authored System Understanding Documents (SUDs) for two insurance applications, detailing
          technical/business workflows.
        </li>
        <hr></hr>
        <li>
          Awarded &quot;Playback Top Scorers&quot; (Top 10/33) for delivering top-tier system walkthroughs to
          clients and leadership.
        </li>
        <hr></hr>
      </ul>
    ),
  },
  {
    date: 'October 2022 - January 2025',
    location: 'TM Research & Development',
    title: 'Mobile Developer',
    logo: 'logoTmRnd.png',
    content: (
      <ul className="text-start pl-6 w-11/12 flex flex-col justify-self-center">
        <li>Developed and maintained 2 mobile apps related to Event Management System on a Scrum Team.</li>
        <hr></hr>
        <li>
          Used framework/tools such as Angular v14, Ionic v6, Capacitor v4, Typescript, Docker, Jasmine, MySQL,
          Postman, HTML and CSS throughout the development.
        </li>
        <hr></hr>
        <li>Set up Angular Unit Test Gitlab Continuous Integration (CI) Pipeline using Docker.</li>
        <hr></hr>
        <li>Implemented Unit Tests using Jasmine and Karma on existing projects.</li>
        <hr></hr>
        <li>Built & released APK using Android Studio to Firebase App Distribution for Android platform.</li>
        <hr></hr>
        <li>Used Swagger and Postman to test API endpoint and responses.</li>
        <hr></hr>
        <li>Utilized Gitlab for code management and versioning.</li>
        <hr></hr>
        <li>Leveraged Jira and Confluence to facilitate communication and collaboration.</li>
        <hr></hr>
        <li>
          Participated in the complete software development lifecycle, including coding, testing, debugging, and
          documentation.
        </li>
        <hr></hr>
        <li>
          Collaborated with the UI/UX team to ensure the user interface and user experience are optimized for
          mobile platforms.
        </li>
        <hr></hr>
      </ul>
    ),
  },
  {
    date: 'May 2021 - July 2021',
    location: 'Open Architecture Solutions Sdn. Bhd.',
    title: 'Technical Analyst (Internship)',
    logo: 'logoOas.png',
    content: (
      <ul className="text-start pl-6 w-11/12 flex flex-col justify-self-center">
        <li>
          Collaborated with a senior developer on a project that involved integrating a REST API and developing the
          front-end of a mobile application using Ionic framework, using Postman to test and debug API endpoints.
        </li>
        <hr></hr>
      </ul>
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
    {
      type: ContactType.LinkedIn,
      text: 'Hakeem Adil',
      href: 'https://www.linkedin.com/in/hakeemadil/',
    },
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
