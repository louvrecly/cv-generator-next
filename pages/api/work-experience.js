import workExperience from './data/work-experience.json'
import { filterByShow } from 'services/utils'

export default function handler(req, res) {
  const filteredWorkExperience = filterByShow(workExperience)

  res.status(200).json({ workExperience: filteredWorkExperience })
}
