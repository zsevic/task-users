import User from './user.model'

export async function getUserList ({ limit, skip, sortData, searchData }) {
  const query = [{
    $project: {
      _id: 0,
      name: 1,
      email: 1,
      address: 1,
      jobTitle: 1
    }
  }, {
    $match: {
      $or: [{
        name: { $regex: new RegExp(searchData, 'i') }
      }, {
        email: { $regex: new RegExp(searchData, 'i') }
      }]
    }
  }, {
    $sort: sortData
  }, {
    $limit: +limit
  }, {
    $skip: +skip
  }]

  return User.aggregate(query)
}
