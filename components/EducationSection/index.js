import Section from 'components/Section'
import LoadingPlaceholder from 'components/LoadingPlaceholder'
import EducationTable from './EducationTable'

export default function EducationSection({ education, setEducation }) {
  return (
    <Section title="Education">
      <LoadingPlaceholder data={education} setData={setEducation} placeholder="Loading education data...">
        <EducationTable />
      </LoadingPlaceholder>
    </Section>
  )
}
