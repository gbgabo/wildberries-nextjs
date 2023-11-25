import React, { ReactElement } from 'react';
import Link from 'next/link';

export type Props = {
  href: string;
  children: string;
  variant?: 'primary' | 'secondary';
  icon?: string;
};

const variants = {
  primary: 'bg-cherry text-acid-green hover:bg-acid-green hover:text-cherry ',
  secondary: 'bg-light-purple text-darker-purple hover:bg-darker-purple hover:text-light-purple ',
};

export default function Button({ href, children, variant = 'primary', icon }: Props): ReactElement {
  return (
    <Link href={href}>
      <a
        className={`${variants[variant]} flex items-center justify-center gap-3 rounded-xl p-5 text-lg transition-all ease-out`}
      >
        {icon && <img alt={icon} src={`/icons/${icon}.svg`} />}
        {children}
      </a>
    </Link>
  );
}
