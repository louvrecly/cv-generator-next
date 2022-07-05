import portfolio from './data/portfolio.json'

export default function handler(req, res) {
  res.status(200).json({ portfolio })
}
