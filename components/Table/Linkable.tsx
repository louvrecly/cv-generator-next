import { ReactNode } from 'react';

interface LinkableProps {
  link?: string;
  children: ReactNode;
}

export default function Linkable({ link = '', children }: LinkableProps) {
  return (
    <>
      {!!link
        ? <a href={link} target="_blank" rel="noreferrer">{children}</a>
        : <span className="contents">{children}</span>}
    </>
  )
}
