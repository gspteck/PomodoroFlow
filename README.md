# PomodoroFlow

## Overview
A full-stack task management application built with Laravel (backend) and React.js (frontend). Users can register, log in, and manage their tasks.

---

## Features
- User registration & login (token-based authentication with Laravel Sanctum)
- Manage personal tasks (create, read, update, delete)
- Tasks include title, description, status, due date, priority
- Filter tasks by status (not implemented yet)
- Sort tasks by due date or priority (not implemented yet)
- Light/Dark mode toggle (not implemented yet)

---

## Technologies Used

### Backend
- Laravel 10+
- PHP 8.1+
- Laravel Sanctum for authentication
- JSON API responses

### Frontend
- React 18+
- Fetch for API requests
- React Router for routing

---

## Project Structure
```
root/
├── backend/            # Laravel API backend
├── frontend/           # React SPA frontend
└── README.md           # Documentation
```

---

## Setup Instructions

### Backend (Laravel)

1. **Clone the repository and navigate to backend folder:**
   ```bash
   git clone https://github.com/gspteck/PomodoroFlow.git
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   composer install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Set database credentials and other environment variables.

4. **Generate application key:**
   ```bash
   php artisan key:generate
   ```

5. **Run migrations:**
   ```bash
   php artisan migrate
   ```

6. **Run the server:**
   ```bash
   php artisan serve
   ```
   - API will be available at `http://localhost:8000/api`

## Optional Docker Installation
### Building the Docker Image
```bash
sudo docker compose build
```

### Running the Docker Container
```bash
sudo docker compose up -d
```

### Frontend (React)

1. **Navigate to frontend folder:**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure API base URL:**
   - Update the API URL in your React project (e.g., in `.env` or in code).

4. **Run the React app:**
   ```bash
   npm start
   ```
   - The frontend will be available at `http://localhost:3000`

---

## API Endpoints Documentation

| Method | Endpoint | Description | Request Body | Auth Required |
|---------|------------|--------------|--------------|--------------|
| POST | /api/register | Register a new user | { name, email, password } | No |
| POST | /api/login | Login user | { email, password } | No |
| GET | /api/user | Get current user info | | Yes |
| GET | /api/tasks/{user_id} | List user's tasks | | Yes |
| POST | /api/tasks | Create new task | { title, description (optional), status, due_date (optional), priority (optional) } | Yes |
| GET | /api/tasks/{id} | View task | | Yes |
| PUT | /api/tasks/{id} | Update task | { title, description, status, due_date, priority } | Yes |
| DELETE | /api/tasks/{id} | Delete task | | Yes |

---
