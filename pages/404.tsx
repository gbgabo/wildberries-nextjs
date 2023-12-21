import Head from 'next/head';
import { Button } from '../components';

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>404: Nothing fruitful here!</title>
        <meta property="og:title" content="404" key="ogtitle" />

        <meta name="description" content="Nothing fruitful here!" />
        <meta property="og:description" content="Nothing fruitful here!" key="ogdesc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen flex-col flex-nowrap content-center items-center justify-center">
        <div className="flex h-fit w-screen flex-col flex-nowrap content-center items-center justify-center bg-darker-purple py-20">
          <h1 className="text-9xl font-extrabold">404</h1>
          <h2>Nothing fruitful to find here</h2>
          <div className="flex flex-col gap-4 md:flex-row">
            <Button href="/" icon="brush">
              Available ports
            </Button>
            <Button href="/about" icon="pallete">
              About Wildberries
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
