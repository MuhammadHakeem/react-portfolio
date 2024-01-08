import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Carousel from './Carousel';
// import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions, role1, role2} = heroData;

  return (
    <Section noPadding sectionId={SectionId.About}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10 w-11/12 px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 pb-0 text-center shadow-lg backdrop-blur-sm">
            <div className='flex flex-col sm:flex-row'>
              <div className='flex flex-col w-full text-center sm:w-6/12 sm:text-start'>
                <h3 className="text-4xl font-bold text-white sm:text-2xl lg:text-6xl sporty-green">{name}</h3>
                <h3 className="text-4xl font-bold text-white sm:text-2xl lg:text-6xl">{role1}</h3>
                <h3 className="text-4xl font-bold text-white sm:text-2xl lg:text-5xl pb-8">{role2}</h3>
                {description}
              </div>
              <div className='flex w-6/12  h-3/6 justify-center self-center'>
                  <img className='shrink-0 pt-6 sm:h-3/6 sm:w-3/6 sm:pt-0' src='pingu.gif'/>
              </div>
            </div>
            {/* <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div> */}
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-green-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
            <div className='text-white font-bold text-xl sm:text-2xl'>
              <h2>Technological Stack & Frameworks:</h2>
            </div>
          </div>
          <Carousel />
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.Resume}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
