import * as userRepository from './user.repository';

export async function getUserList(options) {
  return userRepository.getUserList(options);
}
