import User from './user.model'

export async function getUsers (req, res) {
  const limit = parseInt(req.query.limit, 10) || 5
  const skip = parseInt(req.query.skip, 10) || 0

  const sortBy = req.query.sortBy || 'name'

  const filter = {
    ...(req.query.name && { name: req.query.name }),
    ...(req.query.email && { email: req.query.email })
  }

  try {
    const users = await User.list({ limit, skip, sortBy, filter })

    return res.status(200).json(users)
  } catch (e) {
    return res.status(400).json(e)
  }
}
