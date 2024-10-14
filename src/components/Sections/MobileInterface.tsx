import React, {FC, memo} from 'react';
import ImageGallery from 'react-image-gallery';
import {SectionId, heroData} from '../../data/data';
import Section from '../Layout/Section';
import attachment1 from 'images/webAppInterface/add-attachment-comment.png';
import attachment2 from 'images/webAppInterface/create-ticket.png';
import attachment3 from 'images/webAppInterface/customer-details.png';
import attachment4 from 'images/webAppInterface/dashboard.png';
import attachment5 from 'images/webAppInterface/order-details.png';
import Image from 'next/image';

const images = [
  {
    original: attachment1.src,
    thumbnail: attachment1.src,
    thumbnailHeight: 1
  },
  {
    original: attachment2.src,
    thumbnail: attachment2.src,
    thumbnailHeight: 1

  },
  {
    original: attachment3.src,
    thumbnail: attachment3.src,
    thumbnailHeight: 1

  },
  {
    original: attachment4.src,
    thumbnail: attachment4.src,
    thumbnailHeight: 1

  },
  {
    original: attachment5.src,
    thumbnail: attachment5.src,
    thumbnailHeight: 1

  },
];

const {imageSrc, name} = heroData;

const MobileInterface: FC = memo(() => {
  return (
    <Section noPadding sectionId={SectionId.MobileInterface}>
      <Image
          alt={`${name}-image`}
          className="absolute z--10 inset-0"
          placeholder="blur"
          priority
          src={imageSrc}
      />
      <div className="text-white font-bold text-2xl sm:text-2xl h-screen grid grid-rows-1 grid-cols-12 justify-center items-center z-10 relative">
        <h2 className="uppercase text-center sporty-green col-span-4">My Previous Works on<br/> Mobile Apps:</h2>
        <ImageGallery items={images} additionalClass="col-span-8 content-center"/>
      </div>
    </Section>
  );
});

MobileInterface.displayName = 'mobileInterface';
export default MobileInterface;
