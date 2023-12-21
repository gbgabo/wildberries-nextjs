import React, { ReactElement } from 'react';
import Button, { Props } from './Button';

export default function ExtendedFab({ href, children, variant = 'primary', icon }: Props): ReactElement {
  return (
    <div className="fixed bottom-8 z-10 flex h-16 w-full items-center justify-center text-center">
      <Button href={href} icon={icon} variant={variant} fab>
        {children}
      </Button>
    </div>
  );
}
