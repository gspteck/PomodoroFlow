<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Tasks;

class TasksController extends Controller
{
    public function getAllTasks() {
        $tasks = Tasks::all();
        return response()->json($tasks);
    }

    public function createTask(Request $request) {
        try {
            $validatedData = $request->validate([
                'user_id' => 'required|integer',
                'task_title' => 'required|string|max:255',
                'task_description' => 'nullable|string',
                'task_status' => 'required|boolean',
                'task_due_date' => 'nullable|date',
                'task_priority' => 'nullable|integer', //  0 - 2 => LOW - HIGH
            ]);

            $task = Tasks::create($validatedData);

            return response()->json([
                "message" => "Task Added Successfully.",
                "task" => $task
            ], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error creating task', 'message' => $e->getMessage()], 500);
        }
    }

    public function getSingleTask($id) {
        try {
            $task = Tasks::find($id);
            if (!empty($task)) {
                return response()->json($task);
            } else {
                return response()->json([
                    "message" => "Task not found."
                ], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error creating task', 'message' => $e->getMessage()], 500);
        }
    }

    public function deleteTask($id) {
        try {
            if (Tasks::where('id', $id)->exists()) {
                $task = Tasks::find($id);
                $task->delete();

                return response()->json([
                    "message" => "Task deleted successfully."
                ], 202);
            } else {
                return response()->json([
                    "message" => "Task not found."
                ], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error creating task', 'message' => $e->getMessage()], 500);
        }
    }

    public function updateTask(Request $request, $id) {
        try {
            if (Tasks::where('id', $id)->exists()) {
                $task = Tasks::find($id);

                $task->task_title = is_null($request->task_title) ? $task->task_title : $request->task_title;
                $task->task_description = is_null($request->task_description) ? $task->task_description : $request->task_description;
                $task->task_status = is_null($request->task_status) ? $task->task_status : $request->task_status;
                $task->task_due_date = is_null($request->task_due_date) ? $task->task_due_date : $request->task_due_date;
                $task->task_priority = is_null($request->task_priority) ? $task->task_priority : $request->task_priority;

                $task->save();

                return response()->json([
                    "message" => "Task updated successfully"
                ], 200);
            } else {
                return response()->json([
                    "message" => "Task not found"
                ], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error creating task', 'message' => $e->getMessage()], 500);
        }
    }
}
