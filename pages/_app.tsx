import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { FC } from 'react';
import Header from '../components/Header/Header';
import '../index.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
    </>
  );
};

export default App;
