import Section from './Section'

export default function SkillsSection({ skills }) {
  if (!skills) return <p>Loading skills data...</p>

  return (
    <Section title="Skills">
      <ul>
        {skills.categories.map(category => (
          <li key={category.key} className="py-1">
            <h3 className="font-bold text-sm">{category.label}</h3>

            <ul>
              {category.groups.map(group => (
                <li key={group.key}>
                  <h4 className="py-1 text-neutral-700 text-xs italic border-b border-neutral-700">{group.label}</h4>

                  <ul className="py-1 flex-1 flex flex-wrap gap-1 text-xs">
                    {group.items.map(item => (
                      <li key={item.key} className="px-2 py-0.5 whitespace-nowrap border rounded-full shadow-sm">{item.label}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
