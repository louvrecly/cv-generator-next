import Linkable from 'components/Table/Linkable'

export default function ReferencesTable({ data }) {
  return (
    <ul className="py-0.5">
      {data.items.map(item => (
        <li key={item.key} className="py-0.5 w-full flex flex-wrap justify-between gap-x-2 text-xs">
          <span>{item.label}:</span>

          <Linkable link={item.link}>
            <span>{item.value}</span>
          </Linkable>
        </li>
      ))}
    </ul>
  )
}
