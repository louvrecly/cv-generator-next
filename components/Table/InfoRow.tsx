interface InfoRowProps {
  headText: string;
  tailText?: string;
}

export default function InfoRow({ headText, tailText = '' }: InfoRowProps) {
  return (
    <h4 className="py-0.5 flex flex-wrap justify-between gap-x-3 items-center text-neutral-900 text-xs italic">
      <span>{headText}</span>

      {!!tailText && <span className="text-end">{tailText}</span>}
    </h4>
  )
}
