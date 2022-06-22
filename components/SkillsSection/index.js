import Section from 'components/Section'
import LoadingPlaceholder from 'components/LoadingPlaceholder'
import SkillsTable from './SkillsTable'

export default function SkillsSection({ skills, setSkills }) {
  return (
    <Section title="Skills">
      <LoadingPlaceholder data={skills} setData={setSkills} placeholder="Loading skills data...">
        <SkillsTable />
      </LoadingPlaceholder>
    </Section>
  )
}
