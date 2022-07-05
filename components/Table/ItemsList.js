export default function ItemsList({ items = [] }) {
  return (
    <ul className="py-0.5 text-xs">
      {items.map((item, idx) => <li key={idx} className="py-0.5">{item}</li>)}
    </ul>
  )
}
