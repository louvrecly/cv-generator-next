export default function InfoRow({ headText, tailText = '' }) {
  return (
    <h4 className="py-0.5 flex flex-wrap justify-between gap-x-3 items-center text-neutral-700 italic border-b">
      <span className="text-xs">{headText}</span>

      {tailText && <span className="text-neutral-500 text-xs text-end">{tailText}</span>}
    </h4>
  )
}
