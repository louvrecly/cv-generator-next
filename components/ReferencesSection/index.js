import Section from 'components/Section'
import LoadingPlaceholder from 'components/LoadingPlaceholder'
import ReferencesTable from './ReferencesTable'

export default function ReferencesSection({ references, setReferences }) {
  return (
    <Section title="References">
      <LoadingPlaceholder data={references} setData={setReferences} placeholder="Loading references data...">
        <ReferencesTable />
      </LoadingPlaceholder>
    </Section>
  )
}
