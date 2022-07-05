import TitleRow from 'components/Table/TitleRow'

export default function SkillsTable({ data }) {
  return (
    <ul>
      {data.categories.map(category => (
        <li key={category.key} className="py-1">
          <TitleRow title={category.label} />

          <ul>
            {category.groups.map(group => (
              <li key={group.key}>
                <h4 className="py-0.5 text-neutral-700 text-sm italic border-b">{group.label}</h4>

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
  )
}
