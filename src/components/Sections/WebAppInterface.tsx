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

const WebAppInterface: FC = memo(() => {
    return (
      <Section noPadding sectionId={SectionId.WebAppsInterface}>
        <div className='text-white font-bold text-2xl sm:text-2xl gap-y-8 h-screen flex justify-center items-center flex-col'>
            <h2 className='uppercase text-center sporty-green'>My Previous Works on Website & Mobile Apps:</h2>
            <ImageGallery items={images} additionalClass='w-full md:w-3/5'/>
        </div>
      </Section>
    );
  });
  
  WebAppInterface.displayName = 'webAppInterface';
  export default WebAppInterface;
  
