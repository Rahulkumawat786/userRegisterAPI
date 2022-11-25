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
run the server
```
npm start
```

### API Testing in POSTMAN
Let server is running on port 8080
1. Register user
API Endpoint= POST: http://localhost:8080/register
![image](https://user-images.githubusercontent.com/75028176/203973129-83a81238-8774-4beb-a81e-cf2263019b9f.png)

2. Login User
API Endpoint= POST: http://localhost:8080/login
![image](https://user-images.githubusercontent.com/75028176/203973201-c4efd77c-02da-41b0-a059-ce2833634b42.png)

Take a note of this token that is returned during login

3. Upload Image
API Endpoint= POST: http://localhost:8080/upload

(a) first assign the Authorization using Bearer Toekn
![image](https://user-images.githubusercontent.com/75028176/203973714-bc7c6a46-d77b-4c9b-babb-3411a074cd89.png)

(b) give a image file in the form data using key - image
![image](https://user-images.githubusercontent.com/75028176/203974261-03018afd-729a-4a37-b3f1-69d87f2cf417.png)

use this <image_id> to get the image

4. Get Image
API Endpoint= GET: http://localhost:8080/<image_id>
![image](https://user-images.githubusercontent.com/75028176/203974589-e22f25d5-3942-4df7-a7b3-d1b3db8d2861.png)

image will be shown in response

#### Any Suggestion?
