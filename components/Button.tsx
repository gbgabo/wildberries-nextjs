import React, { ReactElement } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export type Props = {
  href: string;
  children: string;
  variant?: 'primary' | 'secondary';
  icon?: string;
  fab?: boolean;
};

const variants = {
  primary: 'bg-cherry text-acid-green hover:bg-acid-green hover:text-cherry ',
  secondary: 'bg-light-purple text-darker-purple hover:bg-darker-purple hover:text-light-purple ',
};

export default function Button({ href, children, variant = 'primary', icon, fab }: Props): ReactElement {
  return (
    <Link href={href}>
      <a
        className={`${variants[variant]} ${
          (fab && 'rounded-3xl shadow-md') || 'rounded-xl'
        } grid grid-cols-[fit-content(200px)_auto] items-center justify-center gap-4 p-5 font-semibold tracking-wide transition-all ease-out`}
      >
        {icon && <Icon className="col-span-1" height="100%" width="auto" icon={icon} />}
        <span className="whitespace-nowrap py-[1px]">{children}</span>
      </a>
    </Link>
  );
}
