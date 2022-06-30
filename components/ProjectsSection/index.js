import Section from 'components/Section'
import EditableBlock from 'components/EditableBlock'
import ProjectsTable from './ProjectsTable'
import { filterByShow } from 'services/utils'

export default function ProjectsSection({ projects, setProjects }) {
  return (
    <Section title="Projects">
      <EditableBlock data={projects} setData={setProjects} placeholder="Loading projects data...">
        <ProjectsTable data={filterByShow(projects)} />
      </EditableBlock>
    </Section>
  )
}
