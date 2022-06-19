import skills from './data/skills.json'
import { filterByShow } from './utils'

export default function handler(req, res) {
  const filteredSkills = filterByShow(skills)

  res.status(200).json({ skills: filteredSkills })
}
