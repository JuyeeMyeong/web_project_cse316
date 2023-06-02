# Getting Started

In this project, we used React for frontend

{Backend specification}
cors: ^2.8.5
dotenv: ^16.0.3
express: ^4.18.2
mysql2: ^3.3.2

## HOW TO START

At 'db' folder, make '.env' file and fill up:

DB*HOST="\_your host name here*"

DB*USER="\_your user name here*"

DB*PASSWORD="\_your password here*"

DB*PORT="\_your port # here*"

I recommend you to use port number 4000 for this project.

{If your port number is not 4000,
add "proxy": "http://localhost:3306",
in your package.json file in both
root directory of the projecgt & db folder}

\*\* There are total 2 package.json files in this project

To use data.sql file, you have to go to MySQL Command Line Client and write a command:
source _your sql file path_

or, you can go to MySQL Workbench 
'open a SQL script file in a new query tab' button
and run this data.sql file.

In the project directory, you can run:

### `npm install`

Next, in the db directory, you can run, again:

### `npm install`

\*\* You have to run npm install twice for each directory

If you want to use nodemon,
open the terminal, and at the project's root directory -> cd db -> npm start

If you don't want to use nodemon,
open the terminal, and at the project's root directory -> cd db -> node server.js

Now, back to the root directory, run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
