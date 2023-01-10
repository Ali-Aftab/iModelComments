# Bentley iModel Comments API

iModel API that implements comment functionality where users are able to add, retrieve, and delete comments related to an iModel.

## Get Started

To run this application:

1. If you do not have the project saved locally then in your terminal type `git clone https://github.com/Ali-Aftab/iModelComments.git` to clone it to your computer. If you have the project saved locally then in your terminal go to the parent directory where this project is saved.
2. Then type `cd iModelComments` to access the folder
3. To install the required modules type `npm i`
4. Type `npm run start-dev` in your terminal and you can use the API!

## API

First, we recommend installing [Postman](https://www.postman.com/) to test out the API easily. Please remember to add `localhost:8000` to the URL before you type in the API path. (`/api/auth/signup`=>`localhost:8000/api/signup`)

### Comments

How to add, retrieve, and remove comments.
**NOTE: All Routes below require your user-id in the header!**

- GET `/api/imodel/comments/:id` allows a user to retrieve comments from a selected iModel.<br/>
  &nbsp;&nbsp;-Replace `:id` with the id of the iModel in the URL. <br/>

- POST `/api/imodel/comments/:id` allows a user to add comments to a selected iModel.<br/>
  &nbsp;&nbsp;-Replace `:id` with the id of the iModel in the URL. <br/>
  &nbsp;&nbsp;-Requires the written text for the comment and assign it to the `text` key in the body. <br/>
  &nbsp;&nbsp;-Example: {text: "This comment will inspire others to comment on this iModel!"} <br/>

- DELETE `/api/imodel/comments/:id` allows a user to delete a selected comment to a particular iModel.<br/>
  &nbsp;&nbsp;-Replace `:id` with the id of the iModel in the URL. <br/>
  &nbsp;&nbsp;-Requires the comment-id that you would like to delete and assign it to the `comment-id` key in the body. <br/>
  &nbsp;&nbsp;-Example: {comment-id: "REPLACE COMMENT-ID HERE"} <br/>
