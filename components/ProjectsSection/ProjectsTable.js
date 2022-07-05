import TitleRow from 'components/Table/TitleRow'
import InfoRow from 'components/Table/InfoRow'
import ItemsList from 'components/Table/ItemsList'

export default function EducationTable({ data }) {
  return (
    <ul>
      {data.activities.map(activity => (
        <li key={activity.key} className="py-1">
          {
            activity.link
              ? (
                <a href={activity.link} target="_blank" rel="noreferrer">
                  <TitleRow title={activity.name} logo={activity.logo} />
                </a>
              )
              : (
                <div className="flex items-center gap-2">
                  <TitleRow title={activity.name} logo={activity.logo} />
                </div>
              )
          }

          <InfoRow
            headText={`${activity.description} · ${activity.type}`}
            tailText={`${activity.period.start} - ${activity.period.end}`}
          />

          <ItemsList items={activity.items} />
        </li>
      ))}
    </ul>
  )
}
