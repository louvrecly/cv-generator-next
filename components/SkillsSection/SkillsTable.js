import TitleRow from 'components/Table/TitleRow'
import InfoRow from 'components/Table/InfoRow'

export default function SkillsTable({ data }) {
  return (
    <ul>
      {data.categories.map(category => (
        <li key={category.key} className="py-0.5">
          <TitleRow title={category.label} />

          <ul>
            {category.groups.map(group => (
              <li key={group.key}>
                <InfoRow headText={group.label} />

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
