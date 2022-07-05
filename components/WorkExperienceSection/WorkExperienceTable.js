import TitleRow from 'components/Table/TitleRow'
import InfoRow from 'components/Table/InfoRow'

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

                <ul className="py-0.5 text-xs">
                  {position.items.map((item, idx) => <li key={idx} className="py-0.5">{item}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
