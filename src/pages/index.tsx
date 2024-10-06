import dynamic from 'next/dynamic';
import {FC, memo} from 'react';
import Page from '../components/Layout/Page';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import {homePageMeta} from '../data/data';
import Portfolio from 'components/Sections/Portfolio';
import TechStack from 'components/Sections/TechStack/TechStack';
import WebAppInterface from 'components/Sections/WebAppInterface'

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <TechStack/>
      {/* <Carousel/> */}
      <WebAppInterface/>
      {/* <About /> */}
      {/* <Resume /> */}
      <Portfolio />
      {/* <Testimonials />  */}
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;
