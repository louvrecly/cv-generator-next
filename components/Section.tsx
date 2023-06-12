import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="py-0.5 w-full">
      <h2 className="text-base uppercase">{title}</h2>

      {children}
    </section>
  )
}
