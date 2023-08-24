import TitleRow from '@/components/Table/TitleRow'

export default function SkillsTable({ data }) {
  return (
    <ul className="flex justify-between gap-2">
      {data.categories.map(category => (
        <li key={category.key} className="py-0.5">
          <TitleRow title={category.label} />

          <ul className="py-0.5">
            {category.groups.map(group => (
              <li key={group.key} className="py-px flex-1 text-xs">
                <span className="text-neutral-900">{group.label}: </span>

                <span className="text-slate-600">{group.items.map(item => item.label).join(' | ')}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
