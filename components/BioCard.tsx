interface Props {
  top?: string;
  bottom?: string;
  image?: string;
  href: string;
}

export default function BioCard({ top, bottom, image, href }: Props) {
  return (
    <a className="grid w-52 grid-cols-4 grid-rows-2 content-center items-center justify-center gap-x-2" href={href}>
      <p className="col-span-4 py-2">{top}</p>
      <div className="w-8 place-self-center">
        {image ? (
          <img alt="external link" src={image} />
        ) : (
          <img
            style={{
              filter: 'invert(83%) sepia(95%) saturate(4281%) hue-rotate(81deg) brightness(99%) contrast(106%)',
            }}
            alt="external link"
            src="/icons/open_in_new.svg"
          />
        )}
      </div>
      <p className="berry col-span-3">{bottom}</p>
    </a>
  );
}
