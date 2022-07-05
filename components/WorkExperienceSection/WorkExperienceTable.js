import Image from 'next/image';

export default function WorkExperienceTable({ data }) {
  return (
    <ul>
      {data.companies.map(company => (
        <li key={company.key} className="py-1">
          <div className="flex items-center gap-2">
            {company.logo && <Image className="w-full h-auto" src={company.logo} alt={company.name} width={20} height={20} />}
            <h3 className="font-bold text-sm">{company.name}</h3>
          </div>

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
  )
}
