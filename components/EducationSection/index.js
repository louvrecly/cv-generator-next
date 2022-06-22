import Section from 'components/Section'
import LoadingPlaceholder from 'components/LoadingPlaceholder'
import EducationTable from './EducationTable'

export default function EducationSection({ education }) {
  return (
    <Section title="Education">
      <LoadingPlaceholder data={education} placeholder="Loading education data...">
        <EducationTable />
      </LoadingPlaceholder>
    </Section>
  )
}
