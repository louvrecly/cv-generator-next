import Section from './Section'

export default function ReferencesSection({ references }) {
  if (!references) return <p>Loading references data...</p>

  return (
    <Section title="References">
      <ul className="py-1">
        {references.items.map(item => (
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
    </Section>
  )
}
