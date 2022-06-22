import Section from 'components/Section'
import LoadingPlaceholder from 'components/LoadingPlaceholder'
import SkillsTable from './SkillsTable'

export default function SkillsSection({ skills }) {
  return (
    <Section title="Skills">
      <LoadingPlaceholder data={skills} placeholder="Loading skills data...">
        <SkillsTable />
      </LoadingPlaceholder>
    </Section>
  )
}
