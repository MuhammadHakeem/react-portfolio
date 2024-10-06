import React, { FC, memo } from 'react';
import ImageGallery from 'react-image-gallery';
import {SectionId} from '../../data/data';
import Section from '../Layout/Section';
import attachment1 from 'images/webAppInterface/table-mom.png'

const images = [
  {
    original: attachment1.src,
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: attachment1.src,
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: attachment1.src,
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: attachment1.src,
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
];

const webAppInterface: FC = memo(() => {
    return (
      <Section noPadding sectionId={SectionId.WebAppsInterface}>
        <div className='text-white font-bold text-2xl sm:text-2xl py-6'>
          <h2 className='uppercase text-center sporty-green'>User Interface Design:</h2>
        </div>
        <div className='w-full flex justify-center'>

            <ImageGallery items={images} additionalClass='w-full md:w-4/5'/>;
        </div>
      </Section>
    );
  });
  
  webAppInterface.displayName = 'webAppInterface';
  export default webAppInterface;
  
