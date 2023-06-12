import Linkable from 'components/Table/Linkable'
import TitleRow from 'components/Table/TitleRow'
import InfoRow from 'components/Table/InfoRow'
import ItemsList from 'components/Table/ItemsList'

export default function PortfolioTable({ data }) {
  return (
    <ul>
      {data.projects.map(project => (
        <li key={project.key} className="py-0.5">
          <Linkable link={project.link}>
            <TitleRow title={project.name} logo={project.logo} />
          </Linkable>

          <InfoRow headText={`${project.description} · ${project.type}`} />

          <ItemsList items={project.items} />
        </li>
      ))}
    </ul>
  )
}
