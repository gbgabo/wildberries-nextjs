import React, { ReactElement } from 'react';
import Link from 'next/link';
import Logo from './Logo';

interface Props {
  port?: string;
}

export default function Navbar({ port }: Props): ReactElement {
  return (
    <div className="fixed top-0 z-10 h-20 w-screen bg-darker-purple shadow-lg">
      <Link href="/">
        <a className="m-auto flex h-full w-fit flex-row flex-nowrap content-center items-center justify-center p-4 text-xl">
          <Logo
            concat={
              port && (
                <span className="text-sm">
                  for <span className="highlight">{port}</span>
                </span>
              )
            }
          />
        </a>
      </Link>
    </div>
  );
}
