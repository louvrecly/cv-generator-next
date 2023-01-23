export default function ItemsList({ items = [] }) {
  return (
    <ul className="list-disc list-inside text-xs">
      {items
        .filter(item => item.show)
        .map((item, idx) => (
          <li key={idx} className="py-px text-slate-500">{item.content}</li>
        ))}
    </ul>
  )
}
