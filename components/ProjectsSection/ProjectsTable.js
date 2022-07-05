import TitleRow from 'components/Table/TitleRow'

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

          <h4 className="py-1 flex flex-wrap justify-between gap-x-3 items-center text-neutral-700 italic border-b">
            <span className="text-sm">{activity.description} · {activity.type}</span>
            <span className="text-neutral-500 text-xs text-end">{activity.period.start} - {activity.period.end}</span>
          </h4>

          <ul className="py-0.5">
            {activity.items.map((item, idx) => (
              <li key={idx} className="py-0.5 text-xs">{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
