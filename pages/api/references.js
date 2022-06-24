import references from './data/references.json'

export default function handler(req, res) {
  res.status(200).json({ references })
}
