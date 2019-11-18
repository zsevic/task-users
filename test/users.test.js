import { expect } from 'chai';
import User from '../src/api/users/user.model';
import { createUsers } from '../src/config/database';

describe('API tests', () => {
  before(async () => {
    await User.deleteMany({});
    await createUsers();
  });

  it('GET /users', (done) => {
    api.get('/users').expect(200, done);
  });

  it('GET /users?limit=2', async () => {
    const users = await api.get('/users?limit=2');

    expect(users.body).to.have.length(2);
  });

  it('GET /users?limit=2&skip=2', (done) => {
    api.get('/users?limit=2&skip=2').expect(200, done);
  });

  it('GET /users?sortBy=name', (done) => {
    api.get('/users?sortBy=name').expect(200, done);
  });

  it('GET /users?sortBy=email', (done) => {
    api.get('/users?sortBy=email').expect(200, done);
  });
});
