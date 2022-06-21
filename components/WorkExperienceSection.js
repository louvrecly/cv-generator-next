import Section from './Section'

export default function WorkExperienceSection({ workExperience }) {
  if (!workExperience) return <p>Loading work experience data...</p>

  return (
    <Section title="Work Experience">
      <ul>
        {workExperience.companies.map(company => (
          <li key={company.key} className="py-1">
            <h3 className="font-bold text-sm">{company.name}</h3>

            <ul>
              {company.positions.map(position => (
                <li key={position.key}>
                  <h4 className="py-1 flex flex-wrap justify-between gap-x-3 items-center text-neutral-700 italic border-b">
                    <span className="text-sm">{position.title} · {position.type}</span>
                    <span className="text-neutral-500 text-xs text-end">{position.period.start} - {position.period.end}</span>
                  </h4>

                  <ul className="py-0.5 text-xs">
                    {position.items.map((item, idx) => <li key={idx} className="py-0.5">{item}</li>)}
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
