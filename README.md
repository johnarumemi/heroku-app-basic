# Heroku App Basic

Creation and deployment to Heroku of a basic backend application using Node.js, Express and PostgreSQL.

## Scripts

```shell
npm run db:reset
```

+ drops the database 
+ creates the database
+ run the migrations 
+ run seeds again whenever we need!

```
npx sequelize-cli db:drop &&        // Drop Database
npx sequelize-cli db:create &&      // Create Database
npx sequelize-cli db:migrate &&     // Run All Migrations
npx sequelize-cli db:seed:all       // Run All Seeders
```
