import * as userService from './user.service';

export async function getUserListHandler(req, res) {
  const limit = parseInt(req.query.limit, 10) || 5;
  const skip = parseInt(req.query.skip, 10) || 0;
  const sortData = {
    ...(req.query.sortBy ? { [req.query.sortBy]: 1 } : { name: 1 }),
  };
  const searchData = req.query.search || '';

  try {
    const users = await userService.getUserList({
      limit, skip, sortData, searchData,
    });

    return res.status(200).json(users);
  } catch (e) {
    return res.status(400).json(e);
  }
}
