import { getUserList } from './user.repository'

export async function getUsers (options) {
  return getUserList(options)
}
