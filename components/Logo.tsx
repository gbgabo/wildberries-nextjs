export default function Logo() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-6 md:justify-start">
      <img className="h-44 w-44 md:h-36 md:w-36" src="/img/ui/wb_logo.svg" alt="Wildberries" />
      <h1 className="m-0 text-4xl font-semibold md:text-5xl">Wildberries</h1>
    </div>
  );
}
