import React, { ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Hero({ children }: Props): ReactElement {
  return (
    <main className="relative z-10 flex min-h-screen flex-row flex-wrap content-center items-center justify-center bg-darker-purple bg-gradient-to-t from-darker-purple from-60% to-cherry shadow-lg md:from-30% md:p-20">
      {children}
    </main>
  );
}
