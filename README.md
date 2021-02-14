# Heroku App Basic

Creation and deployment to Heroku of a basic backend application using Node.js, Express and PostgreSQL.

## Table of Contents
+ [Technologies](#technologies)
+ [Heroku](#heroku)
+ [Scripts](#scripts)

## Technologies
+ Express.js + additional middlewares
+ Sequelize
+ PostgreSQL - (pg and pg-hstore)

## Heroku
__APP NAME__: heroku-app-basic

+ <https://heroku-app-basic.herokuapp.com/>
  
+ <https://git.heroku.com/heroku-app-basic.git>

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
