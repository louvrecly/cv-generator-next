import user from './data/user.json'
import { filterByShow } from './utils'

export default function handler(req, res) {
  const filteredUser = filterByShow(user)

  res.status(200).json({ user: filteredUser })
}
