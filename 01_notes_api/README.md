# Notes API

A RESTful Notes API built with Node.js, Express.js, MongoDB and JWT authentication.

## Features

- User registration
- User login
- Password hashing with bcrypt
- JWT authentication
- Create notes
- Get user's notes
- Get a single note
- Update notes
- Delete notes
- Search notes
- Pagination
- User-specific authorization
- Input validation
- Centralized error handling

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Postman

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |

### Notes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/notes` | Get user's notes |
| GET | `/api/notes/:id` | Get one note |
| POST | `/api/notes` | Create note |
| PUT | `/api/notes/:id` | Update note |
| DELETE | `/api/notes/:id` | Delete note |
| GET | `/api/notes/search?keyword=node` | Search notes |

## Authentication

Protected endpoints require:

Authorization:

Bearer `<JWT_TOKEN>`

## Project Structure

```text
01-notes-api/
├── bin/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── notesController.js
├── middleware/
│   ├── authMiddleware.js
│   ├── errorHandler.js
│   └── validateNote.js
├── models/
│   ├── Note.js
│   └── User.js
├── routes/
│   ├── auth.js
│   └── notes.js
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md