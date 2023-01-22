export default function ItemsList({ items = [] }) {
  return (
    <ul className="list-disc list-inside text-xs">
      {items.map((item, idx) => <li key={idx} className="py-px text-slate-500">{item}</li>)}
    </ul>
  )
}
