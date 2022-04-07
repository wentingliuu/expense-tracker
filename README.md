# Expense Tracker
A project built with [Node.js](https://nodejs.org/en/), [Express.js](https://expressjs.com/), and [MongoDB](https://www.mongodb.com/) for you to track your personal expenses. 💰💰💰  

Please register an account via email address first, or you may quick login with Facebook, cause all the expenses would be only keep in your own account.

🌟 To try this project, you could use the **[dummy data](https://github.com/wentingliuu/expense-tracker#dummy-user-data)** to login.  
🌟 This project is deployed on **[HEROKU](https://morning-wave-00395.herokuapp.com/)** as well !!!

## Features
*  **REGISTER:** sign up an account with name, email, password
*  **LOGIN:** sign in to review your own expenses
*  **LOGIN with 3rd-party account:** quick login with Facebook account
*  **LOGOUT:** sign out the account by clicking the logout button
*  **CREATE:** record your expense (with item name, date, category, amount) at the create page 
*  **READ:** review all the expenses at the home page
*  **UPDATE:** click the edit button to modify expense's data
*  **DELETE:** click the delete button to delete the expense
*  **FILTER:** filter the expenses by category

## Screenshots
*  **CRUD** expense records
![CRUD](https://github.com/wentingliuu/expense-tracker/blob/main/public/screenshot.gif)

## Installation and Execution
1.  Clone the files to your computer
```
git clone https://github.com/wentingliuu/expense-tracker.git
```
2. Init: install the npm packages
```
cd expense-tracker
```
```
npm install
```
3. Create .env file and store API Key in the file
```
touch .env
```
- Please see [.env.example](https://github.com/wentingliuu/expense-tracker/blob/main/.env.example) for reference.
- Please get your own Facebook API key from [Facebook](https://developers.facebook.com/)
4. Run MongoDB Server
```
cd ~/mongodb/bin/
```
```
./mongod --dbpath <path to mongodb-data directory>
```
- While the terminal shows `waiting for connections on port 27017`, MongoDB has started successfully.
5. Insert seeder
```
npm run seed
```
6. Run the project
```
npm run dev
```
- While the terminal returns `Express is listening on localhost:3000`, please visit http://localhost:3000 on your browser.


## Dummy user data
#### After inserting the seeder, you may use the following dummy data to experience this web application.
| Email              | Password |
| -------------------| ---------|
| user1@example.com  | 12345678 |
| user2@example.com  | 12345678 |


## Prerequisites
*  [Visual Studio Code](https://code.visualstudio.com/) - development environment
*  [Node.js](https://nodejs.org/en/) & [npm](https://www.npmjs.com/) - JavaScript runtime environment
*  [Express.js](https://expressjs.com/) - web application framework
*  [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - template engine
*  [MongoDB](https://www.mongodb.com/) - document-oriented database
*  [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool(OBM)
*  [body-parser](https://www.npmjs.com/package/body-parser) - middleware
*  [method-override](https://www.npmjs.com/package/method-override) - middleware
*  [express-session](https://www.npmjs.com/package/express-session) - middleware
*  [passport](http://www.passportjs.org/) - authentication middleware for Node.js
*  [bcrypt.js](https://www.npmjs.com/package/bcryptjs) - middleware
*  [Facebook for Developer](https://developers.facebook.com/) - get APP_ID & APP_SECRET for passport-facebook
