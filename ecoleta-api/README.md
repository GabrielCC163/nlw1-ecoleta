### Initializing a new Node.js API project with typescript:
```
npm init 
npm install @types/express ts-node ts-node-dev typescript
```
#### Set up tsconfig.json file:
```
npx tsc --init
```
#### Run the project (see package.json):
```
npm run dev
```

### Set up KNEX and SQLite3:
```
mkdir src/database
npm install knex sqlite3
touch src/database/connection.ts
mkdir src/database/migrations
touch src/database/migrations/<index>_create_<table_name>.ts
touch knexfile.ts
```

#### Run migrations:
```
npx knex --knexfile knexfile.ts migrate:latest
```
##### or (see package.json)
```
npm run knex:migrate
```

#### Run seeds:
```
npx knex --knexfile knexfile.ts seed:run
```
##### or (see package.json)
```
npm run knex:seed
```

#### Install [SQLiteBrowser](https://linuxhint.com/install_sqlite_browser_ubuntu_1804/):
```
sudo apt-get update
sudo apt-get install sqlite3 sqlitebrowser
```
Then, open the database.sqlite file in it.
