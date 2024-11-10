# Task Management Application

A powerful and responsive task management application built with TypeScript, React, and Node.js (Express). This application supports CRUD operations, task timeout handling, and integration with the Twitch API for live streaming data.

## Table of Contents

- [Objective](#objective)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [File Structure](#file-structure)
- [Screenshots](#screenshots)
- [License](#license)

---

## Objective

Develop a full-stack task management application with CRUD functionality, automatic timeout handling for tasks, and integration with the Twitch API to fetch live streaming data.

## Technologies Used

### Frontend

- **Framework**: React with TypeScript
- **State Management**: React Hooks, Context API
- **Styling**: CSS and CSS-in-JS
- **Form Handling**: Built-in React hooks with validation
- **Async Operations**: `async/await` for API interactions

### Backend

- **Framework**: Node.js with Express and TypeScript
- **Database**: MongoDB (or in-memory)
- **Streaming API Integration**: Twitch API
- **Error Handling**: Comprehensive error handling and validations

### Deployment

- **Frontend**: Vercel
- **Backend**: Render
- **Environment Configuration**: Environment variables for secure API communication

---

## Features

### Frontend

- **Task List**: Display a list of tasks.
- **Task Item**: Show individual task details.
- **Task Form**: Add or edit tasks with validation and error handling.
- **Category Slider**: Navigate between categories ("To Do", "In Progress", "Done", "Timeout").
- **User Experience**: Loading indicators, error messages, and responsive design.

### Backend

- **Task CRUD Operations**: Complete endpoints for creating, reading, updating, and deleting tasks.
- **Streaming Data Endpoint**: Integrates with Twitch API for live streaming data.
- **Timeout Handling**: Moves tasks to the "Timeout" category if the duration exceeds a specified limit.

---

## Installation

### Prerequisites

- **Node.js** and **npm** installed
- **MongoDB** (or an alternative database setup such as MongoDB Atlas for cloud storage)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd task-manager-app
   ```
   Install Dependencies:

bash npm install

Build the Application:

bash npm run build

Usage Frontend: Access the frontend via Vercel.
Backend: Access the backend API hosted on Render.
API Endpoints

Task Management:
/tasks GET Fetch all tasks
/tasks/:id GET Fetch a task by ID
/tasks POST Create a new task
/tasks/:id PUT Update a task by ID
/tasks/:id DELETE Delete a task by ID

Streaming API Integration
/streaming `GET` Fetch data from Twitch API

Environment Variables:

Create a `.env` file in the root directory and set the following environment variables:

TWITCH_CLIENT_ID=your_twitch_client_id
TWITCH_CLIENT_SECRET=your_twitch_client_secret
MONGO_URI=your_mongodb_connection_string
PORT=the_port_for_express_app

Here’s the full content of a README.md file, incorporating the technologies, setup instructions, and an organized project outline:

markdown
Copy code

# Task Management Application

A powerful and responsive task management application built with TypeScript, React, and Node.js (Express). This application supports CRUD operations, task timeout handling, and integration with the Twitch API for live streaming data.

## Table of Contents

- [Objective](#objective)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [File Structure](#file-structure)
- [Screenshots](#screenshots)
- [License](#license)

---

## Objective

Develop a full-stack task management application with CRUD functionality, automatic timeout handling for tasks, and integration with the Twitch API to fetch live streaming data.

## Technologies Used

### Frontend

- **Framework**: React with TypeScript
- **State Management**: React Hooks, Context API
- **Styling**: CSS and CSS-in-JS
- **Form Handling**: Built-in React hooks with validation
- **Async Operations**: `async/await` for API interactions

### Backend

- **Framework**: Node.js with Express and TypeScript
- **Database**: MongoDB (or in-memory)
- **Streaming API Integration**: Twitch API
- **Error Handling**: Comprehensive error handling and validations

### Deployment

- **Frontend**: Vercel
- **Backend**: Render
- **Environment Configuration**: Environment variables for secure API communication

---

## Features

### Frontend

- **Task List**: Display a list of tasks.
- **Task Item**: Show individual task details.
- **Task Form**: Add or edit tasks with validation and error handling.
- **Category Slider**: Navigate between categories ("To Do", "In Progress", "Done", "Timeout").
- **User Experience**: Loading indicators, error messages, and responsive design.

[Important-Note:] **Due to Some Technical Errors Frontend part is not Complete**

### Backend

- **Task CRUD Operations**: Complete endpoints for creating, reading, updating, and deleting tasks.
- **Streaming Data Endpoint**: Integrates with Twitch API for live streaming data.
- **Timeout Handling**: Moves tasks to the "Timeout" category if the duration exceeds a specified limit.

---

## Installation

### Prerequisites

- **Node.js** and **npm** installed
- **MongoDB** (or an alternative database setup such as MongoDB Atlas for cloud storage)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd task-manager-app
   Install Dependencies:
   ```

bash
Copy code
npm install
Build the Application:

bash
Copy code
npm run build
Run the Application:

bash
Copy code
npm start
Usage
Frontend: Access the frontend via Vercel.
Backend: Access the backend API hosted on Render.
API Endpoints
Task Management
Endpoint Method Description
/tasks GET Fetch all tasks
/tasks/:id GET Fetch a task by ID
/tasks POST Create a new task
/tasks/:id PUT Update a task by ID
/tasks/:id DELETE Delete a task by ID
Streaming API Integration
Endpoint Method Description
/streaming GET Fetch data from Twitch API
Environment Variables
Create a .env file in the root directory and set the following environment variables:

plaintext
Copy code
TWITCH_CLIENT_ID=your_twitch_client_id
TWITCH_CLIENT_SECRET=your_twitch_client_secret
MONGO_URI=your_mongodb_connection_string
PORT=the_port_for_express_app
These variables are required for backend communication with MongoDB and the Twitch API.

### Deployment

1 Frontend Deployment (Vercel)
2 Push your frontend code to GitHub or another Git provider.
3 Link the repository to Vercel.
4 Set up environment variables for the backend API URL.
5 Deploy to get a live frontend URL.

### Backend Deployment (Render)

1 Push your backend code to GitHub.
2 Connect the repository to Render.
3 Set environment variables on Render for Twitch and MongoDB.
4 Set up the following commands:
5 Build Command: npm run build
6 Start Command: npm start
7 Deploy to get a live backend URL.

**Due to Some Technical Errors Frontend part is not Complete**
