import { ReactElement } from 'react';

interface Props {
  concat?: string | ReactElement;
}
export default function Logo({ concat }: Props) {
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-center gap-4 md:justify-start md:gap-6">
      <img className="md:max-w-36 max-w-44 h-full max-h-44 md:max-h-36" src="/img/ui/wb_logo.svg" alt="Wildberries" />
      <h1 className="m-0 flex w-fit flex-col flex-wrap content-center items-start justify-start md:flex-row md:items-center md:gap-2">
        <span className="font-bold">Wildberries</span>
        {concat && concat}
      </h1>
    </div>
  );
}
