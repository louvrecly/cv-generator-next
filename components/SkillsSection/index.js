import Section from 'components/Section'
import EditableBlock from 'components/EditableBlock'
import SkillsTable from './SkillsTable'

export default function SkillsSection({ skills, setSkills }) {
  return (
    <Section title="Skills">
      <EditableBlock data={skills} setData={setSkills} placeholder="Loading skills data...">
        <SkillsTable />
      </EditableBlock>
    </Section>
  )
}
