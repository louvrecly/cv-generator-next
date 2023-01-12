import Linkable from 'components/Table/Linkable'
import TitleRow from 'components/Table/TitleRow'
import InfoRow from 'components/Table/InfoRow'
import ItemsList from 'components/Table/ItemsList'

export default function ActivitiesTable({ data }) {
  return (
    <ul>
      {data.activities.map(activity => (
        <li key={activity.key} className="py-1">
          <Linkable link={activity.link}>
            <TitleRow title={activity.name} logo={activity.logo} />
          </Linkable>

          <ul>
            {activity.positions.map(position => (
              <li key={position.key}>
                <InfoRow
                  headText={`${position.title} · ${position.type}`}
                  tailText={`${position.period.start} - ${position.period.end}`}
                />

                <ItemsList items={position.items} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
