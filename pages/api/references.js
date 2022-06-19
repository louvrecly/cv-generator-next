import references from './data/references.json'
import { filterByShow } from './utils'

export default function handler(req, res) {
  const filteredReferences = filterByShow(references)

  res.status(200).json({ references: filteredReferences })
}
