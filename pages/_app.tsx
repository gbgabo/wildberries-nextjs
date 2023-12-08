import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@fontsource-variable/jetbrains-mono';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
