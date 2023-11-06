# Social_network_api

Watch a video demonstration of the API's functionality here [Walkthrough Video](https://drive.google.com/file/d/1ehHgGtvoTI7NK3N7QKEBNpeeo3df0D5N/view)
. The video showcases how to use the API.

[Walkthrough Video](https://drive.google.com/file/d/1ehHgGtvoTI7NK3N7QKEBNpeeo3df0D5N/view)


## Description

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the last part of this course, we've built an API for a social network web application using Express.js for routing, a MongoDB database, and the Mongoose ODM. This API allows users to share their thoughts, react to friends' thoughts, and manage their friend list.


## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)


## Features

- Posting thoughts and reactions
- Managing friends
- Analytics and insights

## Table of Contents
- [Description](#description)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Walkthrough Video](#walkthrough-video)
- [Contributing](#contributing)
- [License](#license)

## Description

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the last part of this course, we've built an API for a social network web application using Express.js for routing, a MongoDB database, and the Mongoose ODM. This API allows users to share their thoughts, react to friends' thoughts, and manage their friend list.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Features

- User authentication
- Posting thoughts and reactions
- Managing friends and followers
- Notifications
- Privacy controls
- Analytics and insights


### API Endpoints

Explore the API's functionality through the following endpoints:

- `GET /api/users`: Retrieve a list of all users.
- `GET /api/users/`:userId: Get a user by their ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/`:userId: Update a user by ID.
- `DELETE /api/users/`:userId: Delete a user by ID.
- `POST /api/users/`:userId/friends/:friendId: Add a friend to a user's friend list.
- `DELETE /api/users/`:userId/friends/:friendId: Remove a friend from a user's friend list.
And more...


## License 

This project is under the MIT license


By building this Social Network API, we've harnessed the power of MongoDB and Express.js to create a foundation for full-stack applications with social networking capabilities. Whether you're developing a social media app, a community platform, or enhancing an existing service, this API empowers developers to create connected and engaging environments.