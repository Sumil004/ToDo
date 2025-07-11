# ToDo App

A full-stack ToDo application built with **React** (frontend) and **Node.js/Express** (backend), featuring authentication, CRUD operations, and a responsive UI with dark mode support.

## Features

- User registration and login (JWT-based authentication)
- Create, view, edit, and delete todos
- Assign up to 4 users per todo (with name, email, phone validation)
- Responsive design with Tailwind CSS
- Dark mode toggle
- Protected routes (client-side)
- RESTful API with validation and error handling

## Project Structure

```
Backend/
  app.js
  server.js
  config/
  controllers/
  middlewares/
  models/
  routes/
  services/
  utils/
client/
  src/
  public/
  index.html
  package.json
  tailwind.config.js
  vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js (v20.x recommended)
- MongoDB (local or cloud instance)

### Backend Setup

1. Navigate to the `Backend` folder:
   ```sh
   cd Backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with:
   ```
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```
   The API will be available at `http://localhost:4000/api`.

### Frontend Setup

1. Navigate to the `client` folder:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

## Usage

- Register a new account or login.
- Create, view, edit, and delete todos.
- Assign users to each todo (name, email, phone required).
- Toggle dark mode using the header button.

## Technologies Used

- **Frontend:** React, React Router, Tailwind CSS, Axios, Vite
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs, express-validator

## API Endpoints

- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/todos` - List todos
- `GET /api/todos/:id` - Get todo details
- `POST /api/todos` - Create todo
- `PUT /api/todos/:id` - Edit todo
- `DELETE /api/todos/:id` - Delete todo




---

**Note:** This project uses an in-memory user store for authentication (for demo purposes). For production, integrate a persistent user database.
