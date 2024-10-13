import React, {FC, memo} from 'react';
import ImageGallery from 'react-image-gallery';
import {SectionId, heroData} from '../../data/data';
import Section from '../Layout/Section';
import attachment1 from 'images/webAppInterface/add-building-dialog.png';
import attachment2 from 'images/webAppInterface/agenda.png';
import attachment3 from 'images/webAppInterface/attendance-list.png';
import attachment4 from 'images/webAppInterface/building-details.png';
import attachment5 from 'images/webAppInterface/building-listing.png';
import attachment6 from 'images/webAppInterface/mom-listing.png';
import attachment7 from 'images/webAppInterface/table-mom.png';
import attachment8 from 'images/webAppInterface/table-with-filter.png';
import Image from 'next/image';

const images = [
  {
    original: attachment1.src,
    thumbnail: attachment1.src,
  },
  {
    original: attachment2.src,
    thumbnail: attachment2.src,
  },
  {
    original: attachment3.src,
    thumbnail: attachment3.src,
  },
  {
    original: attachment4.src,
    thumbnail: attachment4.src,
  },
  {
    original: attachment5.src,
    thumbnail: attachment5.src,
  },
  {
    original: attachment6.src,
    thumbnail: attachment6.src,
  },
  {
    original: attachment7.src,
    thumbnail: attachment7.src,
  },
  {
    original: attachment8.src,
    thumbnail: attachment8.src,
  },
];

const {imageSrc, name} = heroData;

const WebAppInterface: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.WebAppsInterface}>
      <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full h-screen"
          placeholder="blur"
          priority
          src={imageSrc}
      />
      <div className="text-white font-bold text-2xl sm:text-2xl gap-y-8 h-screen flex justify-center items-center flex-col z-10 relative">
        <h2 className="uppercase text-center sporty-green">My Previous Works on Website & Mobile Apps:</h2>
        <ImageGallery items={images} additionalClass="w-full md:w-3/5 content-center	" />
      </div>
    </Section>
  );
});

WebAppInterface.displayName = 'webAppInterface';
export default WebAppInterface;
