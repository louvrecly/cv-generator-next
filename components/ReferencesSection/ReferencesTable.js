export default function ReferencesTable({ data }) {
  return (
    <ul className="py-1">
      {data.items.map(item => (
        <li key={item.key} className="py-0.5 w-full flex flex-wrap justify-between gap-x-2 text-xs">
          <span>{item.label}:</span>
          {
            item.link
              ? <a href={item.link} target="_blank" rel="noreferrer">{item.value}</a>
              : <span>{item.value}</span>
          }
        </li>
      ))}
    </ul>
  )
}
