import Section from 'components/Section'
import EditableBlock from 'components/EditableBlock'
import WorkExperienceTable from './WorkExperienceTable'

export default function WorkExperienceSection({ workExperience, setWorkExperience }) {
  return (
    <Section title="Work Experience">
      <EditableBlock data={workExperience} setData={setWorkExperience} placeholder="Loading work experience data...">
        <WorkExperienceTable />
      </EditableBlock>
    </Section>
  )
}
