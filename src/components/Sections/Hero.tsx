import Image from 'next/image';
import {FC, memo, useCallback} from 'react';
import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import {useRouter} from 'next/router';
import Button from '@mui/material/Button';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, role1, role2} = heroData;
  const router = useRouter(); // Get the router instance

  // Use useCallback to memoize the navigateTo function
  const navigateTo = useCallback(() => {
    router.push('/table-listing');
  }, [router]);

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
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-col w-full text-center sm:w-6/12 sm:text-start">
                <h3 className="text-4xl font-bold text-white sm:text-2xl lg:text-6xl sporty-green">{name}</h3>
                <h3 className="text-4xl font-bold text-white sm:text-2xl lg:text-6xl">{role1}</h3>
                <h3 className="text-4xl font-bold text-white sm:text-2xl lg:text-5xl pb-8">{role2}</h3>
                {description}
              </div>
              <div className="flex w-6/12  h-3/6 justify-center self-center">
                <img className="shrink-0 pt-6 sm:h-3/6 sm:w-3/6 sm:pt-0" src="pingu.gif" />
              </div>
            </div>
          </div>
          <div className="flex justify-end pt-12">
            <Button variant="contained" onClick={navigateTo} className='bg-sky-700'>
              User Interface Design Using React Material UI
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
