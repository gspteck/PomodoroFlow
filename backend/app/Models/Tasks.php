<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tasks extends Model
{
    use HasFactory;

    protected $table = 'tasks';
    protected $fillable = [
        'user_id',
        'task_title',
        'task_description',
        'task_status',
        'task_due_date',
        'task_priority',
    ];
}
