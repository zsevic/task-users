import 'dotenv/config';

const devConfig = {
  MONGODB_URL:
    process.env.MONGODB_URL || 'mongodb://localhost:27017/task-users',
};

const testConfig = {
  MONGODB_URL:
    process.env.MONGODB_URL || 'mongodb://localhost:27017/task-testdb',
};

const prodConfig = {
  MONGODB_URL: process.env.MONGODB_URL,
};

const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'testing':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default { ...defaultConfig, ...envConfig(process.env.NODE_ENV) };
