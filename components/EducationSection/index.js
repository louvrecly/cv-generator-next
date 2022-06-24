import Section from 'components/Section'
import EditableBlock from 'components/EditableBlock'
import EducationTable from './EducationTable'
import { filterByShow } from 'services/utils'

export default function EducationSection({ education, setEducation }) {
  return (
    <Section title="Education">
      <EditableBlock data={education} setData={setEducation} placeholder="Loading education data...">
        <EducationTable data={filterByShow(education)} />
      </EditableBlock>
    </Section>
  )
}
