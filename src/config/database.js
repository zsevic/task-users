import mongoose from 'mongoose';
import faker from 'faker';
import constants from './constants';
import User from '../api/users/user.model';

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

export const createUsers = async () => {
  const createUsersPromise = [];
  for (let i = 0; i < 6; i += 1) {
    const user = new User({
      name: faker.name.findName(),
      email: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
      address: faker.address.streetAddress(),
    });
    createUsersPromise.push(user.save());
  }

  await Promise.all(createUsersPromise);
};

try {
  mongoose.connect(constants.MONGODB_URL);
} catch (err) {
  mongoose.createConnection(constants.MONGODB_URL);
}

const isTest = process.env.NODE_ENV === 'testing';

mongoose.connection
  .once('open', async () => {
    console.log('Connection with database is established');

    if (!isTest) {
      await User.deleteMany({});
      await createUsers();
    }
  })
  .on('error', (e) => {
    throw e;
  });
