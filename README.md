# task-users

### :wrench: Setup

```bash
git clone https://github.com/zsevic/task-users
cd task-users
cp .env.sample .env # change values
npm i
npm run dev
```

### :construction_worker: Build

```bash
npm run build
npm start
```

### :rotating_light: Testing

```bash
npm test
```

### :arrow_right: Usage

```bash
# get first 5 users
GET /users
# get first 2 users
GET /users?limit=2
# get second 2 users
GET /users?limit=2&skip=2
# get users sorted by name
GET /users?sortBy=name
# get users sorted by email
GET /users?sortBy=email
# get users filtered by name
GET /users?name=<NAME>
# get users filtered by email
GET /users?email=<EMAIL>
# sort and filter
GET /users?sortBy=email&name=<NAME>
GET /users?limit=2&sortBy=name&email=<EMAIL>
```

### :package: Technologies used
* Node.js, Express, MongoDB