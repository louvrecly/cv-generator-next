import TitleRow from 'components/Table/TitleRow'
import InfoRow from 'components/Table/InfoRow'
import ItemsList from 'components/Table/ItemsList'

export default function EducationTable({ data }) {
  return (
    <ul>
      {data.institutions.map(institution => (
        <li key={institution.key} className="py-1">
          <TitleRow title={institution.name} logo={institution.logo} />

          <ul>
            {institution.courses.map(course => (
              <li key={course.key}>
                <InfoRow
                  headText={`${course.name} · ${course.type}`}
                  tailText={`${course.period.start} - ${course.period.end}`}
                />
              </li>
            ))}
          </ul>

          <ItemsList items={institution.achievements} />
        </li>
      ))}
    </ul>
  )
}
