/* Core */
import type { AppProps } from 'next/app'

/* Instruments */
import '../styles/index.scss'

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default App;