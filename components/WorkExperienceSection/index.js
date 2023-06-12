import Section from 'components/Section'
import EditableBlock from 'components/EditableBlock'
import WorkExperienceTable from './WorkExperienceTable'
import { filterByShow } from 'services/utils'

export default function WorkExperienceSection({ workExperience, setWorkExperience }) {
  return (
    <Section title="Professional Experience">
      <EditableBlock data={workExperience} setData={setWorkExperience} placeholder="Loading work experience data...">
        <WorkExperienceTable data={filterByShow(workExperience)} />
      </EditableBlock>
    </Section>
  )
}
