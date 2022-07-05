import TitleRow from 'components/Table/TitleRow'
import InfoRow from 'components/Table/InfoRow'
import ItemsList from 'components/Table/ItemsList'

export default function WorkExperienceTable({ data }) {
  return (
    <ul>
      {data.companies.map(company => (
        <li key={company.key} className="py-1">
          <TitleRow title={company.name} logo={company.logo} />

          <ul>
            {company.positions.map(position => (
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
