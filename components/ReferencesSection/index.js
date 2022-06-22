import Section from 'components/Section'
import EditableBlock from 'components/EditableBlock'
import ReferencesTable from './ReferencesTable'

export default function ReferencesSection({ references, setReferences }) {
  return (
    <Section title="References">
      <EditableBlock data={references} setData={setReferences} placeholder="Loading references data...">
        <ReferencesTable data={references} />
      </EditableBlock>
    </Section>
  )
}
