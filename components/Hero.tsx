import React, { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Hero({ children }: Props): ReactElement {
  return (
    <main className="flex flex-row content-center items-center justify-center bg-darker-purple flex-wrap min-h-screen md:p-20 relative z-10 shadow-lg bg-gradient-to-t from-darker-purple from-60% md:from-30% to-cherry">
      {children}
    </main>
  );
}
