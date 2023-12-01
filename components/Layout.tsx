import Head from 'next/head';
import { Hero, Navbar, Slider, Footer } from './';
import React, { ReactElement, ReactNode } from 'react';

interface CallToAction {
  text: string;
  href: string;
  icon?: string;
}

interface MetaTags {
  title: string;
  description: string;
  image: string;
}

interface HeroElements {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  cta?: CallToAction;
  slides?: string[] | null;
}

interface Props {
  meta: MetaTags;
  hero?: HeroElements;
  children?: ReactNode;
  port?: string;
}

export default function Layout({ meta, hero, children, port }: Props): ReactElement {
  const slideList =
    hero &&
    hero.slides &&
    hero.slides.map((screenshot) => {
      return {
        element: <img alt={`port screenshot`} src={screenshot} />,
      };
    });

  return (
    <>
      <Navbar port={port} />
      <Head>
        <meta name="og:image" content={meta.image} />

        <title>{meta.title}</title>
        <meta property="og:title" content={meta.title} key="ogtitle" />

        <meta name="description" content={meta.description} />
        <meta property="og:description" content={meta.description} key="ogdesc" />

        <link rel="preload" href="/fonts/JetBrainsMono-VariableFont_wght.ttf" as="font" crossOrigin="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {hero && (
        <Hero title={hero.title} subtitle={hero.subtitle} cta={hero.cta}>
          {slideList && <Slider slides={slideList} />}
        </Hero>
      )}
      {children}
      <Footer />
    </>
  );
}
