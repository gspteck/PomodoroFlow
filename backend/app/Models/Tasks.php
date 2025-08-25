<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tasks extends Model
{
    use HasFactory;

    protected $table = 'tasks';
    protected $fillable = [
        'task_id',
        'user_id',
        'task_title',
        'task_description',
        'task_status',
        'task_due_date',
        'task_creation_date',
        'task_update_date',
        'task_priority',
    ];
}
