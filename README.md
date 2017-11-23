## What is the problem?

Nest child associations into their parents.

```
-- Application
---- Features
------ Parameters
```

- **Given:** An application ID
- **When:** I make a query to find the application by ID
- **Then:** I want all application's features children nested into it as an array
- **And:** All feature's parameters children nested into each feature as an array

## How to run

```shell
# sqlite 
npm run sqlite:setup
npm run sqlite:run
```

```shell
# psql
npm run psql:setup
npm run psql:run
```

```
# mysql 

# first you'll need create a database poc_knex_associations
npm run mysql:setup
npm run mysql:run
```
