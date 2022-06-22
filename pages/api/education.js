import education from './data/education.json'
import { filterByShow } from 'services/utils'

export default function handler(req, res) {
  const filteredEducation = filterByShow(education)

  res.status(200).json({ education: filteredEducation })
}
