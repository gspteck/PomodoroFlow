<?php

use Illuminate\Support\Facades\Route;

//  //  Auth Endpoints
//  Register a new account
Route::post('/api/register', function () {

});

//  Login to existing account
Route::post('/api/login', function () {

});

//  Get current user data
Route::get('/api/user', function () {

});


//  //  Task Endpoints
//  Get all tasks
Route::get('/api/tasks', function () {

});

//  Create a new task
Route::post('/api/tasks', function () {

});

//  Get a specific task using task_id
Route::get('/api/tasks/{task_id}', function () {

});

//  Update a specific task using task_id
Route::put('/api/tasks/{task_id}', function () {

});

//  Delete a specific task using task_id
Route::delete('/api/tasks/{task_id}', function () {

});
