# userRegisterAPI

## Tech Stack
1. Backend : Nodejs, Expressjs
2. Database : Mongodb

## Run Locally
clone the project
```
git clone https://github.com/Rahulkumawat786/DriveSales-Employee-Manage-Task
```
go to the project directory
```
cd userRegisterAPI
```
install dependencies
```
npm install
```
create a .env file in the project directory and assign environment variable
```
PORT (ex: 8080)
MONGO_URI (ex: "mongodb://localhost:27017")
JWT_SECRET (ex: bbfafjjfkjknjkfnhsduaj)
SENDER_EMAIL (email from which user get the mail about successful registration)
SENDER_PASS (email password, don't forgot to enable less secure app in your gmail account or generate App Password and use it instead of Password)
HOST (host name for your email ex: smtp.gmail.com)
SERVER_NAME (server name of email provider ex gmail.com)
```
