import activities from './data/activities.json'

export default function handler(req, res) {
  res.status(200).json({ activities })
}
