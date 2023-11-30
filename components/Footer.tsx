import React, { ReactElement } from 'react';
import { BioCard } from '../components';

interface Props {
  variant?: 'primary' | 'secondary';
}

const variants = {
  primary: 'bg-gradient-to-t from-cherry to-darker-purple to-40%',
  secondary: 'bg-gradient-to-t from-dark-purple to-darker-purple from-[-50%] to-40%',
};

export default function Footer({ variant = 'primary' }: Props): ReactElement {
  return (
    <footer
      className={`${variants[variant]} flex flex-col items-center justify-around gap-7 bg-darker-purple pb-56 pt-20 text-center text-acid-green md:flex-row`}
    >
      <BioCard top="Check the project on" bottom="Github" href="https://github.com/gbgabo/wildberries" />
      <BioCard
        top="Made with ♥ by"
        bottom="@gbgabo"
        image="/icons/profile_alpha.svg"
        href="https://github.com/gbgabo"
      />
    </footer>
  );
}
