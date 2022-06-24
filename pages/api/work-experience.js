import workExperience from './data/work-experience.json'

export default function handler(req, res) {
  res.status(200).json({ workExperience })
}
