import Head from 'next/head';
import { Navbar, Footer } from './';
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

interface Props {
  meta: MetaTags;
  children?: ReactNode;
  port?: string;
  variant?: 'primary' | 'secondary';
}

export default function Layout({ meta, children, port, variant = 'primary' }: Props): ReactElement {
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
      {children}
      <Footer variant={variant} />
    </>
  );
}
