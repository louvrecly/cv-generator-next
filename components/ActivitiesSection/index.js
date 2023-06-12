import Section from 'components/Section'
import EditableBlock from 'components/EditableBlock'
import ActivitiesTable from './ActivitiesTable'
import { filterByShow } from 'services/utils'

export default function ActivitiesSection({ activities, setActivities }) {
  return (
    <Section title="Activities and Achievements">
      <EditableBlock data={activities} setData={setActivities} placeholder="Loading activities data...">
        <ActivitiesTable data={filterByShow(activities)} />
      </EditableBlock>
    </Section>
  )
}
