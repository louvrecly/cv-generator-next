import user from './data/user.json'

export default function handler(req, res) {
  res.status(200).json({ data: user })
}
