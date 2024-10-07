import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';
import '../components/Sections/styles/carousel.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import type {AppProps} from 'next/app';
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
