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
        $task = new Tasks;

        $task->task_id = $request->task_id;
        $task->user_id = $request->user_id;
        $task->task_title = $request->task_title;
        $task->task_description = $request->task_description;
        $task->task_status = $request->task_status;
        $task->task_due_date = $request->task_due_date;
        $task->task_creation_date = $request->task_creation_date;
        $task->task_update_date = $request->task_update_date;
        $task->task_priority = $request->task_priority;

        $task->save();

        return response()->json([
            "message" => "Task Added Successfully."
        ], 201);
    }

    public function getSingleTask($id) {
        $task = Tasks::find($id);
        if (!empty($task)) {
            return response()->json(task);
        } else {
            return response()->json([
                "message" => "Task not found."
            ], 404);
        }
    }

    public function deleteTask($id) {
        if (Tasks::where('task_id', $id)->exists()) {
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
    }

    public function updateTask(Request $request, $id) {
        if (Tasks::where('task_id', $id)->exists()) {
            $task = Tasks::find($id);

            $task->task_title = is_null($request->task_title) ? $task->task_title : $request->task_title;
            $task->task_description = is_null($request->task_description) ? $task->task_description : $request->task_description;
            $task->task_status = is_null($request->task_status) ? $task->task_status : $request->task_status;
            $task->task_due_date = is_null($request->task_due_date) ? $task->task_due_date : $request->task_due_date;
            $task->task_update_date = 1234; // change to change ith every update to current timestamp;
            $task->task_priority = is_null($request->task_priority) ? $task->task_priority : $request->task_priority;

            $task->save();

            return response()->json([
                "message" => "Task updated successfully"
            ], 404);
        } else {
            return response()->json([
                "message" => "Task not found"
            ], 404);
        }

    }
}
