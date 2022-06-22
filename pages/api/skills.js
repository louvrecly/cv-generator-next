import skills from './data/skills.json'
import { filterByShow } from 'services/utils'

export default function handler(req, res) {
  const filteredSkills = filterByShow(skills)

  res.status(200).json({ skills: filteredSkills })
}
