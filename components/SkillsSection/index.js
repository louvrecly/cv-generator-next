import Section from '@/components/Section'
import EditableBlock from '@/components/EditableBlock'
import SkillsTable from './SkillsTable'
import { filterByShow } from '@/services/utils'

export default function SkillsSection({ skills, setSkills }) {
  return (
    <Section title="Skills and Capabilities">
      <EditableBlock data={skills} setData={setSkills} placeholder="Loading skills data...">
        <SkillsTable data={filterByShow(skills)} />
      </EditableBlock>
    </Section>
  )
}
