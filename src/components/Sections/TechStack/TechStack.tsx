// import {ChevronDownIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, memo} from 'react';

import {
  cssFrameWorks,
  heroData,
  jsFrameworks,
  mobileFrameWorks,
  otherSoftware,
  progLang,
  SectionId,
} from '../../../data/data';
import Section from '../../Layout/Section';
// import Carousel from './Carousel';
// import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name} = heroData;

  return (
    <Section noPadding sectionId={SectionId.TechStack} className="py-8 px-8">
      <div className="relative flex flex-col sm:flex-row w-full items-center justify-center rounded-xl bg-gray-800/40">
        <Image
          alt={`${name}-image`}
          className="absolute -z-10 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="text-white font-bold text-2xl sm:text-2xl py-6">
          <h2 className="uppercase text-center sporty-green">My Technological Stack & Frameworks:</h2>
        </div>
        <div className="flex flex-col flex-wrap justify-center items-center content-center sm:flex-row py-6 min-h-[100vh] sm:items-baseline p-6">
          {[
            {items: jsFrameworks, color: 'red-600', label: 'javascript frameworks'},
            {items: mobileFrameWorks, color: 'blue-600', label: 'mobile frameworks'},
            {items: progLang, color: 'blue-600', label: 'programming language'},
            {items: cssFrameWorks, color: 'green-600', label: 'CSS frameworks'},
            {items: otherSoftware, color: 'green-600', label: 'other software'},
          ].map(({items, color, label}, index) => (
            <div className="pt-4 sm:ml-4 !border-0 w-fit" key={index}>
              <div className="grid grid-cols-2 sm:auto-cols-max bg-white rounded-lg p-4">
                {items.map(item => (
                  <div className="text-black flex flex-col p-2 flex items-center" key={item.name}>
                    <item.icon className="h-14 w-14 sm:h-14 sm:w-14" />
                    <label className="font-bold self-center text-gray-600">{item.name}</label>
                  </div>
                ))}
                <div className={`absolute left-0 bottom-0 h-2 ${color} h-4 w-full rounded-lg`}></div>
              </div>
              <h1 className="pt-2 sm:pt-4 font-bold capitalize text-center text-white bottom-0">{label}</h1>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
