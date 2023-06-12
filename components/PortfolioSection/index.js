import Section from '@/components/Section'
import EditableBlock from '@/components/EditableBlock'
import PortfolioTable from './PortfolioTable'
import { filterByShow } from '@/services/utils'

export default function PortfolioSection({ portfolio, setPortfolio }) {
  return (
    <Section title="Project Experience">
      <EditableBlock data={portfolio} setData={setPortfolio} placeholder="Loading portfolio data...">
        <PortfolioTable data={filterByShow(portfolio)} />
      </EditableBlock>
    </Section>
  )
}
