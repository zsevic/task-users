import User from './user.model'

export async function getUsers (req, res) {
  // pagination
  const limit = parseInt(req.query.limit, 10) || 5
  const skip = parseInt(req.query.skip, 10) || 0
  // sorting
  const sortBy = req.query.sortBy || 'name'
  // filtering
  const filter = {}
  if (req.query.name) {
    filter.name = req.query.name
  }
  if (req.query.email) {
    filter.email = req.query.email
  }

  try {
    const users = await User.list({ limit, skip, sortBy, filter })

    return res.status(200).json(users)
  } catch (e) {
    return res.status(400).json(e)
  }
}
