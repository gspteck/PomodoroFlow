<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();

            $table->integer('user_id');
            $table->string('task_title');
            $table->string('task_description');
            $table->boolean('task_status');
            $table->timestamp('task_due_date');
            $table->timestamp('task_creation_date');
            $table->timestamp('task_update_date');
            $table->integer('task_priority');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
