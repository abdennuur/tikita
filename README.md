# Tikita: Event Management Platform

Tikita is an innovative event management platform designed to simplify the process of organizing and attending events. Whether you're an event organizer or an attendee, Tikita provides a seamless experience for managing and participating in events.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Secure registration and login using JWT (JSON Web Tokens).
- **Event Management:** Create, view, and manage events with detailed information.
- **Image Upload:** Upload images for events to give them a visual identity.
- **Responsive Design:** Optimized for all screen sizes.
- **Protected Routes:** Restrict certain actions to authenticated users only.
- **Dynamic Frontend:** An interactive frontend built with React.

## Tech Stack

### Frontend

- React
- React Router DOM
- Axios
- HTML5/CSS3
- JavaScript (ES6+)

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Multer for image uploads

### Tools

- Postman for API testing
- MongoDB Compass for database management
- Git/GitHub for version control

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB set up either locally or via MongoDB Atlas.
- Git for version control.

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/tikita.git
    cd tikita
    ```

2. **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the `backend` directory with the following content:

    ```bash
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```

5. **Run the development server:**

    - To start the backend server:

      ```bash
      cd backend
      npm run dev
      ```

    - To start the frontend server:

      ```bash
      cd ../frontend
      npm start
      ```

6. **Access the application:**

   Visit `http://localhost:3000` to access the frontend. The backend API runs on `http://localhost:5000`.

## Usage

- **Register:** Create a new user account.
- **Login:** Log in to your account.
- **Create Event:** Add a new event (only accessible to logged-in users).
- **View Events:** Browse the list of upcoming events.
- **Manage Events:** Edit or delete events that you have created.

## API Documentation

### Endpoints

#### User Authentication

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Log in and receive a JWT token

#### Events

- `GET /api/events` - Get all events
- `POST /api/events` - Create a new event (requires JWT)
- `GET /api/events/:id` - Get a single event by ID
- `PUT /api/events/:id` - Update an event (requires JWT)
- `DELETE /api/events/:id` - Delete an event (requires JWT)

### Authorization

- Add a `Bearer` token to the `Authorization` header for protected routes.

## Folder Structure

```plaintext
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   ├── models
│   │   ├── Event.js
│   │   └── User.js
│   ├── routes
│   │   ├── eventRoutes.js
│   │   └── userRoutes.js
│   ├── middleware
│   │   └── authMiddleware.js
│   ├── .env
│   ├── server.js
│   └── package.json
└── frontend
    ├── public
    │   ├── index.html
    │   └── favicon.ico
    ├── src
    │   ├── assets
    │   │   ├── artexhibition.jpeg
    │   │   ├── marathon.jpeg
    │   │   ├── danceworkshop.jpeg
    │   │   ├── foodfestival.jpeg
    │   │   ├── nightmarket.jpeg
    │   │   ├── techconference.jpeg
    │   │   └── theaterperformance.jpeg
    │   ├── components
    │   │   ├── AboutPage.js
    │   │   ├── CreateEventPage.js
    │   │   ├── EventDetailPage.js
    │   │   ├── EventsPage.js
    │   │   ├── LandingPage.js
    │   │   ├── LoginPage.js
    │   │   └── RegisterPage.js
    │   ├── styles.css
    │   ├── App.js
    │   └── index.js
    └── package.json
