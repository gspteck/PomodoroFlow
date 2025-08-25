<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserAuthController;
use App\Http\Controllers\TasksController;

//  Auth Endpoints
Route::post('/register', [UserAuthController::class, 'register']);
Route::post('/login', [UserAuthController::class, 'login']);
Route::post('/logout', [UserAuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/user', [UserAuthController::class, 'getUser']);

//  Task Endpoints
Route::get('/tasks', [TasksController::class, 'getAllTasks']);
Route::post('/tasks', [TasksController::class, 'createTask']);
Route::get('/tasks/{id}', [TasksController::class, 'getSingleTask']);
Route::put('/tasks/{id}', [TasksController::class, 'updateTask']);
Route::delete('/tasks/{id}', [TasksController::class, 'deleteTask']);
