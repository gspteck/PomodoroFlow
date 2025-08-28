<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserAuthController;
use App\Http\Controllers\TasksController;

//  //  Auth Endpoints
//  TEST:
//  - Register
//  curl -X POST http://127.0.0.1:8000/api/register -H "Content-Type: application/json" -d '{"name": "tester", "email": "testing@email.com", "password": "testing123"}'
//  - Login
//  curl -X POST http://127.0.0.1:8000/api/login -H "Content-Type: application/json" -d '{"email": "testing@email.com", "password": "testing123"}'
//  - Logout
//  curl -X POST http://127.0.0.1:8000/api/logout -H "Authorization: Bearer {token}"
//  - User
//  curl -X GET http://127.0.0.1:8000/api/user -H "Authorization: Bearer {token}"

Route::post('/register', [UserAuthController::class, 'register']);
Route::post('/login', [UserAuthController::class, 'login']);
Route::post('/logout', [UserAuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/user', [UserAuthController::class, 'getUser'])->middleware('auth:sanctum');

//  //  Task Endpoints
//  TEST:
//  - Get All Tasks
//  curl -X GET http://127.0.0.1:8000/api/tasks/{user_id} -H "Authorization: Bearer {access_token}"
//  - Create Tasks
//  curl -X POST http://127.0.0.1:8000/api/tasks -H "Content-Type: application/json" -d '{"user_id": "123","task_title": "Finish Report","task_description": "Complete the annual report.","task_status": true,"task_due_date": "2024-12-31","task_priority": 2}' -H "Authorization: Bearer {access_token}"
//  - Get Single Task
//  curl -X GET http://127.0.0.1:8000/api/tasks/{id} -H "Authorization: Bearer {access_token}"
//  - Update Tasks
//  curl -X PUT http://127.0.0.1:8000/api/tasks/{id} -H "Content-Type: application/json" -d '{"task_title": "Finish Updated Report", "task_description": "Update the annual report.", "task_status": false, "task_due_date": "2025-01-15", "task_priority": 1}' -H "Authorization: Bearer {access_token}"
//  - Delete Task
//  curl -X DELETE http://127.0.0.1:8000/api/tasks/{id} -H "Authorization: Bearer {access_token}"

Route::middleware('auth:sanctum')->group(function() {
    Route::get('/tasks/{user_id}', [TasksController::class, 'getAllTasks']);
    Route::post('/tasks', [TasksController::class, 'createTask']);
    Route::get('/tasks/{id}', [TasksController::class, 'getSingleTask']);
    Route::put('/tasks/{id}', [TasksController::class, 'updateTask']);
    Route::delete('/tasks/{id}', [TasksController::class, 'deleteTask']);
});
