import Section from 'components/Section'
import EditableBlock from 'components/EditableBlock'
import EducationTable from './EducationTable'

export default function EducationSection({ education, setEducation }) {
  return (
    <Section title="Education">
      <EditableBlock data={education} setData={setEducation} placeholder="Loading education data...">
        <EducationTable data={education} />
      </EditableBlock>
    </Section>
  )
}
