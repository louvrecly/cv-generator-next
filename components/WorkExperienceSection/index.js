import Section from 'components/Section'
import LoadingPlaceholder from 'components/LoadingPlaceholder'
import WorkExperienceTable from './WorkExperienceTable'

export default function WorkExperienceSection({ workExperience, setWorkExperience }) {
  return (
    <Section title="Work Experience">
      <LoadingPlaceholder data={workExperience} setData={setWorkExperience} placeholder="Loading work experience data...">
        <WorkExperienceTable />
      </LoadingPlaceholder>
    </Section>
  )
}
