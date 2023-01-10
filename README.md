# Boilerplate

This project used Node.js, Express, PostgreSQL, and Sequelize.

## Get Started

To run this application:

## API

First, we recommend installing [Postman](https://www.postman.com/) to easily test out the API. Remember to add `localhost:8000` to the URL before typing in the API path. (`/api/auth/signup`=>`localhost:8000/api/signup`)

### Sign Up/ Login Routes

How to signup and login.

- POST `/api/auth/signup` allows anyone to make an account <br/>
  &nbsp;&nbsp;-Requires an email and password key inside the body <br/>
  &nbsp;&nbsp;-Example {email: test@test.com, password: password1} <br/>
- POST `/api/auth/signin` when logged in, the response will give the user an access token. The access token must be placed in the header (with "x-access-token" as the key and the given accessToken as the value)  
  &nbsp;&nbsp;-Requires an email and password key inside the body. Also the x-access-token inside the header.<br/>
  &nbsp;&nbsp;-The x-access-token lasts for 24 hours. <br/>
