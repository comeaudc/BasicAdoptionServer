# Steps to Setup an Express/Mongoose Server
1. create server.mjs
2. execute: <code>npm init -y</code>   (to create package.json)
3. execute: <code>npm i express dotenv mongoose</code>
4. edit package.json to correct files/commands (ie. nodemon server.mjs)
5. create:   .gitignore & .env 
6. ignore both: node_modules/ & .env
7. populate .env w/ PORT & mongoURI (same as mongodb driver str, to specify DB add it to the end of connection string)
8. setup server.js boilerplate
9. setup DB connection


## DB Connection
1. import: mongoose & dotenv
2. setup dotenv and connectionstr in variable
3. create async connection function w/trycatch
4. await mongoose.connect(connectionStr)
5. export function

## Schema Creation
1. import: mongoose
2. const newSchema = new mongoose.Schema({});
3. export default mongoose.model('CollectionName', newSchema);
4. populate schema info
