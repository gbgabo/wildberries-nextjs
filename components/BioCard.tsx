import { Icon } from '@iconify/react';

interface Props {
  top?: string;
  bottom?: string;
  image?: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

const variants = {
  primary: {
    text: 'text-acid-green',
    button: 'bg-cherry text-acid-green group-hover:bg-acid-green group-hover:text-cherry',
  },
  secondary: {
    text: 'text-light-purple',
    button: 'bg-light-purple text-darker-purple group-hover:bg-darker-purple group-hover:text-acid-green',
  },
};

export default function BioCard({ top, bottom, image, href, variant = 'secondary' }: Props) {
  return (
    <a
      className="group grid w-52 grid-cols-4 grid-rows-2 content-center items-center justify-center gap-x-2"
      href={href}
    >
      <p className={`col-span-4 py-2 transition-all ease-out ${variants[variant].text}`}>{top}</p>
      <div className="w-8 place-self-center">
        {image ? (
          <img alt="external link" src={image} />
        ) : (
          <Icon icon="material-symbols:open-in-new" height="100%" width="auto" />
        )}
      </div>
      <p className={`col-span-3 whitespace-pre rounded py-1 transition-all ease-out ${variants[variant].button}`}>
        {bottom}
      </p>
    </a>
  );
}
